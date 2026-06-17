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
})();
