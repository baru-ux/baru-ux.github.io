import fs from "node:fs";
import path from "node:path";
import * as esbuild from "esbuild";

const isWatch = process.argv.includes("--watch");
const outDir = path.resolve("dist/contest-winrate");
fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(path.resolve("public/index.html"), path.join(outDir, "index.html"));

const vendorRoot = path.resolve("vendor");

function resolveEntry(pkgDir) {
  const pkgJsonPath = path.join(pkgDir, "package.json");
  if (fs.existsSync(pkgJsonPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));
    const exp = typeof pkg.exports === "string" ? pkg.exports : pkg.exports?.["."]?.default ?? pkg.exports?.["."];
    const candidate = exp || pkg.module || pkg.main;
    if (candidate) {
      const resolved = path.resolve(pkgDir, candidate);
      if (fs.existsSync(resolved)) return resolved;
      if (fs.existsSync(`${resolved}.js`)) return `${resolved}.js`;
    }
  }
  for (const rel of ["index.js", "index.mjs", "src/index.js", "src/index.mjs"]) {
    const p = path.join(pkgDir, rel);
    if (fs.existsSync(p)) return p;
  }
  throw new Error(`Entry point not found in ${pkgDir}`);
}

function parseCsvRows(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field.endsWith("\r") ? field.slice(0, -1) : field);
      rows.push(row);
      row = [];
      field = "";
    } else {
      field += ch;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field.endsWith("\r") ? field.slice(0, -1) : field);
    rows.push(row);
  }
  return rows;
}

function autoCastValue(raw) {
  if (raw === "") return "";
  if (raw === "true") return true;
  if (raw === "false") return false;
  if (/^-?\d+(\.\d+)?$/.test(raw)) {
    const num = Number(raw);
    if (Number.isSafeInteger(num) || raw.includes(".")) return num;
  }
  return raw;
}

function csvToRecords(csvText) {
  const rows = parseCsvRows(csvText).filter(
    (r) => !(r.length === 1 && r[0] === "")
  );
  if (rows.length === 0) return [];
  const headers = rows[0];
  const records = [];

  for (let r = 1; r < rows.length; r++) {
    const values = rows[r];
    if (values.length === 1 && values[0] === "") continue;
    const obj = {};
    for (let c = 0; c < headers.length; c++) {
      const key = headers[c];
      const val = values[c] ?? "";
      obj[key] = autoCastValue(val);
    }
    records.push(obj);
  }
  return records;
}

const csvPlugin = {
  name: "csv-to-js-array",
  setup(build) {
    build.onLoad({ filter: /\.csv$/ }, async (args) => {
      const raw = await fs.promises.readFile(args.path, "utf8");
      const records = csvToRecords(raw);
      return {
        contents: `export default ${JSON.stringify(records)};`,
        loader: "js",
      };
    });
  },
};

const commonOptions = {
  bundle: true,
  format: "esm",
  target: ["es2022"],
  sourcemap: true,
  logLevel: "info",
  plugins: [csvPlugin],
  alias: {
    "gakumas-data": resolveEntry(path.join(vendorRoot, "gakumas-data")),
    "gakumas-engine": resolveEntry(path.join(vendorRoot, "gakumas-engine")),
    "gakumas-loadout": resolveEntry(path.join(vendorRoot, "gakumas-loadout")),
  },
};

const targets = [
  {
    entryPoints: [path.resolve("src/main.js")],
    outfile: path.join(outDir, "main.js"),
  },
  {
    entryPoints: [path.resolve("src/worker.js")],
    outfile: path.join(outDir, "worker.js"),
  },
];

if (isWatch) {
  const contexts = await Promise.all(
    targets.map((t) => esbuild.context({ ...commonOptions, ...t }))
  );
  await Promise.all(contexts.map((ctx) => ctx.watch()));
  console.log("Watching for changes...");
} else {
  await Promise.all(targets.map((t) => esbuild.build({ ...commonOptions, ...t })));
}