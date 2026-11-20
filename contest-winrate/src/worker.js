import { Stages } from "gakumas-data";
import {
  loadoutFromSearchParams,
  playScores,
  stageConfigFor,
} from "gakumas-loadout";

const STAGES_PER_MATCH = 3;
const SLOTS_PER_STAGE = 3;
const TOTAL_SLOTS = STAGES_PER_MATCH * SLOTS_PER_STAGE * 2; // 18枠

let isRunning = false;
let cancelRequested = false;

self.addEventListener("message", async (event) => {
  const msg = event.data;
  if (!msg || typeof msg !== "object") return;

  if (msg.type === "cancel") {
    cancelRequested = true;
    return;
  }

  if (msg.type === "ping") {
    self.postMessage({ type: "ready" });
    return;
  }

  if (msg.type !== "run") return;
  if (isRunning) {
    self.postMessage({
      type: "error",
      message: "すでにシミュレーションが実行中です。",
    });
    return;
  }

  isRunning = true;
  cancelRequested = false;

  try {
    const trials = Math.max(1, Number(msg.trials) || 500);
    const chunkSize = Math.max(1, Math.min(trials, Number(msg.chunkSize) || 50));
    const seedA = Number(msg.seedA) || 10000;
    const seedB = Number(msg.seedB) || 900000;
    const sideA = Array.isArray(msg.sideA) ? msg.sideA : [];
    const sideB = Array.isArray(msg.sideB) ? msg.sideB : [];

    // 1. 18枠分のロードアウトと StageConfig を順次構築しながら進捗を通知
    self.postMessage({
      type: "progress",
      phase: "loading",
      label: `編成を読み込み中 (0/${TOTAL_SLOTS})...`,
      current: 0,
      total: TOTAL_SLOTS,
    });

    const configsA = [];
    const configsB = [];
    let loadedCount = 0;

    for (let s = 0; s < STAGES_PER_MATCH; s++) {
      const stageConfigsA = [];
      for (let i = 0; i < SLOTS_PER_STAGE; i++) {
        const rawUrl = sideA[s]?.[i] ?? "";
        stageConfigsA.push(buildStageConfigFromInput(rawUrl, "A", s + 1, i + 1));
        loadedCount++;
        self.postMessage({
          type: "progress",
          phase: "loading",
          label: `編成を読み込み中 (${loadedCount}/${TOTAL_SLOTS})...`,
          current: loadedCount,
          total: TOTAL_SLOTS,
        });
      }
      configsA.push(stageConfigsA);
    }

    for (let s = 0; s < STAGES_PER_MATCH; s++) {
      const stageConfigsB = [];
      for (let i = 0; i < SLOTS_PER_STAGE; i++) {
        const rawUrl = sideB[s]?.[i] ?? "";
        stageConfigsB.push(buildStageConfigFromInput(rawUrl, "B", s + 1, i + 1));
        loadedCount++;
        self.postMessage({
          type: "progress",
          phase: "loading",
          label: `編成を読み込み中 (${loadedCount}/${TOTAL_SLOTS})...`,
          current: loadedCount,
          total: TOTAL_SLOTS,
        });
      }
      configsB.push(stageConfigsB);
    }

    if (cancelRequested) {
      self.postMessage({ type: "cancelled" });
      return;
    }

    // 2. チャンク単位でスコア生成＆コンテスト勝敗判定
    let completed = 0;
    let matchWinsA = 0;
    const stageWinsA = [0, 0, 0];
    const stageSumA = [0, 0, 0];
    const stageSumB = [0, 0, 0];
    const stageSqSumA = [0, 0, 0];
    const stageSqSumB = [0, 0, 0];
    const matchOutcomes = new Uint8Array(trials); // 1: A勝ち, 0: B勝ち

    while (completed < trials) {
      if (cancelRequested) {
        self.postMessage({ type: "cancelled" });
        return;
      }

      const batchCount = Math.min(chunkSize, trials - completed);

      // グローバル乱数列の干渉を避けるため、枠ごとにオフセットしたシードで順次実行
      const batchScoresA = Array.from({ length: STAGES_PER_MATCH }, () =>
        Array.from({ length: SLOTS_PER_STAGE }, () => [])
      );
      const batchScoresB = Array.from({ length: STAGES_PER_MATCH }, () =>
        Array.from({ length: SLOTS_PER_STAGE }, () => [])
      );

      for (let s = 0; s < STAGES_PER_MATCH; s++) {
        for (let i = 0; i < SLOTS_PER_STAGE; i++) {
          const slotOffset = (completed * 100 + s * 10 + i) * 9973;
          batchScoresA[s][i] = await playScores(configsA[s][i], [], {
            seed: (seedA + slotOffset) >>> 0,
            runs: batchCount,
          });
          batchScoresB[s][i] = await playScores(configsB[s][i], [], {
            seed: (seedB + slotOffset) >>> 0,
            runs: batchCount,
          });
        }
      }

      for (let b = 0; b < batchCount; b++) {
        let stageWinCountForA = 0;

        for (let s = 0; s < STAGES_PER_MATCH; s++) {
          let totalA = 0;
          let totalB = 0;
          let maxScore = -Infinity;

          const charScoresA = [];
          const charScoresB = [];

          for (let i = 0; i < SLOTS_PER_STAGE; i++) {
            const scA = Number(batchScoresA[s][i][b]) || 0;
            const scB = Number(batchScoresB[s][i][b]) || 0;
            charScoresA.push(scA);
            charScoresB.push(scB);
            if (scA > maxScore) maxScore = scA;
            if (scB > maxScore) maxScore = scB;
          }

          // ステージ内最高スコアに +20%（切り捨て）ボーナス
          const bonus = maxScore > 0 ? Math.floor(maxScore * 0.2) : 0;

          for (let i = 0; i < SLOTS_PER_STAGE; i++) {
            const scA = charScoresA[i];
            const scB = charScoresB[i];
            totalA += scA + (scA === maxScore ? bonus : 0);
            totalB += scB + (scB === maxScore ? bonus : 0);
          }

          // 同点時は A側（左チーム）に +1 点
          const effectiveA = totalA === totalB ? totalA + 1 : totalA;
          if (effectiveA > totalB) {
            stageWinCountForA++;
            stageWinsA[s]++;
          }

          stageSumA[s] += totalA;
          stageSumB[s] += totalB;
          stageSqSumA[s] += totalA * totalA;
          stageSqSumB[s] += totalB * totalB;
        }

        const isMatchWinA = stageWinCountForA >= 2 ? 1 : 0;
        if (isMatchWinA) matchWinsA++;
        matchOutcomes[completed + b] = isMatchWinA;
      }

      completed += batchCount;

      self.postMessage({
        type: "progress",
        phase: "simulating",
        label: `シミュレーション中 (${completed}/${trials})...`,
        current: completed,
        total: trials,
        winRateA: matchWinsA / completed,
      });
    }

    const ci95 = computeBootstrapCi95(matchOutcomes, 400);
    const stages = Array.from({ length: STAGES_PER_MATCH }, (_, s) => {
      const meanA = stageSumA[s] / trials;
      const meanB = stageSumB[s] / trials;
      const sdA = Math.sqrt(Math.max(0, stageSqSumA[s] / trials - meanA * meanA));
      const sdB = Math.sqrt(Math.max(0, stageSqSumB[s] / trials - meanB * meanB));
      return {
        stage: s + 1,
        winRateA: stageWinsA[s] / trials,
        meanA,
        sdA,
        meanB,
        sdB,
      };
    });

    self.postMessage({
      type: "done",
      trials,
      winRateA: matchWinsA / trials,
      ci95Low: ci95.low,
      ci95High: ci95.high,
      stages,
    });
  } catch (err) {
    self.postMessage({
      type: "error",
      message: err instanceof Error ? err.message : String(err),
    });
  } finally {
    isRunning = false;
    cancelRequested = false;
  }
});

function buildStageConfigFromInput(input, side, stageNum, slotNum) {
  const trimmed = String(input || "").trim();
  if (!trimmed) {
    throw new Error(`${side}側 ステージ${stageNum} 枠${slotNum} の URL が空です。`);
  }
  const queryString = trimmed.includes("?")
    ? trimmed.slice(trimmed.indexOf("?") + 1)
    : trimmed.replace(/^[?#]/, "");
  const params = new URLSearchParams(queryString);
  const loadout = loadoutFromSearchParams(params);
  const stage =
    (loadout.stageId ? Stages.getById(loadout.stageId) : null) ??
    Stages.getAll()[0];
  if (!stage) {
    throw new Error(`ステージデータが見つかりませんでした（stageId: ${loadout.stageId}）。`);
  }
  return stageConfigFor(stage, loadout);
}

function computeBootstrapCi95(outcomes, resamples = 400) {
  const n = outcomes.length;
  if (n === 0) return { low: 0, high: 0 };
  const means = new Float64Array(resamples);

  for (let r = 0; r < resamples; r++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const idx = Math.floor(Math.random() * n);
      sum += outcomes[idx];
    }
    means[r] = sum / n;
  }

  means.sort();
  const lowIdx = Math.max(0, Math.floor(resamples * 0.025));
  const highIdx = Math.min(resamples - 1, Math.floor(resamples * 0.975));
  return {
    low: means[lowIdx],
    high: means[highIdx],
  };
}