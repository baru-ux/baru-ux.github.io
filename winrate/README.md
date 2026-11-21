# コンテスト勝率シミュレーター（単独サイト版）

gakumas-tools のエンジン（`packages/gakumas-engine`）とデータ（`packages/gakumas-data`）だけを使って、
コンテストの勝率をブラウザ上で計算する静的サイトです。サーバーは不要で、計算はすべて閲覧者のブラウザで行います。

## 必要なもの

- Node.js 24 以上、pnpm
- gakumas-tools のリポジトリ（`pnpm install` 済みのもの）
  - このフォルダの **隣** に `gakumas-tools` がある配置を想定しています
  - 場所が違うときは `gakumas.config.json` の `repoPath` を書き換えるか、環境変数 `GAKUMAS_REPO` で指定します

```
C:\Users\（あなた）\
├─ gakumas-tools\      ← 既存のリポジトリ
└─ gakumas-winrate\    ← このフォルダ
```

## 使い方

```
pnpm install      # 初回のみ（react と esbuild が入ります）
pnpm dev          # 開発サーバー → http://localhost:5173
pnpm build        # 公開用ファイルを dist\ に作る
pnpm test         # 勝率計算部分のテスト
```

## 公開するには

`pnpm build` で作られる `dist` フォルダの中身（4ファイル）を、静的ホスティング
（GitHub Pages、Cloudflare Pages、Netlify など）にアップロードするだけです。
`dist` はリポジトリがなくても単独で動きます。

## 構成

| ファイル | 役割 |
| --- | --- |
| `src/ContestWinrate.jsx` | 画面 |
| `src/simulate.js` | Web Worker を並列に動かし、1編成ぶんを回す |
| `src/worker.js` | エンジンを呼び出して得点を計算する（エンジンとデータはここに入る） |
| `src/analysis.mjs` | URLの解析、18編成の順次実行、集計 |
| `src/contestRules.mjs` | コンテストのルール（合計点・ボーナス・過半数）と勝率の計算 |
| `src/stats.mjs` | 平均・標準偏差・勝率・信頼区間 |
| `build.mjs` | esbuild でまとめる |

## ルール

- 1ステージは「自分3編成 vs 相手3編成」。3人の得点の合計が高い方がステージの勝者
- そのステージの敵味方6人のうち、最高得点の1人だけが自分の得点の20%（切り捨て）を加算する
- 3ステージのうち2ステージ以上勝った側の勝利

## 困ったとき

- `gakumas-engine が見つかりません` → `repoPath` を確認してください
- `Could not resolve ...` → ビルドのメッセージを、エンジンの `package.json` と一緒に共有してください
- ゲームの更新に追従するには、gakumas-tools 側で `git pull` してから `pnpm build` をやり直します

## 公開前の確認

エンジンとデータを含むファイルを公開することになります。gakumas-tools の LICENSE と、
ゲームの二次創作ガイドラインを確認してから公開してください。
