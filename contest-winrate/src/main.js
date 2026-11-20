const pct = (v) => `${(v * 100).toFixed(2)}%`;

function mountSide(containerId, prefix) {
  const root = document.getElementById(containerId);
  for (let s = 1; s <= 3; s++) {
    const card = document.createElement("div");
    card.className = "stage-card";
    card.innerHTML = `<div style="font-weight:700;font-size:0.85rem;">ステージ ${s}</div>`;
    for (let c = 1; c <= 3; c++) {
      const row = document.createElement("div");
      row.className = "slot-row";
      row.innerHTML = `<span>枠 ${c}</span><input id="${prefix}-${s}-${c}" type="text" placeholder="編成URL またはクエリ文字列" />`;
      card.appendChild(row);
    }
    root.appendChild(card);
  }
}

mountSide("inputsA", "a");
mountSide("inputsB", "b");

const runBtn = document.getElementById("runBtn");
const exportBtn = document.getElementById("exportBtn");
const errorBox = document.getElementById("errorBox");
const statusText = document.getElementById("statusText");
const progressBar = document.getElementById("progressBar");
const resultPanel = document.getElementById("resultPanel");
const kpiMain = document.getElementById("kpiMain");
const kpiSub = document.getElementById("kpiSub");
const stageBody = document.getElementById("stageBody");

let worker = null;
let lastResult = null;

function readGrid(prefix) {
  return [1, 2, 3].map((s) =>
    [1, 2, 3].map((c) => document.getElementById(`${prefix}-${s}-${c}`).value)
  );
}

runBtn.addEventListener("click", () => {
  errorBox.style.display = "none";
  errorBox.textContent = "";
  resultPanel.style.display = "none";
  exportBtn.disabled = true;

  const n = Number(document.getElementById("trials").value);
  const seedA = Number(document.getElementById("seedA").value);
  const seedB = Number(document.getElementById("seedB").value);

  if (!Number.isFinite(n) || n < 1) {
    errorBox.style.display = "block";
    errorBox.textContent = "試行回数 (N) には1以上の数値を指定してください。";
    return;
  }

  if (worker) worker.terminate();
  worker = new Worker(new URL("./worker.js", import.meta.url), { type: "module" });

  runBtn.disabled = true;
  progressBar.style.width = "0%";
  statusText.textContent = "Worker を起動中...";

  worker.addEventListener("message", (event) => {
    const data = event.data;
    if (data.type === "progress") {
      statusText.textContent = data.message;
      progressBar.style.width = `${(data.step / data.total) * 100}%`;
    } else if (data.type === "done") {
      const r = data.result;
      lastResult = r;
      statusText.textContent = "完了しました。";
      progressBar.style.width = "100%";

      kpiMain.textContent = `Aのマッチ勝率: ${pct(r.matchWinRateA)}（95%信頼区間: ${pct(r.ci95.lower)} 〜 ${pct(r.ci95.upper)}）`;
      kpiSub.textContent = `平均獲得ステージ数: ${r.avgStageWinsA.toFixed(2)} / 3.00 ｜ 同点+1点適用回数: ${r.tieBreakCount}回 ｜ 試行回数: ${r.n}`;

      stageBody.innerHTML = "";
      for (const st of r.stages) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>ステージ ${st.stage}</td>
          <td>${pct(st.winRate)} (${st.winCount}/${r.n})</td>
          <td>${st.meanA.toLocaleString()}</td>
          <td>${st.sdA.toLocaleString()}</td>
          <td>${st.meanB.toLocaleString()}</td>
          <td>${st.sdB.toLocaleString()}</td>
        `;
        stageBody.appendChild(tr);
      }

      resultPanel.style.display = "block";
      exportBtn.disabled = false;
      runBtn.disabled = false;
      worker.terminate();
      worker = null;
    } else if (data.type === "error") {
      errorBox.style.display = "block";
      errorBox.textContent = data.error;
      statusText.textContent = "エラーが発生しました。";
      runBtn.disabled = false;
      worker.terminate();
      worker = null;
    }
  });

  worker.postMessage({
    urlsA: readGrid("a"),
    urlsB: readGrid("b"),
    n,
    seedA,
    seedB,
  });
});

exportBtn.addEventListener("click", () => {
  if (!lastResult) return;
  const blob = new Blob([JSON.stringify(lastResult, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "contest_winrate_result.json";
  a.click();
  URL.revokeObjectURL(url);
});
