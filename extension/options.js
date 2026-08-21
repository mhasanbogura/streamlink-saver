/* Broadcast Atelier: one persistent Downloads-relative folder, applied automatically without repeated prompts. */
const form = document.querySelector("#settings-form");
const folderInput = document.querySelector("#save-folder");
const pathPreview = document.querySelector("#path-preview");
const status = document.querySelector("#status");

function sanitizeFolder(value) {
  return String(value || "")
    .split(/[\\/]+/)
    .map((part) => part.replace(/[<>:"|?*\u0000-\u001f]/g, "-").trim())
    .filter((part) => part && part !== "." && part !== "..")
    .join("/")
    .slice(0, 180);
}

function refreshPreview() {
  const folder = sanitizeFolder(folderInput.value);
  pathPreview.textContent = folder ? `Downloads / ${folder} / movie.strm` : "Downloads / movie.strm";
}

async function loadSettings() {
  const { saveFolder = "" } = await chrome.storage.sync.get({ saveFolder: "" });
  folderInput.value = saveFolder;
  refreshPreview();
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const saveFolder = sanitizeFolder(folderInput.value);
  folderInput.value = saveFolder;
  await chrome.storage.sync.set({ saveFolder });
  refreshPreview();
  status.textContent = saveFolder ? `Fixed folder saved: Downloads / ${saveFolder}` : "Fixed folder cleared: saving to Downloads root.";
  status.className = "success";
});

folderInput.addEventListener("input", refreshPreview);
loadSettings();
