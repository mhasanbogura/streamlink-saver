# StreamLink Saver

StreamLink Saver is a Manifest V3 browser extension that writes an HTTP or HTTPS media URL to a small `.strm` file. It supports the popup and a right-click link action. The `.strm` file contains only the URL; it does not download, inspect, or redistribute media.

## Download the browser package

Download [**`Save link as .strm.zip`**](https://github.com/mhasanbogura/streamlink-saver/releases/latest) from the latest GitHub Release, then extract it. Its folders are arranged as follows:

```text
Save link as .strm/
├── Chrome/       # Chrome extension files and Chrome instructions
└── Firefox/      # Firefox extension files and Firefox instructions
```

Each browser folder includes its own `README.md` and the correct `manifest.json`. Use only the folder for your browser.

| Browser | Folder to open after extraction | Installation method |
| --- | --- | --- |
| Chrome | `Save link as .strm/Chrome/` | Open `chrome://extensions`, enable **Developer mode**, select **Load unpacked**, then select the `Chrome` folder. |
| Firefox | `Save link as .strm/Firefox/` | Open `about:debugging#/runtime/this-firefox`, select **Load Temporary Add-on**, then select `Firefox/manifest.json`. |

## Use StreamLink Saver

After installation, right-click an HTTP or HTTPS media link and select **Save link as .strm**, or open the extension popup and paste a stream URL. The extension uses the hosted handoff page at [mhasanbogura.github.io/streamlink-saver](https://mhasanbogura.github.io/streamlink-saver/) to reliably assign the resolved `.strm` filename.

The default save path is `Downloads/`. Select the settings gear in the popup to store a different Downloads-relative folder, such as `Downloads/Direct Link`. The package also includes `config.js`, where the default `SAVE_PATH` constant can be edited before loading the extension.

> Use StreamLink Saver only for URLs and media you are authorized to access.

## GitHub Pages handoff

The companion page is deployed at <https://mhasanbogura.github.io/streamlink-saver/>. The workflow in `.github/workflows/deploy-pages.yml` publishes the static site when changes are pushed to `main`.

