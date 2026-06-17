# 幼少期写真アーカイブ（Googleフォーム版）

GitHub Pages + Googleフォームで使う簡易サイトです。Firebaseは使いません。

## 使い方

1. Googleフォームを作る
2. `site-config.js` にURLを貼る
3. GitHubにアップロードする
4. GitHub Pagesを有効化する

## site-config.js

```js
window.SITE_CONFIG = {
  googleFormEmbedUrl: "",
  googleFormOpenUrl: "回答者へのGoogleフォームリンク",
  responsesSheetUrl: "回答スプレッドシートのリンク",
  driveFolderUrl: "アップロード画像フォルダのリンク"
};
```

ファイルアップロード付きGoogleフォームは埋め込みが不安定なので、`googleFormEmbedUrl` は空欄のままでOKです。

## 公開URLの例

- 公開サイト: `https://ユーザー名.github.io/リポジトリ名/`
- 管理室: `https://ユーザー名.github.io/リポジトリ名/admin/`

公開サイトから管理室へのリンクは置いていません。管理室は `/admin/` を直接開いてください。
