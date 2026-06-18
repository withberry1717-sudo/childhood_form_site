(function () {
  const config = window.SITE_CONFIG || {};

  const links = [
    ["openSheet", config.responsesSheetUrl, "回答スプレッドシートのURLが未設定です。"],
    ["openDrive", config.driveFolderUrl, "画像保存フォルダのURLが未設定です。"],
    ["openForm", config.googleFormOpenUrl, "GoogleフォームのURLが未設定です。"]
  ];

  links.forEach(([id, url, message]) => {
    const element = document.getElementById(id);
    if (!element) return;
    if (url) {
      element.href = url;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
      return;
    }
    element.addEventListener("click", (event) => {
      event.preventDefault();
      alert(message + " site-config.js を確認してください。");
    });
  });

  const timeElement = document.getElementById("currentTime");
  function updateTime() {
    if (!timeElement) return;
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString("ja-JP", { hour12: false });
  }
  updateTime();
  setInterval(updateTime, 1000);

  const logs = document.getElementById("watchLogs");
  const messages = [
    "固定写真 6 件を検出。",
    "公開ページの写真表示を停止。",
    "管理室側プレビューを有効化。",
    "Googleフォーム接続待機中。",
    "回答記録の照合準備完了。"
  ];
  if (logs) {
    logs.innerHTML = messages.map((message) => `<li>${message}</li>`).join("");
  }
})();
