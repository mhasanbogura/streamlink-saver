## What’s new

- Restored the streamlined popup without the settings interface.
- Added `extension/config.js` as the one editable location setting.
- Set `saveFolder` in that file to a Downloads-relative folder such as `Media/Streams`.
- Right-click and popup saves use that folder automatically after the extension is reloaded.

## Set your location

Open `extension/config.js` in a text editor and change:

```js
saveFolder: "StreamLink",
```

For example, set `saveFolder: "Media/Streams"` to save into `Downloads/Media/Streams/`. Reload the extension in `chrome://extensions` after editing the file.

## Install

Download `streamlink-saver-v1.3.0.zip`, extract it, then open `chrome://extensions`, enable Developer mode, and select **Load unpacked** for the extracted `extension` folder.
