## What’s fixed

- Routes every save through the proven hosted download page instead of relying on Chrome’s direct data-download naming.
- Intercepts Chrome’s download event and assigns the configured `SAVE_PATH` plus the intended `.strm` filename at the final moment.
- Prevents generic browser names such as `download` and missing extensions from replacing the resolved filename.

## Configure the save location

Edit `extension/config.js`:

```js
const SAVE_PATH = "Downloads/Direct Link";
```

For example, use `Downloads/Media/Streams`. Reload the extension in `chrome://extensions` after changing the file.

## Install

Download `streamlink-saver-v1.5.0.zip`, extract it, then open `chrome://extensions`, enable Developer mode, and select **Load unpacked** for the extracted `extension` folder.
