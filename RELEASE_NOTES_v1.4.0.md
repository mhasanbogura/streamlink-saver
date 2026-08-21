## What’s fixed

- Uses the requested one-line configuration style: `const SAVE_PATH = "Downloads/Direct Link";`.
- Removes the leading `Downloads` segment before asking Chrome to save the file, so the configured subfolder is used correctly.
- Keeps the resolved movie-style filename and `.strm` extension when saving in the configured folder.
- Falls back from generic URL endpoints such as `download` to a meaningful host-based `.strm` filename in the popup.

## Set your location

Open `extension/config.js` and change the `SAVE_PATH` constant. For example:

```js
const SAVE_PATH = "Downloads/Media/Streams";
```

Reload the extension in `chrome://extensions` after editing the file.

## Install

Download `streamlink-saver-v1.4.0.zip`, extract it, then open `chrome://extensions`, enable Developer mode, and select **Load unpacked** for the extracted `extension` folder.
