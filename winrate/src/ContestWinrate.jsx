import { useEffect, useMemo, useRef, useState } from "react";
import { teamFromInputs, collectScores, analyze, analyzeCI } from "./analysis.mjs";
import { simulateOne, terminatePool, STRATEGY } from "./simulate.js";

const STAGES = 3; // ステージ数
const PER_STAGE = 3; // 1ステージあたりの編成数（1人1編成）
const SLOTS = STAGES * PER_STAGE;
const MIN_RUNS = 100;
const MAX_RUNS = 20000;
const STORAGE_KEY = "gakumas-winrate-site";
const OFFICIAL_SITE = "https://gktools.ris.moe/";

const pct = (x, digits = 1) => (x * 100).toFixed(digits) + "%";
const fmt = (n) => Math.round(n).toLocaleString("ja-JP");
const emptyInputs = () => Array(SLOTS).fill("");

// 保存済みの入力を読み込む。以前の形式（複数行の文字列）も、1行ずつ各欄に振り分けて引き継ぐ。
function restoreInputs(arr, text) {
  if (Array.isArray(arr)) {
    return Array.from({ length: SLOTS }, (_, i) => (typeof arr[i] === "string" ? arr[i] : ""));
  }
  if (typeof text === "string") {
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    return Array.from({ length: SLOTS }, (_, i) => lines[i] ?? "");
  }
  return emptyInputs();
}

export default function ContestWinrate() {
  const [inputsA, setInputsA] = useState(emptyInputs);
  const [inputsB, setInputsB] = useState(emptyInputs);
  const [numRuns, setNumRuns] = useState(1000);
  const [restored, setRestored] = useState(false);
  const [status, setStatus] = useState({ phase: "idle" }); // idle | running | done | cancelled | error
  const [progress, setProgress] = useState({ fraction: 0, label: "", elapsed: 0 });
  const [scores, setScores] = useState(null); // { A, B }: ステージ×キャラの得点配列
  const [ci, setCi] = useState(null);
  const abortRef = useRef(null);

  // 入力内容の復元と保存（ブラウザのlocalStorage。使えない環境では何もしない）
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved) {
        setInputsA(restoreInputs(saved.inputsA, saved.textA));
        setInputsB(restoreInputs(saved.inputsB, saved.textB));
        if (Number.isFinite(saved.numRuns)) setNumRuns(saved.numRuns);
      }
    } catch {}
    setRestored(true);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ inputsA, inputsB, numRuns }));
    } catch {}
  }, [restored, inputsA, inputsB, numRuns]);

  // ページを離れるときは、実行中の計算を止める
  useEffect(
    () => () => {
      abortRef.current?.abort();
      terminatePool();
    },
    []
  );

  const result = useMemo(() => (scores ? analyze(scores.A, scores.B) : null), [scores]);
  const ranRuns = scores?.A?.[0]?.[0]?.length ?? 0;

  // 95%区間は少し重いので、結果を先に表示してから計算する
  useEffect(() => {
    if (!scores) return;
    setCi(null);
    const id = setTimeout(() => setCi(analyzeCI(scores.A, scores.B)), 50);
    return () => clearTimeout(id);
  }, [scores]);

  const setAt = (setValues, index, value) =>
    setValues((prev) => prev.map((v, i) => (i === index ? value : v)));

  // 複数行（例: 9個のURLをまとめてコピーしたもの）を貼り付けたときは、その欄から順に各欄へ振り分ける
  function handlePaste(event, setValues, index) {
    const lines = event.clipboardData
      .getData("text")
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length < 2) return; // 1行だけなら、通常の貼り付け
    event.preventDefault();
    setValues((prev) => {
      const next = [...prev];
      lines.slice(0, SLOTS - index).forEach((line, i) => {
        next[index + i] = line;
      });
      return next;
    });
  }

  async function handleRun() {
    let teamA, teamB;
    try {
      teamA = teamFromInputs(inputsA, "自分", PER_STAGE);
      teamB = teamFromInputs(inputsB, "相手", PER_STAGE);
    } catch (e) {
      setStatus({ phase: "error", message: e.message });
      return;
    }

    const runs = Math.min(MAX_RUNS, Math.max(MIN_RUNS, Math.round(Number(numRuns)) || MIN_RUNS));
    setNumRuns(runs);

    const controller = new AbortController();
    abortRef.current = controller;
    const startedAt = Date.now();
    setScores(null);
    setCi(null);
    setProgress({ fraction: 0, label: "準備中", elapsed: 0 });
    setStatus({ phase: "running" });

    try {
      const collected = await collectScores({ teamA, teamB }, simulateOne, {
        numRuns: runs,
        signal: controller.signal,
        onProgress: (p) => setProgress({ ...p, elapsed: Date.now() - startedAt }),
      });
      setScores(collected);
      setStatus({ phase: "done" });
    } catch (e) {
      if (e?.name === "AbortError" || controller.signal.aborted) {
        setStatus({ phase: "cancelled" });
      } else {
        console.error(e);
        setStatus({ phase: "error", message: e?.message || String(e) });
      }
    } finally {
      abortRef.current = null;
    }
  }

  const running = status.phase === "running";

  return (
    <div className="page">
      <section className="panel">
        <h1>コンテスト勝率シミュレーター</h1>
        <p className="lead">
          各ステージの3編成の合計点を競い、敵味方で最高得点の1人に、自分の得点の20%がボーナスとして加算されます。
          過半数のステージに勝った側の勝利です。編成は{" "}
          <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">
            gakumas-tools の公式サイト
          </a>{" "}
          のシミュレーターで組み、アドレスバーのURLを、編成ごとの欄に貼り付けてください。
          複数のURLを改行でまとめてコピーして貼ると、その欄から順に振り分けます。
        </p>

        {Array.from({ length: STAGES }, (_, s) => (
          <fieldset className="stage-inputs" key={s} disabled={running}>
            <legend>ステージ {s + 1}</legend>
            <div className="columns">
              {[
                ["自分", inputsA, setInputsA],
                ["相手", inputsB, setInputsB],
              ].map(([label, values, setValues]) => (
                <div className="side" key={label}>
                  <div className="side-label">{label}</div>
                  {Array.from({ length: PER_STAGE }, (_, k) => {
                    const index = s * PER_STAGE + k;
                    return (
                      <input
                        key={k}
                        type="text"
                        className="url-input"
                        value={values[index]}
                        placeholder={`${label} ${k + 1}人目の編成URL`}
                        aria-label={`${label} ステージ${s + 1} ${k + 1}人目の編成URL`}
                        spellCheck={false}
                        autoComplete="off"
                        onChange={(e) => setAt(setValues, index, e.target.value)}
                        onPaste={(e) => handlePaste(e, setValues, index)}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </fieldset>
        ))}

        <div className="controls">
          <label className="number-field">
            1編成あたりの回数
            <input
              type="number"
              value={numRuns}
              onChange={(e) => setNumRuns(e.target.value)}
              disabled={running}
            />
          </label>
        </div>

        {running ? (
          <button type="button" className="btn danger" onClick={() => abortRef.current?.abort()}>
            キャンセル
          </button>
        ) : (
          <button type="button" className="btn primary" onClick={handleRun}>
            勝率を計算
          </button>
        )}

        {running && (
          <div className="progress">
            <progress value={progress.fraction} max={1} />
            <span>
              {progress.label}（{pct(progress.fraction, 0)}・{(progress.elapsed / 1000).toFixed(0)}秒）
            </span>
          </div>
        )}
        {status.phase === "cancelled" && <div className="alert">キャンセルしました。</div>}
        {status.phase === "error" && <div className="alert danger">エラー: {status.message}</div>}
      </section>

      {result && (
        <section className="panel">
          <h2>結果</h2>
          <p className="headline">
            自分の勝利確率 <strong>{pct(result.pMatch)}</strong>
            {ci ? `（95%区間 ${pct(ci.lower)} 〜 ${pct(ci.upper)}）` : "（区間を計算中…）"}
          </p>
          <p className="sub">相手の勝利確率 {pct(1 - result.pMatch)}</p>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>自分が勝つステージ数</th>
                  {result.dist.map((_, w) => (
                    <th key={w}>{w}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>確率</td>
                  {result.dist.map((q, w) => (
                    <td key={w}>{pct(q)}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {result.stages.map((st, i) => (
            <div className="table-wrap" key={i}>
              <table>
                <caption>
                  ステージ {i + 1}　自分の勝率 <strong>{pct(st.p)}</strong>
                  <span className="caption-sub">
                    ボーナスを受け取る側: 自分 {pct(st.bonusA)} / 相手 {pct(1 - st.bonusA)}
                  </span>
                </caption>
                <thead>
                  <tr>
                    <th>編成</th>
                    <th>平均得点</th>
                    <th>ボーナスを受け取る確率</th>
                  </tr>
                </thead>
                <tbody>
                  {st.meanA.map((m, k) => (
                    <tr key={`a${k}`}>
                      <td>自分 {k + 1}人目</td>
                      <td>{fmt(m)}</td>
                      <td>{pct(st.bonusByA[k])}</td>
                    </tr>
                  ))}
                  {st.meanB.map((m, k) => (
                    <tr key={`b${k}`} className="opponent">
                      <td>相手 {k + 1}人目</td>
                      <td>{fmt(m)}</td>
                      <td>{pct(st.bonusByB[k])}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <p className="note">
            各編成を {ranRuns} 回ずつ自動操作（{STRATEGY}）でシミュレーションした結果に基づく目安です。
            ボーナスを受け取る確率は、そのステージの敵味方6人の中で、その編成の得点が最も高くなる確率です。
            95%区間は、シミュレーション回数が有限であることによる不確かさで、回数を増やすと狭くなります。
          </p>
        </section>
      )}
    </div>
  );
}
