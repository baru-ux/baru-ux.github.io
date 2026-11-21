// simulate.js — Web Worker のプールと、1編成ぶんのシミュレーション

import { loadoutFromQuery, toQuery } from "./analysis.mjs";

const MAX_WORKERS = 8;
export const STRATEGY = "HeuristicStrategy";

let pool = null;
let nextJobId = 0;

function getPool() {
  if (!pool) {
    const n = Math.max(1, Math.min(navigator.hardwareConcurrency || 4, MAX_WORKERS));
    pool = Array.from({ length: n }, () => new Worker("worker.js"));
  }
  return pool;
}

/** すべての Worker を止める（キャンセル時・ページを離れるとき）。次の実行で自動的に作り直される。 */
export function terminatePool() {
  pool?.forEach((w) => w.terminate());
  pool = null;
}

const abortError = () => new DOMException("Aborted", "AbortError");

/**
 * 1編成を numRuns 回シミュレーションし、得点の配列を返す。
 * 回数は全 Worker に等分して並列に実行する。
 */
export function runLoadout({ loadout, numRuns, strategyName = STRATEGY }, onProgress, signal) {
  if (signal?.aborted) return Promise.reject(signal.reason ?? abortError());

  const workers = getPool();
  const per = Math.ceil(numRuns / workers.length);
  const jobId = nextJobId++;

  return new Promise((resolve, reject) => {
    const parts = [];
    const listeners = [];
    let finished = 0;
    let used = 0;

    const cleanup = () => {
      listeners.forEach(([w, fn]) => w.removeEventListener("message", fn));
      signal?.removeEventListener("abort", onAbort);
    };
    const fail = (err) => {
      cleanup();
      terminatePool(); // 残りの Worker の無駄な計算を止める
      reject(err);
    };
    const onAbort = () => fail(signal.reason ?? abortError());
    signal?.addEventListener("abort", onAbort, { once: true });

    workers.forEach((w, i) => {
      const count = Math.min(per, numRuns - i * per);
      if (count <= 0) return;
      used++;
      const fn = ({ data }) => {
        if (data.jobId !== jobId) return;
        if (data.type === "progress") {
          onProgress?.(data.delta);
        } else if (data.type === "done") {
          parts[i] = data.scores;
          if (++finished === used) {
            cleanup();
            const total = parts.reduce((s, p) => s + p.length, 0);
            const all = new Float64Array(total);
            let offset = 0;
            for (const p of parts) {
              if (!p) continue;
              all.set(p, offset);
              offset += p.length;
            }
            resolve(all);
          }
        } else if (data.type === "error") {
          fail(new Error(data.message));
        }
      };
      w.addEventListener("message", fn);
      listeners.push([w, fn]);
      w.postMessage({ type: "run", jobId, loadout, count, strategyName });
    });
  });
}

/** analysis.mjs の collectScores に渡す関数: URL（またはクエリ）→ 得点の配列 */
export async function simulateOne(input, numRuns, onRuns, signal) {
  const loadout = loadoutFromQuery(toQuery(input));
  let done = 0;
  return runLoadout(
    { loadout, numRuns },
    (delta) => {
      done += delta;
      onRuns(done);
    },
    signal
  );
}
