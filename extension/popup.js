/* Broadcast Atelier: direct, privacy-preserving URL-to-.strm conversion; no media requests are made. */
const sourceUrl = document.querySelector("#source-url");
const fileName = document.querySelector("#file-name");
const filePreview = document.querySelector("#file-preview");
const saveButton = document.querySelector("#save-button");
const currentPageButton = document.querySelector("#current-page");
const statusMessage = document.querySelector("#status-message");
const statusDot = document.querySelector("#status-dot");
const urlHint = document.querySelector("#url-hint");

let fileNameWasEdited = false;

function sanitizeFileBase(value) {
  const cleaned = value
    .replace(/\.strm$/i, "")
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/^\.+|\.+$/g, "")
    .trim();
  return (cleaned || "stream").slice(0, 120);
}

function isSupportedUrl(value) {
  try {
    const url = new URL(value.trim());
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function filenameFromUrl(value) {
  try {
    const url = new URL(value.trim());
    const lastSegment = url.pathname.split("/").filter(Boolean).pop();
    const decoded = lastSegment ? decodeURIComponent(lastSegment) : url.hostname.replace(/^www\./i, "");
    const withoutExtension = decoded.replace(/\.(mkv|mp4|m4v|avi|mov|webm|wmv|mpg|mpeg|ts|m2ts|m3u8|mp3|flac|aac|wav)$/i, "").replace(/\.[a-z0-9]{1,10}$/i, "");
    const base = sanitizeFileBase(withoutExtension || url.hostname);
    return /^(download|file|stream|video|media|watch)$/i.test(base) ? sanitizeFileBase(`stream-${url.hostname}`) : base;
  } catch {
    return "stream";
  }
}

function createStrmDataUrl(url) {
  const content = new TextEncoder().encode(`${url}\n`);
  let binary = "";
  for (const byte of content) binary += String.fromCharCode(byte);
  return `data:application/octet-stream;base64,${btoa(binary)}`;
}

function updateOutput() {
  if (!fileNameWasEdited) fileName.value = filenameFromUrl(sourceUrl.value);
  const filename = `${sanitizeFileBase(fileName.value)}.strm`;
  filePreview.textContent = filename;
  const ready = isSupportedUrl(sourceUrl.value);
  statusDot.className = `status-dot${ready ? " ready" : ""}`;
  if (sourceUrl.value && !ready) {
    urlHint.textContent = "Enter a complete HTTP or HTTPS URL.";
    urlHint.className = "field-hint error";
  } else {
    urlHint.textContent = "HTTPS and HTTP links are supported.";
    urlHint.className = "field-hint";
  }
}

function setStatus(message, kind = "") {
  statusMessage.textContent = message;
  statusMessage.className = `status-message ${kind}`.trim();
}

async function useCurrentPage() {
  if (!globalThis.chrome?.tabs) {
    setStatus("Open this popup from Chrome to use the current page.", "error");
    return;
  }
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.url || !isSupportedUrl(tab.url)) throw new Error("unsupported");
    sourceUrl.value = tab.url;
    fileNameWasEdited = false;
    updateOutput();
    setStatus("Current page URL loaded.", "success");
  } catch {
    setStatus("This page cannot be saved as a stream link.", "error");
  }
}

async function saveStreamFile() {
  const url = sourceUrl.value.trim();
  if (!isSupportedUrl(url)) {
    updateOutput();
    setStatus("Provide a complete HTTP or HTTPS URL first.", "error");
    sourceUrl.focus();
    return;
  }

  const filename = `${sanitizeFileBase(fileName.value)}.strm`;
  const dataUrl = createStrmDataUrl(url);
  const configuredParts = String(globalThis.SAVE_PATH || "")
    .split(/[\\/]+/)
    .map((part) => part.replace(/[<>:"|?*\u0000-\u001f]/g, "-").trim())
    .filter((part) => part && part !== "." && part !== "..");
  if (configuredParts[0]?.toLowerCase() === "downloads") configuredParts.shift();
  const configuredFolder = configuredParts.join("/").slice(0, 180);
  const downloadPath = configuredFolder ? `${configuredFolder}/${filename}` : filename;
  saveButton.disabled = true;
  setStatus("Creating the .strm file…");
  try {
    await chrome.downloads.download({ url: dataUrl, filename: downloadPath, saveAs: false, conflictAction: "uniquify" });
    statusDot.className = "status-dot success";
    setStatus(`Saved ${configuredFolder ? `to Downloads/${downloadPath}` : filename}`, "success");
  } catch {
    statusDot.className = "status-dot ready";
    setStatus("Chrome could not create the file. Try again.", "error");
  } finally {
    saveButton.disabled = false;
  }
}

sourceUrl.addEventListener("input", () => { updateOutput(); setStatus("Ready to route a URL."); });
fileName.addEventListener("input", () => { fileNameWasEdited = true; updateOutput(); });
currentPageButton.addEventListener("click", useCurrentPage);
saveButton.addEventListener("click", saveStreamFile);
updateOutput();
