(function () {
  const config = window.SITE_CONFIG || {};
  const formUrl = config.googleFormOpenUrl || "";

  const buttons = [
    document.getElementById("openFormTop"),
    document.getElementById("openFormMain")
  ].filter(Boolean);
  const status = document.getElementById("formStatus");

  function openForm(event) {
    event.preventDefault();
    if (!formUrl) {
      alert("GoogleフォームのURLが未設定です。site-config.js の googleFormOpenUrl にリンクを入れてください。");
      return;
    }
    window.open(formUrl, "_blank", "noopener,noreferrer");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", openForm);
    if (formUrl) button.setAttribute("href", formUrl);
  });

  if (status) {
    status.textContent = formUrl
      ? "ボタンを押すと、Googleフォームが別タブで開きます。"
      : "フォームURLが未設定です。site-config.js にリンクを入力してください。";
  }
})();
