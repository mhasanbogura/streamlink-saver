# StreamLink Saver for Firefox

This folder is the Firefox version of StreamLink Saver. It writes a supported HTTP or HTTPS media link into a `.strm` file; it does not download the media itself.

## Install in Firefox

1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Select **Load Temporary Add-on**.
3. Open this `Firefox` folder and select `manifest.json`.
4. Use the extension popup or the right-click menu item **Save link as .strm**.

Firefox temporary add-ons are removed when Firefox restarts. A signed Firefox package is required for a persistent end-user installation.

## Save location

The default save path is `Downloads/`. Select the settings gear in the popup to choose a persistent Downloads-relative folder. You can also edit `config.js` before loading the extension and then reload the temporary add-on from `about:debugging`.

> Use only URLs and media you are authorized to access.
