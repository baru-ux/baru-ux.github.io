import { winRate, bootstrapCI, normalApprox, summarize, makeRng } from "../src/stats.mjs";

// 1) 総当たりの厳密値と比較（小サイズ）
const a = [3, 5, 5, 8], b = [4, 5, 9];
let w = 0;
for (const x of a) for (const y of b) w += x > y ? 1 : x === y ? 0.5 : 0;
console.log("brute:", w / (a.length * b.length), "fast:", winRate(a, b).rate);

// 2) 正規分布から生成して理論値と比較 (平均100 vs 95, 標準偏差10 → 理論 ≈ 0.638)
const rng = makeRng(1);
const gauss = () => Math.sqrt(-2 * Math.log(1 - rng())) * Math.cos(2 * Math.PI * rng());
const N = 10000;
const A = Array.from({ length: N }, () => 100 + 10 * gauss());
const B = Array.from({ length: N }, () => 95 + 10 * gauss());
console.log("summary A:", summarize(A));
const t0 = Date.now();
console.log("exact:", winRate(A, B), "normal approx:", normalApprox(A, B));
console.log("bootstrap 95% CI:", bootstrapCI(A, B, { iters: 300 }), "ms:", Date.now() - t0);
