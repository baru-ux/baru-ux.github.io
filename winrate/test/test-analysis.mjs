import assert from "node:assert/strict";
import { loadoutFromQuery, toQuery, parseTeam, collectScores, analyze, analyzeCI } from "../src/analysis.mjs";
import { makeRng } from "../src/stats.mjs";

// 1) URL解析
const url = "https://example.com/ja/simulator?stage=7&params=1500-1200-1300-40&items=11-12&cards=1-2-3_4-5-6&enter_percents=1#abc";
assert.equal(toQuery(url), "stage=7&params=1500-1200-1300-40&items=11-12&cards=1-2-3_4-5-6&enter_percents=1");
const lo = loadoutFromQuery(toQuery(url));
assert.equal(lo.stageId, 7);
assert.equal(lo.enterPercents, true);
assert.deepEqual(lo.params, [1500, 1200, 1300, 40]);
assert.deepEqual(lo.skillCardIdGroups, [[1, 2, 3], [4, 5, 6]]);
assert.equal(lo.customizationGroups.length, 2);
// カードのグループ数とカスタマイズのグループ数が合わないときは、空のカスタマイズに置き換わる
assert.deepEqual(loadoutFromQuery("stage=3&cards=1-2_3&customizations=1x1").customizationGroups, [[{}, {}], [{}]]);
console.log("URL解析 OK");

// 2) 入力の解析
const nine = Array.from({ length: 9 }, (_, i) => `q${i}`).join("\r\n\r\n");
const t = parseTeam(nine);
assert.equal(t.stages.length, 3);
assert.deepEqual(t.stages[1], ["q3", "q4", "q5"]);
assert.throws(() => parseTeam("a\nb"), /倍数/);
assert.throws(() => parseTeam("   \n "), /入力されていません/);
console.log("入力の解析 OK");

// 3) 18編成の順次シミュレーション（モック）→ 集計
const rng = makeRng(9);
const gauss = () => Math.sqrt(-2 * Math.log(1 - rng())) * Math.cos(2 * Math.PI * rng());
const calls = [];
const simulateOne = async (input, n, onRuns) => {
  calls.push(input);
  const mu = Number(input.split("mu=")[1]);
  const out = Float64Array.from({ length: n }, () => Math.round(mu + mu * 0.25 * gauss()));
  onRuns(Math.floor(n / 2)); onRuns(n);
  return out;
};
const mk = (mus) => parseTeam(mus.map((m) => `https://x/?mu=${m}`).join("\n"));
const teamA = mk([300000, 200000, 250000, 280000, 210000, 240000, 260000, 190000, 230000]);
const teamB = mk([270000, 220000, 240000, 270000, 230000, 250000, 250000, 200000, 230000]);
const progress = [];
const { A, B } = await collectScores({ teamA, teamB }, simulateOne, { numRuns: 500, onProgress: (p) => progress.push(p.fraction) });
assert.equal(calls.length, 18);
assert.equal(A.length, 3); assert.equal(A[0].length, 3); assert.equal(A[2][2].length, 500);
assert.ok(progress.every((x, i) => i === 0 || x >= progress[i - 1]), "進捗は単調増加");
assert.equal(progress.at(-1), 1);
const r = analyze(A, B, { M: 100000 });
console.log("試合の勝利確率:", (r.pMatch * 100).toFixed(1) + "%", " 勝利数の分布:", r.dist.map((x) => (x * 100).toFixed(1)));
assert.ok(Math.abs(r.dist.reduce((a, b) => a + b, 0) - 1) < 1e-9);
const ci = analyzeCI(A, B, { R: 30, M: 20000 });
assert.ok(ci.lower <= r.pMatch + 0.02 && r.pMatch - 0.02 <= ci.upper);
console.log("95%区間:", ci);

// 4) 中断（AbortError）
const ac = new AbortController();
const slow = async (input, n, onRuns, signal) => { ac.abort(); throw signal.reason; };
await assert.rejects(
  collectScores({ teamA, teamB }, slow, { numRuns: 10, signal: ac.signal }),
  (e) => e.name === "AbortError"
);
// 5) シミュレーション失敗時は、どの編成かを含むエラーになる
await assert.rejects(
  collectScores({ teamA, teamB }, async () => { throw new Error("boom"); }, { numRuns: 10 }),
  /自分 ステージ1-1: boom/
);
console.log("すべてのテストに合格しました");
