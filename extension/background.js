/* Broadcast Atelier: direct context-menu routing with a fixed Downloads-relative folder defined in config.js. */
importScripts("config.js");

const MENU_ID = "streamlink-save-link";
const HOSTED_HANDOFF_URL = "https://mhasanbogura.github.io/streamlink-saver/";

function createStrmDataUrl(url) {
  const content = new TextEncoder().encode(`${url}\n`);
  let binary = "";
  for (const byte of content) binary += String.fromCharCode(byte);
  return `data:application/octet-stream;base64,${btoa(binary)}`;
}

function sanitizeFolder(value) {
  return String(value || "")
    .split(/[\\/]+/)
    .map((part) => part.replace(/[<>:"|?*\u0000-\u001f]/g, "-").trim())
    .filter((part) => part && part !== "." && part !== "..")
    .join("/")
    .slice(0, 180);
}

const fixedSaveFolder = sanitizeFolder(globalThis.STREAMLINK_CONFIG?.saveFolder);

function showNotification(message, kind = "saved") {
  const notificationId = `streamlink-${kind}-${Date.now()}`;
  chrome.notifications.create(notificationId, {
    type: "basic",
    iconUrl: "icon64.png",
    title: "StreamLink Saver",
    message,
    priority: 1,
  });
  setTimeout(() => chrome.notifications.clear(notificationId).catch(() => {}), 6000);
}

function isSupportedUrl(value) {
  try {
    const url = new URL(value || "");
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function sanitizeFileBase(value) {
  const cleaned = value
    .replace(/\.strm$/i, "")
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, "-")
    .replace(/\s+/g, " ")
    .replace(/^\.+|\.+$/g, "")
    .trim();
  return (cleaned || "stream").slice(0, 120);
}

function removeMediaExtension(value) {
  return value.replace(/\.(mkv|mp4|m4v|avi|mov|webm|wmv|mpg|mpeg|ts|m2ts|m3u8|mp3|flac|aac|wav)$/i, "");
}

function isGenericName(value) {
  return /^(download|file|stream|video|media|watch)$/i.test(value.trim());
}

function filenameFromUrl(value) {
  const url = new URL(value);
  const lastSegment = url.pathname.split("/").filter(Boolean).pop();
  const decoded = lastSegment ? decodeURIComponent(lastSegment) : url.hostname.replace(/^www\./i, "");
  const withoutExtension = removeMediaExtension(decoded).replace(/\.[a-z0-9]{1,10}$/i, "");
  const fileBase = sanitizeFileBase(withoutExtension || url.hostname);
  return `${isGenericName(fileBase) ? sanitizeFileBase(`stream-${url.hostname}`) : fileBase}.strm`;
}

function filenameFromLabel(label, fallbackUrl) {
  const fileBase = sanitizeFileBase(removeMediaExtension(label || ""));
  return fileBase && !isGenericName(fileBase) ? `${fileBase}.strm` : filenameFromUrl(fallbackUrl);
}

async function setUpMenu() {
  await chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Save link as .strm",
    contexts: ["link"],
    targetUrlPatterns: ["http://*/*", "https://*/*"],
  });
}

chrome.runtime.onInstalled.addListener(() => {
  setUpMenu().catch((error) => console.warn("Could not create StreamLink Saver menu", error));
});

chrome.runtime.onStartup.addListener(() => {
  setUpMenu().catch((error) => console.warn("Could not restore StreamLink Saver menu", error));
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId !== MENU_ID || !isSupportedUrl(info.linkUrl)) return;

  const url = info.linkUrl;
  try {
    let label = "";
    if (tab?.id) {
      try {
        const response = await chrome.tabs.sendMessage(tab.id, { type: "streamlink-get-last-link", linkUrl: url });
        label = response?.label || "";
      } catch {
        // Content scripts are unavailable on browser-managed pages; the URL fallback remains available.
      }
    }

    const filename = filenameFromLabel(label, url);
    if (fixedSaveFolder) {
      const downloadPath = `${fixedSaveFolder}/${filename}`;
      await chrome.downloads.download({
        url: createStrmDataUrl(url),
        filename: downloadPath,
        saveAs: false,
        conflictAction: "uniquify",
      });
      showNotification(`Saved to Downloads/${downloadPath}`);
      return;
    }

    const handoffUrl = new URL(HOSTED_HANDOFF_URL);
    handoffUrl.searchParams.set("handoff", "1");
    handoffUrl.searchParams.set("streamUrl", url);
    handoffUrl.searchParams.set("filename", filename);
    const handoffTab = await chrome.tabs.create({ url: handoffUrl.href, active: false });
    showNotification(`Creating ${filename} via GitHub Pages.`, "handoff");
    if (handoffTab.id) {
      setTimeout(() => chrome.tabs.remove(handoffTab.id).catch(() => {}), 7000);
    }
  } catch (error) {
    console.warn("StreamLink Saver could not create the .strm file", error);
  }
});
