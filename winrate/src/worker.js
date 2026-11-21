// worker.js — 1編成ぶんのシミュレーションを実行する Web Worker
// アプリ本体の simulator/index.js (createSimulation) と同じ呼び出し方をしている。

import {
  IdolConfig,
  StageConfig,
  IdolStageConfig,
  StageEngine,
  StagePlayer,
  STRATEGIES,
  resetRand,
} from "gakumas-engine";
import { Stages } from "gakumas-data";

self.addEventListener("message", async ({ data }) => {
  if (data.type !== "run") return;
  const { jobId, loadout, count, strategyName } = data;

  try {
    const stage = Stages.getById(loadout.stageId);
    if (!stage) {
      throw new Error(`ステージID ${loadout.stageId} が見つかりません。URLを確認してください。`);
    }
    if (stage.type === "linkContest") {
      throw new Error("リンクコンテストのステージには対応していません。");
    }

    const config = new IdolStageConfig(
      new IdolConfig(loadout),
      new StageConfig(stage),
      loadout.enterPercents
    );
    // 複数の Worker が同じ乱数列を使わないよう、ジョブごとにランダムなシードで初期化する
    resetRand(crypto.getRandomValues(new Uint32Array(1))[0]);

    const engine = new StageEngine(config, null);
    const strategy = new STRATEGIES[strategyName](engine);
    engine.strategy = strategy;

    const scores = new Float64Array(count);
    const step = Math.max(1, Math.floor(count / 20));
    let reported = 0;
    for (let i = 0; i < count; i++) {
      const result = await new StagePlayer(engine, strategy).play();
      scores[i] = result.score;
      if ((i + 1) % step === 0 || i === count - 1) {
        self.postMessage({ type: "progress", jobId, delta: i + 1 - reported });
        reported = i + 1;
      }
    }
    self.postMessage({ type: "done", jobId, scores }, [scores.buffer]);
  } catch (err) {
    self.postMessage({ type: "error", jobId, message: err?.message || String(err) });
  }
});
