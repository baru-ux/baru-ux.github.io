import assert from "node:assert/strict";
import { stageTotals, stageWinProb, winsDistribution, matchWinProb } from "../src/contestRules.mjs";
import { makeRng } from "../src/stats.mjs";

// 1) スクリーンショットの実データ（左=自分 / 右=相手）
const shot = [
  { a: [504929, 175858, 339118], b: [273622, 316302, 189406], ta: 1120890, tb: 779330 },
  { a: [235225, 244832, 331357], b: [278441, 260902, 272021], ta: 877685, tb: 811364 },
  { a: [171998, 51391, 207742], b: [127071, 169036, 289905], ta: 431131, tb: 643993 },
];
for (const [i, s] of shot.entries()) {
  const r = stageTotals(s.a, s.b);
  assert.equal(r.totalA, s.ta, `stage${i + 1} A`);
  assert.equal(r.totalB, s.tb, `stage${i + 1} B`);
  console.log(`ステージ${i + 1}: A ${r.totalA} / B ${r.totalB} (ボーナス ${r.bonus} → ${r.bonusSide})  OK`);
}

// 2) 確定的な得点（各キャラ1通り）なら、確率は0か1になり、スクショの勝敗と一致する
const rng = makeRng(1);
const ps = shot.map((s) =>
  stageWinProb(s.a.map((x) => [x]), s.b.map((x) => [x]), 10, rng).p
);
assert.deepEqual(ps, [1, 1, 0]);
assert.equal(matchWinProb(ps), 1);
console.log("確定的な入力: ステージ勝率", ps, "→ 試合勝率", matchWinProb(ps), " OK");

// 3) 勝利数の分布: 全ステージ0.5なら 2勝以上の確率は0.5
assert.ok(Math.abs(matchWinProb([0.5, 0.5, 0.5]) - 0.5) < 1e-12);
const brute = (p) => { // 8通りの全列挙
  let t = 0;
  for (let m = 0; m < 8; m++) {
    let pr = 1, w = 0;
    for (let i = 0; i < 3; i++) { const win = (m >> i) & 1; pr *= win ? p[i] : 1 - p[i]; w += win; }
    if (w >= 2) t += pr;
  }
  return t;
};
const p3 = [0.7, 0.55, 0.3];
assert.ok(Math.abs(matchWinProb(p3) - brute(p3)) < 1e-12);
console.log("過半数勝利の確率（全列挙と一致）:", matchWinProb(p3).toFixed(4), " OK");

// 4) モンテカルロを、小さな離散分布の全列挙（厳密値）と比較
const dist = [[100, 300], [150, 250], [120, 320], [110, 310], [140, 260], [90, 330]];
let exactWin = 0, exactTie = 0;
const total = 2 ** 6;
for (let m = 0; m < total; m++) {
  const x = dist.map((d, i) => d[(m >> i) & 1]);
  const r = stageTotals(x.slice(0, 3), x.slice(3));
  if (r.totalA > r.totalB) exactWin++; else if (r.totalA === r.totalB) exactTie++;
}
const exact = (exactWin + 0.5 * exactTie) / total;
const mc = stageWinProb(dist.slice(0, 3), dist.slice(3), 400000, makeRng(5)).p;
console.log(`ステージ勝率 厳密 ${exact.toFixed(4)} / モンテカルロ ${mc.toFixed(4)}`);
assert.ok(Math.abs(exact - mc) < 0.005);
console.log("すべてのテストに合格しました");
