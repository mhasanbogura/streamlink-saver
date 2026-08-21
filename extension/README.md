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
3. Alternatively, open StreamLink Saver, choose **Use current page** or paste the URL, optionally change the output base name, and select **Save link as .strm**.

For the example URL above, the extension writes `movie.strm` containing:

```text
https://example.com/movie.mp4
```

Use only URLs and media you are authorized to access.
