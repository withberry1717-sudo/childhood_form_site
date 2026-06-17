// site-config.js
// Googleフォームと管理用リンクをここに貼るだけで使えます。
// まだフォームを作っていない場合は空欄のままでOKです。

window.SITE_CONFIG = {
  // Googleフォームの「送信」→「<> 埋め込む」から取得した iframe の src URLを貼る。
  // 例: "https://docs.google.com/forms/d/e/xxxxxxxx/viewform?embedded=true"
  googleFormEmbedUrl: "",

  // Googleフォームの通常共有URL。「送信」→リンクアイコンから取得。
    googleFormOpenUrl: "https://docs.google.com/forms/d/e/1FAIpQLScNR_Fzq5B7sJdCGmofEqpiF1I1fo3Kgy54VYH_rYep7Yn_JA/viewform?usp=dialog",

  // 管理者ページ用：回答スプレッドシートのURL。任意。
    responsesSheetUrl: "https://docs.google.com/spreadsheets/d/1zvpJWzRBVmBlj37SYWPb7BxGADb6YKftaQh4Th3R0eE/edit?resourcekey=&gid=1996839374#gid=1996839374",

  // 管理者ページ用：ファイルアップロード先のGoogle DriveフォルダURL。任意。
  driveFolderUrl: ""
};
