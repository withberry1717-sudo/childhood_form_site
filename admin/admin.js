const config = window.SITE_CONFIG || {};

const syncTime = document.getElementById("syncTime");
const sheetLink = document.getElementById("sheetLink");
const driveLink = document.getElementById("driveLink");
const formLink = document.getElementById("formLink");
const logList = document.getElementById("logList");

function setClock() {
  const now = new Date();
  syncTime.textContent = now.toLocaleTimeString("ja-JP", { hour12: false });
}
setClock();
setInterval(setClock, 1000);

function setupLink(element, url, fallback) {
  if (url && url.trim()) {
    element.href = url.trim();
    element.classList.remove("disabled");
  } else {
    element.href = fallback;
    element.classList.add("disabled");
    element.addEventListener("click", (event) => {
      event.preventDefault();
      alert("site-config.js にURLを設定してください。");
    });
  }
}

setupLink(sheetLink, config.responsesSheetUrl, "#");
setupLink(driveLink, config.driveFolderUrl, "#");
setupLink(formLink, config.googleFormOpenUrl, "#");

const logs = [
  "[00:13:24] archive node awake",
  "[00:15:02] image folder waiting for new files",
  "[00:18:51] contact sheet linked",
  "[00:21:09] memory classification updated",
  "[00:24:39] 未確認の記録があります",
  "[00:27:18] observer count: 1"
];

logs.forEach((log) => {
  const li = document.createElement("li");
  li.textContent = log;
  logList.appendChild(li);
});
