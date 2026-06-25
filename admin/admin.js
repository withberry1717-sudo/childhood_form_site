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
    timeElement.textContent = now.toLocaleTimeString("ja-JP", {
      hour12: false
    });
  }

  updateTime();
  setInterval(updateTime, 1000);

  const logs = document.getElementById("watchLogs");

  const messages = [
    "固定写真 6 件を検出。",
    "公開ページの写真表示を停止。",
    "管理室側プレビューを有効化。",
    "Googleフォーム接続待機中。",
    "回答記録の照合準備完了。",
    "お問い合わせフォームに新規問い合わせを検出。"
  ];

  if (logs) {
    logs.innerHTML = messages.map((message) => `<li>${message}</li>`).join("");
  }

  const contactArea = document.getElementById("contactCheck");

  if (contactArea) {
    contactArea.innerHTML = `
      <section class="contact-section" aria-label="お問い合わせフォーム確認">
        <div class="section-head">
          <div>
            <p class="label">CONTACT LOG</p>
            <h2>お問い合わせフォーム確認</h2>
          </div>
          <p class="note">Googleフォームから送信された問い合わせ内容を確認します。</p>
        </div>

        <div class="contact-card">
          <div class="contact-header">
            <span class="status">● 未対応</span>
            <span class="date">受信日時：2019/06/25 14:18</span>
          </div>

          <table class="contact-table">
            <tr>
              <th>会社名</th>
              <td>スターライトエンターテインメント株式会社</td>
            </tr>
            <tr>
              <th>担当者</th>
              <td>吉野 美紀</td>
            </tr>
            <tr>
              <th>連絡先</th>
              <td>miki.yoshino@starlight-ent.co.jp</td>
            </tr>
            <tr>
              <th>お問い合わせ内容</th>
              <td>
                所属タレントの幼少期写真作成についてご相談があります。<br>
                現在の写真のみから幼少期の姿を生成できるかお伺いしたく、ご連絡いたしました。
              </td>
            </tr>
          </table>
        </div>
      </section>
    `;
  }
})();
