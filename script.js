const config = window.SITE_CONFIG || {};

const frame = document.getElementById("googleFormFrame");
const placeholder = document.getElementById("formPlaceholder");
const openFormButton = document.getElementById("openFormButton");
const previewInput = document.getElementById("localPreviewInput");
const localPreview = document.getElementById("localPreview");
const localPreviewImage = document.getElementById("localPreviewImage");
const localPreviewName = document.getElementById("localPreviewName");
const localPreviewSize = document.getElementById("localPreviewSize");
const terminalMessage = document.getElementById("terminalMessage");

function initGoogleForm() {
  const embedUrl = (config.googleFormEmbedUrl || "").trim();
  const openUrl = (config.googleFormOpenUrl || embedUrl || "").trim();

  if (embedUrl) {
    frame.src = embedUrl;
    frame.hidden = false;
    placeholder.hidden = true;
  } else {
    frame.hidden = true;
    placeholder.hidden = false;
  }

  if (openUrl) {
    openFormButton.href = openUrl;
    openFormButton.classList.remove("disabled");
  } else {
    openFormButton.href = "https://forms.google.com/";
  }
}

function formatSize(bytes) {
  if (!bytes) return "0 KB";
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function writeLog(lines) {
  let index = 0;
  const timer = setInterval(() => {
    terminalMessage.textContent = lines[index];
    index += 1;
    if (index >= lines.length) clearInterval(timer);
  }, 450);
}

previewInput?.addEventListener("change", () => {
  const file = previewInput.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    localPreviewImage.src = reader.result;
    localPreviewName.textContent = file.name;
    localPreviewSize.textContent = formatSize(file.size);
    localPreview.hidden = false;

    writeLog([
      "> image trace: detected",
      "> memory layer: reading...",
      "> archive id: CHILD-" + String(Math.floor(Math.random() * 900 + 100)).padStart(3, "0"),
      "> status: ready for form submission"
    ]);
  };
  reader.readAsDataURL(file);
});

initGoogleForm();
