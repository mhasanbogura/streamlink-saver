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

The repository keeps the shared unzipped source files in `Save link as .strm/`. The [latest GitHub Release](https://github.com/mhasanbogura/streamlink-saver/releases/latest) provides one package, `Save link as .strm.zip`, which contains the browser-specific source folders and no nested ZIP files.

| Browser | Folder inside `Save link as .strm.zip` | Installation |
| --- | --- | --- |
| Chrome | `Save link as .strm/Chrome/` | Download [**`Save link as .strm.zip`**](https://github.com/mhasanbogura/streamlink-saver/releases/latest), extract it, then use **Load unpacked** from `chrome://extensions` and select this folder. |
| Firefox | `Save link as .strm/Firefox/` | Extract the same release ZIP, open `about:debugging#/runtime/this-firefox`, select **Load Temporary Add-on**, and choose this folder’s `manifest.json`. |

The `Chrome/` and `Firefox/` folders both contain only extension files. The Firefox folder uses a Firefox-specific Manifest V3 manifest with the same save-path settings and right-click workflow.

See [GITHUB_PAGES_HOSTING.md](GITHUB_PAGES_HOSTING.md) for more deployment detail.
