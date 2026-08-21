# StreamLink Saver Chrome Extension

StreamLink Saver creates a small `.strm` text file whose only content is the HTTP or HTTPS media URL you supply. It **does not download, inspect, or redistribute** media.

## Install locally

1. Extract the packaged `streamlink-saver-extension.zip` archive.
2. In Chrome, open `chrome://extensions`.
3. Turn on **Developer mode**.
4. Select **Load unpacked**, then choose the extracted `extension` folder.
5. Pin **StreamLink Saver** from Chrome's Extensions menu.

## Use

1. Visit or paste a direct stream link, such as `https://example.com/movie.mp4`.
2. For a direct download, right-click the link and select **Save link as .strm**. The extension opens the hosted StreamLink Saver download route in an inactive tab, which creates the `.strm` file using the page download flow, then closes automatically. When a link has a meaningful visible label or filename, StreamLink Saver uses that label (with the media extension replaced by `.strm`) instead of a generic URL endpoint such as `download`.
   A short Chrome notification confirms the filename being created.

## Fixed save folder

Edit `extension/config.js` before loading the extension. Set the one-line constant in the following style:

```js
const SAVE_PATH = "Downloads/Direct Link";
```

Use a path such as `Downloads/Media/Streams`. StreamLink Saver opens the hosted download route, then assigns the configured final filename only when Chrome determines the download. This avoids generic names such as `download` and preserves the `.strm` extension inside the configured subfolder. Reload the extension at `chrome://extensions` after changing the configuration file.

When a visible link label contains download metadata after a recognized media extension—such as `.mkv 2026-08-15 13-24 1.2 GB`—StreamLink Saver keeps only the media title before `.mkv`, then writes the matching `.strm` filename.
3. Alternatively, open StreamLink Saver, choose **Use current page** or paste the URL, optionally change the output base name, and select **Save link as .strm**.

For the example URL above, the extension writes `movie.strm` containing:

```text
https://example.com/movie.mp4
```

Use only URLs and media you are authorized to access.
