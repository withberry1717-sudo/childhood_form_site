# 幼少期写真アーカイブ（Googleフォーム版）

GitHub Pages + Googleフォームで使う簡易サイトです。Firebaseは使いません。

## 使い方

1. Googleフォームを作る
2. `site-config.js` にURLを貼る
3. GitHubにアップロードする
4. GitHub Pagesを有効化する

## URL

- 公開サイト: `https://ユーザー名.github.io/リポジトリ名/`
- 管理室: `https://ユーザー名.github.io/リポジトリ名/admin/`

公開サイトから管理室へのリンクは置いていません。管理室は `/admin/` を直接開いてください。

## 今回の構成

- 公開サイトには写真ギャラリーを表示しません。
- 写真6枚は管理室側でのみ表示します。
- 管理室の写真エフェクトは外しています。
- `site-config.js` にGoogleフォーム、回答スプレッドシート、Driveフォルダのリンクを入れて使います。
