const STAGES_PER_MATCH = 3;
const SLOTS_PER_STAGE = 3;

let worker = null;
let workerReady = false;
let isSimulating = false;

const els = {
  runBtn: document.querySelector("#run-btn"),
  cancelBtn: document.querySelector("#cancel-btn"),
  trialsInput: document.querySelector("#trials-input"),
  chunkInput: document.querySelector("#chunk-input"),
  statusText: document.querySelector("#status-text"),
  progressBar: document.querySelector("#progress-bar"),
  resultBox: document.querySelector("#result-box"),
};

function createWorker() {
  workerReady = false;
  const w = new Worker("./worker.js", { type: "module" });

  w.addEventListener("message", (event) => {
    const msg = event.data;
    if (!msg || typeof msg !== "object") return;

    if (msg.type === "ready") {
      workerReady = true;
      if (!isSimulating) {
        setStatus("待機中（Worker準備完了）", 0);
      }
      return;
    }

    if (msg.type === "progress") {
      const pct = msg.total > 0 ? Math.min(100, (msg.current / msg.total) * 100) : 0;
      const extra =
        typeof msg.winRateA === "number"
          ? ` — 暫定A勝率: ${(msg.winRateA * 100).toFixed(1)}%`
          : "";
      setStatus(`${msg.label}${extra}`, pct);
      return;
    }

    if (msg.type === "done") {
      isSimulating = false;
      updateControls();
      setStatus(`完了（${msg.trials} 試行）`, 100);
      renderResult(msg);
      return;
    }

    if (msg.type === "cancelled") {
      isSimulating = false;
      updateControls();
      setStatus("キャンセルされました", 0);
      return;
    }

    if (msg.type === "error") {
      isSimulating = false;
      updateControls();
      setStatus("エラーが発生しました", 0);
      if (els.resultBox) {
        els.resultBox.textContent = `エラー: ${msg.message}`;
      }
    }
  });

  w.addEventListener("error", (err) => {
    isSimulating = false;
    workerReady = false;
    updateControls();
    setStatus("Workerエラー", 0);
    if (els.resultBox) {
      els.resultBox.textContent = `Workerエラー: ${err.message || "読み込みに失敗しました"}`;
    }
    worker = null;
  });

  w.postMessage({ type: "ping" });
  return w;
}

function ensureWorker() {
  if (!worker) {
    worker = createWorker();
  }
  return worker;
}

function setStatus(text, percent) {
  if (els.statusText) {
    els.statusText.textContent = text;
  }
  if (els.progressBar) {
    els.progressBar.value = percent;
    els.progressBar.style.width = `${percent}%`;
  }
}

function updateControls() {
  if (els.runBtn) els.runBtn.disabled = isSimulating;
  if (els.cancelBtn) els.cancelBtn.disabled = !isSimulating;
}

function collectSideInputs(sidePrefix) {
  const stages = [];
  for (let s = 1; s <= STAGES_PER_MATCH; s++) {
    const slots = [];
    for (let i = 1; i <= SLOTS_PER_STAGE; i++) {
      const input =
        document.querySelector(`[data-side="${sidePrefix}"][data-stage="${s}"][data-slot="${i}"]`) ??
        document.querySelector(`#${sidePrefix}-s${s}-p${i}`);
      slots.push(input ? input.value.trim() : "");
    }
    stages.push(slots);
  }
  return stages;
}

function renderResult(data) {
  if (!els.resultBox) return;
  const winPct = (data.winRateA * 100).toFixed(2);
  const lowPct = (data.ci95Low * 100).toFixed(2);
  const highPct = (data.ci95High * 100).toFixed(2);

  const stageLines = data.stages.map(
    (st) =>
      `Stage ${st.stage}: A勝率 ${(st.winRateA * 100).toFixed(1)}% | ` +
      `A平均 ${Math.round(st.meanA).toLocaleString()} (SD ${Math.round(st.sdA).toLocaleString()}) vs ` +
      `B平均 ${Math.round(st.meanB).toLocaleString()} (SD ${Math.round(st.sdB).toLocaleString()})`
  );

  els.resultBox.textContent = [
    `マッチ勝率 (Team A): ${winPct}% (95% CI: ${lowPct}% ～ ${highPct}%)`,
    ...stageLines,
  ].join("\n");
}

function startSimulation() {
  if (isSimulating) return;
  const w = ensureWorker();
  const trials = Math.max(1, Number(els.trialsInput?.value) || 1000);
  const chunkSize = Math.max(1, Number(els.chunkInput?.value) || 100);
  const sideA = collectSideInputs("A");
  const sideB = collectSideInputs("B");

  isSimulating = true;
  updateControls();
  if (els.resultBox) els.resultBox.textContent = "";
  setStatus(workerReady ? "編成を読み込み中 (0/18)..." : "Worker初期化・編成読み込み中...", 0);

  w.postMessage({
    type: "run",
    trials,
    chunkSize,
    sideA,
    sideB,
  });
}

function cancelSimulation() {
  if (!isSimulating || !worker) return;
  worker.postMessage({ type: "cancel" });
  setStatus("キャンセル処理中...", 0);
}

// ページ読み込み時に Worker を事前起動（プリウォーム）
setStatus("Workerを事前起動中...", 0);
ensureWorker();
updateControls();

els.runBtn?.addEventListener("click", startSimulation);
els.cancelBtn?.addEventListener("click", cancelSimulation);