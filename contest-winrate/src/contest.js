export function makeRng(seed = 12345) {
  let state = Number(seed) >>> 0;
  if (state === 0) state = 12345;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let mixed = Math.imul(state ^ (state >>> 15), 1 | state);
    mixed = (mixed + Math.imul(mixed ^ (mixed >>> 7), 61 | mixed)) ^ mixed;
    return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
  };
}

export function summarize(scores) {
  const n = scores.length;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += scores[i];
  const mean = sum / Math.max(1, n);

  let sqDiff = 0;
  for (let i = 0; i < n; i++) {
    const d = scores[i] - mean;
    sqDiff += d * d;
  }
  const sd = Math.sqrt(sqDiff / Math.max(1, n - 1));
  return { n, mean, sd };
}

export function scoreStage(aChars, bChars, bonusRate = 0.2) {
  const sumA = aChars.reduce((acc, v) => acc + v, 0);
  const sumB = bChars.reduce((acc, v) => acc + v, 0);
  const maxA = Math.max(...aChars);
  const maxB = Math.max(...bChars);
  const top = Math.max(maxA, maxB);
  const bonus = Math.floor(top * bonusRate);

  let totalA = sumA + (maxA === top ? bonus : 0);
  const totalB = sumB + (maxB === top ? bonus : 0);

  const tieBreakApplied = totalA === totalB;
  if (tieBreakApplied) totalA += 1;

  return {
    totalA,
    totalB,
    tieBreakApplied,
    outcome: totalA > totalB ? 1 : 0,
  };
}

export function scoreMatch(stageScoresA, stageScoresB) {
  let stageWinsA = 0;
  let tieBreaks = 0;
  const totalsA = [];
  const totalsB = [];
  const stageWins = [];

  for (let s = 0; s < 3; s++) {
    const res = scoreStage(stageScoresA[s], stageScoresB[s], 0.2);
    if (res.tieBreakApplied) tieBreaks += 1;
    stageWins.push(res.outcome);
    if (res.outcome === 1) stageWinsA += 1;
    totalsA.push(res.totalA);
    totalsB.push(res.totalB);
  }

  return {
    matchWin: stageWinsA >= 2 ? 1 : 0,
    stageWinsA,
    tieBreaks,
    totalsA,
    totalsB,
    stageWins,
  };
}

export function contestWinRate(scoresA, scoresB, n) {
  let win = 0;
  let stageWinSumA = 0;
  let tieBreakCount = 0;
  const stageWinCountsA = [0, 0, 0];
  const stageTotalA = [new Float64Array(n), new Float64Array(n), new Float64Array(n)];
  const stageTotalB = [new Float64Array(n), new Float64Array(n), new Float64Array(n)];

  for (let i = 0; i < n; i++) {
    const stA = [0, 1, 2].map((s) => [0, 1, 2].map((c) => scoresA[s][c][i]));
    const stB = [0, 1, 2].map((s) => [0, 1, 2].map((c) => scoresB[s][c][i]));
    const m = scoreMatch(stA, stB);
    stageWinSumA += m.stageWinsA;
    tieBreakCount += m.tieBreaks;
    for (let s = 0; s < 3; s++) {
      stageWinCountsA[s] += m.stageWins[s];
      stageTotalA[s][i] = m.totalsA[s];
      stageTotalB[s][i] = m.totalsB[s];
    }
    win += m.matchWin;
  }

  return {
    rate: win / n,
    winCount: win,
    avgStageWinsA: stageWinSumA / n,
    tieBreakCount,
    stageWinCountsA,
    stageWinRates: stageWinCountsA.map((c) => c / n),
    stageTotalA,
    stageTotalB,
  };
}

export function contestBootstrapCI(scoresA, scoresB, n, { iters = 1000, alpha = 0.05, seed = 2024 } = {}) {
  const rng = makeRng(seed);
  const outcomes = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const stA = [0, 1, 2].map((s) => [0, 1, 2].map((c) => scoresA[s][c][i]));
    const stB = [0, 1, 2].map((s) => [0, 1, 2].map((c) => scoresB[s][c][i]));
    outcomes[i] = scoreMatch(stA, stB).matchWin;
  }

  const rates = new Float64Array(iters);
  for (let b = 0; b < iters; b++) {
    let sum = 0;
    for (let k = 0; k < n; k++) {
      sum += outcomes[Math.floor(rng() * n)];
    }
    rates[b] = sum / n;
  }

  rates.sort();
  return {
    lower: rates[Math.floor((alpha / 2) * iters)],
    upper: rates[Math.min(iters - 1, Math.floor((1 - alpha / 2) * iters))],
  };
}
