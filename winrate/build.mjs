// build.mjs — esbuild で静的サイト一式（dist/）を作る
//   node build.mjs           本番用ビルド（dist/ に出力）
//   node build.mjs --serve   開発サーバー（http://localhost:5173、ファイル変更で自動再ビルド）

import * as esbuild from "esbuild";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const serve = process.argv.includes("--serve");

// gakumas-tools リポジトリの場所（環境変数 GAKUMAS_REPO > gakumas.config.json > ../gakumas-tools）
const configPath = path.join(root, "gakumas.config.json");
const config = existsSync(configPath) ? JSON.parse(readFileSync(configPath, "utf8")) : {};
const repo = path.resolve(root, process.env.GAKUMAS_REPO || config.repoPath || "../gakumas-tools");
const pkgDir = (name) => path.join(repo, "packages", name);

// パッケージの入口ファイルを package.json から探す（module > main > exports > index.js の順）
function pkgEntry(name) {
  const dir = pkgDir(name);
  const pkg = JSON.parse(readFileSync(path.join(dir, "package.json"), "utf8"));
  const exp = pkg.exports;
  const fromExports =
    typeof exp === "string"
      ? exp
      : typeof exp?.["."] === "string"
        ? exp["."]
        : exp?.["."]?.import ?? exp?.["."]?.default ?? exp?.import ?? exp?.default;
  const entry = pkg.module || pkg.main || (typeof fromExports === "string" ? fromExports : null);
  return path.join(dir, entry || "index.js");
}

for (const name of ["gakumas-engine", "gakumas-data"]) {
  if (!existsSync(path.join(pkgDir(name), "package.json"))) {
    console.error(`\n${name} が見つかりません: ${pkgDir(name)}`);
    console.error("gakumas-tools リポジトリの場所を gakumas.config.json の repoPath に書くか、");
    console.error("環境変数 GAKUMAS_REPO で指定してください。\n");
    process.exit(1);
  }
}
console.log(`gakumas-tools リポジトリ: ${repo}`);

// gakumas-data は CSV を直接 import している（import X from "../csv/idols.csv"）。
// リポジトリの Next.js / Node ローダーと同じく、gakumas-data 自身の utils/csv.js で変換する。
const csvPlugin = {
  name: "gakumas-csv",
  setup(build) {
    let candidates = null; // [関数名, 関数] の候補。最初に成功したものを使い続ける
    let working = null;

    async function loadParser() {
      const file = path.join(pkgDir("gakumas-data"), "utils", "csv.js");
      if (!existsSync(file)) {
        throw new Error(`CSV パーサーが見つかりません: ${file}`);
      }
      // 拡張子なしの import があっても読めるよう、esbuild で1つにまとめてから読み込む
      const out = await esbuild.build({
        entryPoints: [file],
        bundle: true,
        format: "esm",
        platform: "node",
        write: false,
        logLevel: "silent",
      });
      const code = out.outputFiles[0].text;
      const mod = await import("data:text/javascript;base64," + Buffer.from(code).toString("base64"));
      const list = [];
      if (typeof mod.default === "function") list.push(["default", mod.default]);
      for (const [name, fn] of Object.entries(mod)) {
        if (name !== "default" && typeof fn === "function") list.push([name, fn]);
      }
      // 名前に csv / parse を含む関数を優先する
      list.sort((a, b) => Number(/csv|parse/i.test(b[0])) - Number(/csv|parse/i.test(a[0])));
      return { list, names: Object.keys(mod) };
    }

    build.onLoad({ filter: /\.csv$/ }, async (args) => {
      const text = readFileSync(args.path, "utf8");
      if (!candidates) candidates = await loadParser();

      const tryOrder = working ? [working] : candidates.list;
      for (const [name, fn] of tryOrder) {
        try {
          const records = await fn(text);
          if (Array.isArray(records)) {
            working = [name, fn];
            return { contents: JSON.stringify(records), loader: "json" };
          }
        } catch {}
      }
      throw new Error(
        `utils/csv.js の関数でCSVを変換できませんでした（${path.basename(args.path)}）。` +
          `エクスポート: ${candidates.names.join(", ") || "(なし)"}`
      );
    });
  },
};

const dist = path.join(root, "dist");
if (!serve) rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
for (const file of ["index.html", "style.css"]) cpSync(path.join(root, file), path.join(dist, file));

const options = {
  absWorkingDir: root,
  entryPoints: { app: "src/main.jsx", worker: "src/worker.js" },
  outdir: "dist",
  bundle: true,
  format: "iife",
  target: "es2022",
  jsx: "automatic", // JSX を react/jsx-runtime で変換する（各ファイルで React を import しなくてよい）
  minify: !serve,
  sourcemap: serve,
  // エンジンとデータは、リポジトリのソースを直接読み込む（拡張子なしのimportもesbuildが解決する）
  alias: {
    "gakumas-engine": pkgEntry("gakumas-engine"),
    "gakumas-data": pkgEntry("gakumas-data"),
  },
  resolveExtensions: [".jsx", ".js", ".mjs", ".json"],
  plugins: [csvPlugin],
  define: { "process.env.NODE_ENV": JSON.stringify(serve ? "development" : "production") },
  logLevel: "info",
};

if (serve) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: "dist", port: 5173 });
  console.log(`\n開発サーバー: http://localhost:${port}\n（止めるときは Ctrl + C）`);
} else {
  await esbuild.build(options);
  console.log("\ndist/ に出力しました。このフォルダの中身を、静的ホスティングにアップロードできます。");
}
