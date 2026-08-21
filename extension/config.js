/*
 * StreamLink Saver configuration
 *
 * Choose the fixed folder used for every right-click .strm save.
 * The folder is always relative to Chrome's Downloads location.
 *
 * Examples:
 *   saveFolder: "StreamLink"
 *   saveFolder: "Media/Streams"
 *   saveFolder: ""
 *
 * Use an empty string to return right-click saves to the GitHub Pages handoff fallback.
 * After editing this file, reload the extension at chrome://extensions.
 */
globalThis.STREAMLINK_CONFIG = Object.freeze({
  saveFolder: "StreamLink",
});
