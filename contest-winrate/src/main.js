const STAGES_PER_MATCH = 3;
const SLOTS_PER_STAGE = 3;

let worker = null;
let workerReady = false;
let isSimulating = false;
let latestResult = null;

const els = {
  trials: document.querySelector("#trials"),
  seedA: document.querySelector("#seedA"),
  seedB: document.querySelector("#seedB"),
  runBtn: document.querySelector("#runBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  errorBox: document.querySelector("#errorBox"),
  inputsA: document.querySelector("#inputsA"),
  inputsB: document.querySelector("#inputsB"),
  statusText: document.querySelector("#statusText"),
  progressBar: document.querySelector("#progressBar"),
  resultPanel: document.querySelector("#resultPanel"),
  kpiMain: document.querySelector("#kpiMain"),
  kpiSub: document.querySelector("#kpiSub"),
  stageBody: document.querySelector("#stageBody"),
};

function renderSlotInputs(container, sideKey) {
  if (!container) return;
  container.textContent = "";

  for (let s = 1; s <= STAGES_PER_MATCH; s++) {
    const card = document.createElement("div");
    card.className = "stage-card";

    const title = document.createElement("div");
    title.className = "stage-title";
    title.textContent = `ステージ ${s}`;
    card.appendChild(title);

    for (let i = 1; i <= SLOTS_PER_STAGE; i++) {
      const row = document.createElement("div");
      row.className = "slot-row";

      const label = document.createElement("span");
      label.textContent = `枠 ${i}`;

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "シミュレーターURLまたはクエリ文字列を貼り付け";
      input.dataset.side = sideKey;
      input.dataset.stage = String(s);
      input.dataset.slot = String(i);
      input.id = `${sideKey}-s${s}-p${i}`;

      row.appendChild(label);
      row.appendChild(input);
      card.appendChild(row);
    }

    container.appendChild(card);
  }
}

function showError(message) {
  if (!els.errorBox) return;
  if (!message) {
    els.errorBox.style.display = "none";
    els.errorBox.textContent = "";
    return;
  }
  els.errorBox.style.display = "block";
  els.errorBox.textContent = message;
}

function setStatus(text, percent) {
  if (els.statusText) {
    els.statusText.textContent = text;
  }
  if (els.progressBar) {
    const clamped = Math.max(0, Math.min(100, Number(percent) || 0));
    els.progressBar.style.width = `${clamped}%`;
  }
}

function updateControls() {
  if (els.runBtn) els.runBtn.disabled = isSimulating;
  if (els.exportBtn) els.exportBtn.disabled = isSimulating || !latestResult;
}

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
      latestResult = msg;
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
      showError(msg.message || "シミュレーション中にエラーが発生しました。");
    }
  });

  w.addEventListener("error", (err) => {
    isSimulating = false;
    workerReady = false;
    updateControls();
    setStatus("Workerエラー", 0);
    showError(`Workerエラー: ${err.message || "worker.js の読み込みに失敗しました。"}`);
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

function collectSideInputs(sideKey) {
  const stages = [];
  for (let s = 1; s <= STAGES_PER_MATCH; s++) {
    const slots = [];
    for (let i = 1; i <= SLOTS_PER_STAGE; i++) {
      const input = document.querySelector(
        `[data-side="${sideKey}"][data-stage="${s}"][data-slot="${i}"]`
      );
      slots.push(input ? input.value.trim() : "");
    }
    stages.push(slots);
  }
  return stages;
}

function renderResult(data) {
  if (!els.resultPanel || !els.kpiMain || !els.kpiSub || !els.stageBody) return;

  const winPct = (data.winRateA * 100).toFixed(2);
  const lowPct = (data.ci95Low * 100).toFixed(2);
  const highPct = (data.ci95High * 100).toFixed(2);

  els.kpiMain.textContent = `A側マッチ勝率: ${winPct}%（95% CI: ${lowPct}% 〜 ${highPct}%）`;
  els.kpiSub.textContent = `試行回数: ${data.trials} 回（各ステージ2勝以上でマッチ勝利・同点時A側+1点・最高得点+20%切り捨てボーナス）`;

  els.stageBody.textContent = "";
  for (const st of data.stages) {
    const tr = document.createElement("tr");

    const cells = [
      `ステージ ${st.stage}`,
      `${(st.winRateA * 100).toFixed(1)}%`,
      Math.round(st.meanA).toLocaleString(),
      Math.round(st.sdA).toLocaleString(),
      Math.round(st.meanB).toLocaleString(),
      Math.round(st.sdB).toLocaleString(),
    ];

    for (const text of cells) {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    }

    els.stageBody.appendChild(tr);
  }

  els.resultPanel.style.display = "block";
}

function startSimulation() {
  if (isSimulating) return;
  showError("");
  latestResult = null;
  if (els.resultPanel) els.resultPanel.style.display = "none";

  const w = ensureWorker();
  const trials = Math.max(1, Math.min(50000, Number(els.trials?.value) || 500));
  const seedA = Number(els.seedA?.value) || 10000;
  const seedB = Number(els.seedB?.value) || 900000;
  const sideA = collectSideInputs("A");
  const sideB = collectSideInputs("B");

  isSimulating = true;
  updateControls();
  setStatus(workerReady ? "編成を読み込み中 (0/18)..." : "Worker初期化・編成読み込み中...", 0);

  w.postMessage({
    type: "run",
    trials,
    chunkSize: Math.max(10, Math.min(200, Math.ceil(trials / 10))),
    seedA,
    seedB,
    sideA,
    sideB,
  });
}

function exportResultJson() {
  if (!latestResult) return;
  const blob = new Blob([JSON.stringify(latestResult, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `contest-winrate-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// 初期描画＆Worker事前起動（プリウォーム）
renderSlotInputs(els.inputsA, "A");
renderSlotInputs(els.inputsB, "B");
setStatus("Workerを事前起動中...", 0);
ensureWorker();
updateControls();

els.runBtn?.addEventListener("click", startSimulation);
els.exportBtn?.addEventListener("click", exportResultJson);