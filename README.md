# Childhood Archive Site（Googleフォーム連携版）

Firebaseなし・課金なしで動かすための静的サイト版です。

- 公開サイト：`index.html`
- 管理者風サイト：`admin/index.html`
- ギャラリー画像：`assets/images/image1.jpg`〜`image6.jpg`
- GoogleフォームURL設定：`site-config.js`

## できること

公開サイトでは、サイトっぽい見た目で以下を表示します。

- 幼少期写真ギャラリー
- 写真アップロード・お問い合わせの説明
- Googleフォーム埋め込み欄
- 投稿前の画像プレビュー演出

管理者ページでは、以下へのリンクをまとめます。

- 回答スプレッドシート
- アップロード画像のGoogle Driveフォルダ
- Googleフォーム編集/回答ページ
- 架空の不気味アナリティクス

## Googleフォームの作り方

1. Googleフォームを新規作成する
2. フォーム項目を作る
   - 名前、またはニックネーム
   - メールアドレス
   - 幼少期の写真：**ファイルのアップロード**
   - 写真の説明
   - お問い合わせ内容：段落
3. 「回答」タブからスプレッドシートを作成する
4. 「送信」ボタンを押す
5. `<>` 埋め込みを選ぶ
6. `<iframe src="...">` の `src` の中身だけをコピーする
7. `site-config.js` の `googleFormEmbedUrl` に貼る

例：

```js
window.SITE_CONFIG = {
  googleFormEmbedUrl: "https://docs.google.com/forms/d/e/xxxxx/viewform?embedded=true",
  googleFormOpenUrl: "https://forms.gle/xxxxx",
  responsesSheetUrl: "https://docs.google.com/spreadsheets/d/xxxxx/edit",
  driveFolderUrl: "https://drive.google.com/drive/folders/xxxxx"
};
```

## 注意

Googleフォームのファイルアップロードを使う場合、回答者はGoogleアカウントへのログインを求められることがあります。
画像は自分のGoogle Drive容量を使用します。

知り合いの幼少期写真を掲載・収集する場合は、本人または関係者の許可を取ってください。
