# StreamLink Saver

StreamLink Saver is a Manifest V3 Chrome extension and companion static page that turns a media URL into a `.strm` text file. The extension can use the popup or a right-click link action. For reliable filename handling, the right-click action opens the hosted companion page in an inactive tab, which creates the `.strm` download and then closes.

## GitHub Pages

This repository is configured for the project URL:

```text
https://mhasanbogura.github.io/streamlink-saver/
```

The GitHub Actions workflow at `.github/workflows/deploy-pages.yml` deploys the static `dist/public` artifact whenever changes are pushed to `main`. In GitHub, set **Settings → Pages → Source** to **GitHub Actions** once to enable the deployment.

## Install the Chrome extension

1. Download or clone this repository.
2. In Chrome, open `chrome://extensions` and enable **Developer mode**.
3. Select **Load unpacked** and choose the repository’s `Save link as .strm` folder.
4. Use the popup, or right-click an HTTP/HTTPS link and select **Save link as .strm**.

## Browser download packages

The repository keeps the unzipped source files in `Save link as .strm/`. Browser-specific ZIP packages are published only as assets in the [latest GitHub Release](https://github.com/mhasanbogura/streamlink-saver/releases/latest), so the source folder contains no nested ZIP downloads.

| Browser | Download | Installation |
| --- | --- | --- |
| Chrome | [Release asset: `Save link as .strm - Chrome.zip`](https://github.com/mhasanbogura/streamlink-saver/releases/latest) | Extract it, then use **Load unpacked** from `chrome://extensions`. |
| Firefox | [Release asset: `Save link as .strm - Firefox.zip`](https://github.com/mhasanbogura/streamlink-saver/releases/latest) | Extract it, open `about:debugging#/runtime/this-firefox`, select **Load Temporary Add-on**, and choose `manifest.json`. |

Both ZIP files contain only the extension files. The Firefox package uses a Firefox-specific Manifest V3 manifest with the same save-path settings and right-click workflow.

See [GITHUB_PAGES_HOSTING.md](GITHUB_PAGES_HOSTING.md) for more deployment detail.
