// contestRules.mjs — コンテストのルール計算（エンジンに依存しない純粋な関数）
//
// ルール:
//  ・1ステージは「自分3キャラ vs 相手3キャラ」。3キャラの得点の合計が高い方がステージの勝者。
//  ・そのステージの敵味方6キャラのうち、最高得点の1キャラだけが、自分の得点の20%（切り捨て）
//    をボーナスとして合計に加算される。
//  ・3ステージのうち2ステージ以上勝った側が勝利。

import { makeRng } from "./stats.mjs";

export const BONUS_PERCENT = 20;

// 整数のまま計算して浮動小数点の誤差を避ける（例: 289905 * 20 / 100 = 57981）
const bonusOf = (score, percent = BONUS_PERCENT) => Math.floor((score * percent) / 100);

/**
 * 1ステージの合計点を計算する（実際の対戦結果の検算用）。
 * a, b: 各側の3キャラの得点の配列
 * 最高得点が同点のときは A 側にボーナスを与える（確率は無視できるほど小さい）。
 */
export function stageTotals(a, b, percent = BONUS_PERCENT) {
  const maxA = Math.max(...a);
  const maxB = Math.max(...b);
  const sum = (xs) => xs.reduce((s, x) => s + x, 0);
  const bonusToA = maxA >= maxB;
  const bonus = bonusOf(bonusToA ? maxA : maxB, percent);
  return {
    totalA: sum(a) + (bonusToA ? bonus : 0),
    totalB: sum(b) + (bonusToA ? 0 : bonus),
    bonus,
    bonusSide: bonusToA ? "A" : "B",
    // ボーナスを受け取った編成の番号（その側の何人目か。0始まり）
    bonusIndex: bonusToA ? a.indexOf(maxA) : b.indexOf(maxB),
  };
}

/**
 * 1ステージのAの勝率をモンテカルロで求める。
 * scoresA / scoresB: 各キャラのシミュレーション得点（Float64Array）の配列。
 * 各試行で、全キャラのスコアをそれぞれ独立にランダムに1つ引いて、ステージを1回戦わせる。
 * 合計点が同点のときは0.5勝として扱う。
 * あわせて、6人それぞれが「最高得点になりボーナスを受け取る確率」も返す。
 */
export function stageWinProb(scoresA, scoresB, M, rng, percent = BONUS_PERCENT) {
  let win = 0, tie = 0;
  const countA = new Array(scoresA.length).fill(0); // 各編成がボーナスを受け取った回数
  const countB = new Array(scoresB.length).fill(0);
  for (let m = 0; m < M; m++) {
    let sumA = 0, sumB = 0, maxA = -Infinity, maxB = -Infinity, argA = 0, argB = 0;
    for (let i = 0; i < scoresA.length; i++) {
      const arr = scoresA[i];
      const x = arr[(rng() * arr.length) | 0];
      sumA += x;
      if (x > maxA) { maxA = x; argA = i; }
    }
    for (let i = 0; i < scoresB.length; i++) {
      const arr = scoresB[i];
      const x = arr[(rng() * arr.length) | 0];
      sumB += x;
      if (x > maxB) { maxB = x; argB = i; }
    }
    if (maxA >= maxB) { sumA += bonusOf(maxA, percent); countA[argA]++; }
    else { sumB += bonusOf(maxB, percent); countB[argB]++; }
    if (sumA > sumB) win++;
    else if (sumA === sumB) tie++;
  }
  const bonusByA = countA.map((c) => c / M);
  const bonusByB = countB.map((c) => c / M);
  return {
    p: (win + 0.5 * tie) / M,
    bonusA: bonusByA.reduce((x, y) => x + y, 0), // A側のいずれかがボーナスを得る確率
    bonusByA, // 編成ごとの、ボーナスを受け取る確率
    bonusByB,
  };
}

/** 各ステージの勝率 ps から、Aが「ちょうど w ステージ勝つ」確率の配列を返す（ステージ同士は独立） */
export function winsDistribution(ps) {
  let dist = [1];
  for (const p of ps) {
    const next = new Array(dist.length + 1).fill(0);
    dist.forEach((q, w) => {
      next[w] += q * (1 - p);
      next[w + 1] += q * p;
    });
    dist = next;
  }
  return dist;
}

/** 過半数のステージに勝つ確率（3ステージなら2勝以上） */
export function matchWinProb(ps) {
  const need = Math.floor(ps.length / 2) + 1;
  return winsDistribution(ps).slice(need).reduce((s, x) => s + x, 0);
}

function resample(arr, rng) {
  const out = new Float64Array(arr.length);
  for (let i = 0; i < arr.length; i++) out[i] = arr[(rng() * arr.length) | 0];
  return out;
}

/**
 * シミュレーション回数が有限であることによる不確かさを、ブートストラップで見積もる。
 * 全キャラのスコアを復元抽出し直して、勝率を何度も計算し直す。
 */
export function bootstrapMatch(
  stagesA,
  stagesB,
  { R = 100, M = 100000, seed = 77, alpha = 0.05, percent = BONUS_PERCENT } = {}
) {
  const rng = makeRng(seed);
  const results = new Float64Array(R);
  for (let r = 0; r < R; r++) {
    const ps = stagesA.map((sa, s) =>
      stageWinProb(
        sa.map((x) => resample(x, rng)),
        stagesB[s].map((x) => resample(x, rng)),
        M,
        rng,
        percent
      ).p
    );
    results[r] = matchWinProb(ps);
  }
  results.sort();
  return {
    lower: results[Math.floor((alpha / 2) * R)],
    upper: results[Math.min(R - 1, Math.floor((1 - alpha / 2) * R))],
  };
}
