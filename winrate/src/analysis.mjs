// analysis.mjs — 画面に依存しない処理（URLの解析・18編成の順次シミュレーション・集計）
// シミュレーションの実体（Web Worker）は simulateOne として外から渡す。
// そのため、ここはNodeでもテストできる。

import { makeRng, summarize } from "./stats.mjs";
import {
  BONUS_PERCENT,
  stageWinProb,
  winsDistribution,
  matchWinProb,
  bootstrapMatch,
} from "./contestRules.mjs";

// ---- URL → 編成 ----------------------------------------------------------
// tests/lib.mjs の loadoutFromQuery と同じ解析（アプリのURLと同じ形式）。

function deserializeIds(str) {
  return str.split("-").map((n) => parseInt(n, 10) || 0);
}

function deserializeCustomizations(str) {
  return str.split("-").map((c) =>
    c
      .split("e")
      .filter((e) => e)
      .reduce((acc, cur) => {
        const [k, v] = cur.split("x");
        acc[k] = parseInt(v, 10);
        return acc;
      }, {})
  );
}

export function loadoutFromQuery(queryString) {
  const searchParams = new URLSearchParams(queryString);
  const skillCardIdGroups = (searchParams.get("cards") || "").split("_").map(deserializeIds);
  let customizationGroups = (searchParams.get("customizations") || "")
    .split("_")
    .map(deserializeCustomizations);

  if (skillCardIdGroups.length != customizationGroups.length) {
    customizationGroups = skillCardIdGroups.map((g) => g.map(() => ({})));
  }

  return {
    stageId: parseInt(searchParams.get("stage"), 10),
    enterPercents: searchParams.get("enter_percents") == "1",
    supportBonus: parseFloat(searchParams.get("support_bonus")) || null,
    params: deserializeIds(searchParams.get("params") || ""),
    pItemIds: deserializeIds(searchParams.get("items") || ""),
    skillCardIdGroups,
    customizationGroups,
  };
}

/** 貼り付けられたURL（または「?」以降）からクエリ文字列を取り出す */
export function toQuery(input) {
  let text = String(input).trim();
  const q = text.indexOf("?");
  if (q >= 0) text = text.slice(q + 1);
  return text.split("#")[0];
}

// ---- 入力の解析 ----------------------------------------------------------

/**
 * テキスト（1行に1編成）を、ステージごとの3編成に分ける。
 * 空行は無視する。行数は perStage の倍数でなければならない。
 */
export function parseTeam(text, perStage = 3) {
  const entries = String(text)
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (entries.length === 0) throw new Error("編成のURLが入力されていません。");
  if (entries.length % perStage !== 0) {
    throw new Error(
      `行数は${perStage}の倍数にしてください（現在 ${entries.length} 行）。ステージ1の${perStage}人 → ステージ2の${perStage}人 → … の順に、1行に1編成です。`
    );
  }
  const stages = [];
  for (let i = 0; i < entries.length; i += perStage) stages.push(entries.slice(i, i + perStage));
  return { entries, stages };
}

/**
 * 編成ごとの入力欄（配列）から、ステージごとの3編成に分ける。
 * values: ステージ1の1人目, 2人目, 3人目, ステージ2の1人目, … の順の文字列の配列。
 * 空の欄があれば、どの欄かを示すエラーにする。
 */
export function teamFromInputs(values, label, perStage = 3) {
  const entries = values.map((v) => String(v ?? "").trim());
  entries.forEach((v, i) => {
    if (!v) {
      throw new Error(`${label} ステージ${Math.floor(i / perStage) + 1}の${(i % perStage) + 1}人目のURLが入力されていません。`);
    }
  });
  const stages = [];
  for (let i = 0; i < entries.length; i += perStage) stages.push(entries.slice(i, i + perStage));
  return { entries, stages };
}

// ---- シミュレーションの実行 ------------------------------------------------

/**
 * 全編成（自分 → 相手の順）を1つずつシミュレーションする。
 * simulateOne(input, numRuns, onRuns, signal) → Promise<Float64Array>
 *   （1編成ぶんは内部で Web Worker が並列に処理する）
 * onProgress({ fraction, label, index, total })
 */
export async function collectScores({ teamA, teamB }, simulateOne, { numRuns, onProgress, signal } = {}) {
  const jobs = [];
  teamA.stages.forEach((st, s) =>
    st.forEach((input, k) => jobs.push({ side: "A", s, k, input, label: `自分 ステージ${s + 1}-${k + 1}` }))
  );
  teamB.stages.forEach((st, s) =>
    st.forEach((input, k) => jobs.push({ side: "B", s, k, input, label: `相手 ステージ${s + 1}-${k + 1}` }))
  );

  const A = teamA.stages.map((st) => new Array(st.length));
  const B = teamB.stages.map((st) => new Array(st.length));

  for (let j = 0; j < jobs.length; j++) {
    if (signal?.aborted) throw signal.reason ?? new DOMException("Aborted", "AbortError");
    const job = jobs[j];
    const report = (runs) =>
      onProgress?.({
        fraction: (j * numRuns + runs) / (jobs.length * numRuns),
        label: job.label,
        index: j,
        total: jobs.length,
      });
    report(0);
    let scores;
    try {
      scores = await simulateOne(job.input, numRuns, report, signal);
    } catch (e) {
      if (e?.name === "AbortError" || signal?.aborted) throw e;
      throw new Error(`${job.label}: ${e?.message || e}`);
    }
    (job.side === "A" ? A : B)[job.s][job.k] = scores;
  }
  onProgress?.({ fraction: 1, label: "完了", index: jobs.length, total: jobs.length });
  return { A, B };
}

// ---- 集計 ----------------------------------------------------------------

const MC_TRIALS = 300000;

/** 各ステージの勝率・勝利数の分布・試合の勝利確率 */
export function analyze(stagesA, stagesB, { percent = BONUS_PERCENT, M = MC_TRIALS, seed = 12345 } = {}) {
  const rng = makeRng(seed);
  const mean = (arr) => summarize(arr).mean;
  const stages = stagesA.map((sa, s) => {
    const r = stageWinProb(sa, stagesB[s], M, rng, percent);
    return {
      p: r.p,
      bonusA: r.bonusA,
      bonusByA: r.bonusByA,
      bonusByB: r.bonusByB,
      meanA: sa.map(mean),
      meanB: stagesB[s].map(mean),
    };
  });
  const ps = stages.map((x) => x.p);
  return { stages, dist: winsDistribution(ps), pMatch: matchWinProb(ps) };
}

/** シミュレーション回数が有限であることによる95%区間（ブートストラップ） */
export function analyzeCI(stagesA, stagesB, { percent = BONUS_PERCENT, R = 100, M = 50000 } = {}) {
  return bootstrapMatch(stagesA, stagesB, { R, M, percent });
}
