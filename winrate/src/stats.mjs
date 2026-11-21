// stats.js — エンジンに依存しない統計関数群（単体でテスト可能）

/** 平均・標準偏差・中央値などの要約 */
export function summarize(scores) {
  const n = scores.length;
  const sorted = Float64Array.from(scores).sort();
  const mean = sorted.reduce((s, x) => s + x, 0) / n;
  const variance = sorted.reduce((s, x) => s + (x - mean) ** 2, 0) / (n - 1);
  const median =
    n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  return { n, mean, sd: Math.sqrt(variance), median, min: sorted[0], max: sorted[n - 1] };
}

// ソート済み配列 sorted の中で v より小さい要素の数
function lowerBound(sorted, v) {
  let lo = 0, hi = sorted.length;
  while (lo < hi) {
    const m = (lo + hi) >> 1;
    if (sorted[m] < v) lo = m + 1; else hi = m;
  }
  return lo;
}

// ソート済み配列 sorted の中で v 以下の要素の数
function upperBound(sorted, v) {
  let lo = 0, hi = sorted.length;
  while (lo < hi) {
    const m = (lo + hi) >> 1;
    if (sorted[m] <= v) lo = m + 1; else hi = m;
  }
  return lo;
}

/**
 * Aの勝率を全組み合わせ(N×M)で厳密に数える。同点は0.5勝として扱う。
 * 計算量は O(N log M)。
 */
export function winRate(a, b) {
  const sortedB = Float64Array.from(b).sort();
  let win = 0, tie = 0;
  for (const x of a) {
    const lo = lowerBound(sortedB, x);
    const hi = upperBound(sortedB, x);
    win += lo;          // Bより高いスコアの数
    tie += hi - lo;     // 同点の数
  }
  const total = a.length * b.length;
  return {
    rate: (win + 0.5 * tie) / total,
    winOnly: win / total,
    tie: tie / total,
  };
}

/** 再現性のある簡易乱数 (mulberry32) */
export function makeRng(seed = 12345) {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function resample(arr, rng) {
  const out = new Float64Array(arr.length);
  for (let i = 0; i < arr.length; i++) out[i] = arr[Math.floor(rng() * arr.length)];
  return out;
}

/**
 * ブートストラップによる勝率の信頼区間。
 * 手元のスコア群から復元抽出を繰り返し、勝率のばらつきを見積もる。
 */
export function bootstrapCI(a, b, { iters = 1000, alpha = 0.05, seed = 2024 } = {}) {
  const rng = makeRng(seed);
  const rates = new Float64Array(iters);
  for (let i = 0; i < iters; i++) {
    rates[i] = winRate(resample(a, rng), resample(b, rng)).rate;
  }
  rates.sort();
  return {
    lower: rates[Math.floor((alpha / 2) * iters)],
    upper: rates[Math.min(iters - 1, Math.floor((1 - alpha / 2) * iters))],
  };
}

// 標準正規分布の累積分布関数（Abramowitz–Stegun 近似）
function normalCdf(z) {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

/** 正規分布で近似した概算勝率（比較・検算用） */
export function normalApprox(a, b) {
  const sa = summarize(a), sb = summarize(b);
  return normalCdf((sa.mean - sb.mean) / Math.sqrt(sa.sd ** 2 + sb.sd ** 2));
}
