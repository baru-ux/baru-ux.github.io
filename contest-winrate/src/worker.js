import {
  getStage,
  loadoutFromSearchParams,
  playScores,
  stageConfigFor,
} from "gakumas-loadout";
import { contestBootstrapCI, contestWinRate, summarize } from "./contest.js";

function parseQueryParams(rawUrl, label) {
  const text = String(rawUrl || "").trim();
  if (!text) throw new Error(`${label} のURLが空です。`);
  const qIdx = text.indexOf("?");
  const afterQ = qIdx >= 0 ? text.slice(qIdx + 1) : text;
  const queryStr = afterQ.split("#")[0];
  return new URLSearchParams(queryStr);
}

async function runLoadoutSimulation(rawUrl, label, n, seed) {
  const searchParams = parseQueryParams(rawUrl, label);
  const loadout = loadoutFromSearchParams(searchParams);
  const stage = getStage(loadout.stageId);
  if (!stage) {
    throw new Error(`${label}: ステージ (${loadout.stageId}) が見つかりません。`);
  }
  const idolStageConfig = stageConfigFor(stage, loadout);
  const scores = await playScores(idolStageConfig, [], {
    seed,
    runs: n,
  });
  return Float64Array.from(scores);
}

self.addEventListener("message", async (event) => {
  const { urlsA, urlsB, n, seedA, seedB } = event.data;

  try {
    const scoresA = [[], [], []];
    const scoresB = [[], [], []];
    let step = 0;

    const sides = [
      ["A", urlsA, scoresA, Number(seedA)],
      ["B", urlsB, scoresB, Number(seedB)],
    ];

    for (const [sideLabel, uGrid, sGrid, baseSeed] of sides) {
      let slotIndex = 0;
      for (let s = 0; s < 3; s++) {
        for (let c = 0; c < 3; c++) {
          slotIndex += 1;
          step += 1;
          self.postMessage({
            type: "progress",
            step,
            total: 18,
            message: `${sideLabel} ステージ${s + 1}-枠${c + 1} をシミュレーション中... (${step}/18)`,
          });

          sGrid[s][c] = await runLoadoutSimulation(
            uGrid[s][c],
            `${sideLabel} ステージ${s + 1}-枠${c + 1}`,
            n,
            baseSeed + slotIndex * 1009
          );
        }
      }
    }

    self.postMessage({
      type: "progress",
      step: 18,
      total: 18,
      message: "コンテスト勝率・95%信頼区間を集計中...",
    });

    const res = contestWinRate(scoresA, scoresB, n);
    const ci = contestBootstrapCI(scoresA, scoresB, n, { iters: 1000 });

    const stages = [0, 1, 2].map((s) => {
      const sa = summarize(res.stageTotalA[s]);
      const sb = summarize(res.stageTotalB[s]);
      return {
        stage: s + 1,
        winRate: res.stageWinRates[s],
        winCount: res.stageWinCountsA[s],
        meanA: Math.round(sa.mean),
        sdA: Math.round(sa.sd),
        meanB: Math.round(sb.mean),
        sdB: Math.round(sb.sd),
      };
    });

    self.postMessage({
      type: "done",
      result: {
        n,
        seedA: Number(seedA),
        seedB: Number(seedB),
        matchWinRateA: res.rate,
        ci95: { lower: ci.lower, upper: ci.upper },
        avgStageWinsA: res.avgStageWinsA,
        tieBreakCount: res.tieBreakCount,
        stages,
      },
    });
  } catch (err) {
    self.postMessage({
      type: "error",
      error: err instanceof Error ? err.message : String(err),
    });
  }
});