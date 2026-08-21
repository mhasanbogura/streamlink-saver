# StreamLink Saver Enhancement Tasks

- [ ] Confirm the refreshed GitHub integration can write to `mhasanbogura/streamlink-saver`.
- [ ] Upload the finalized source, enable Pages, and verify the GitHub Pages handoff route.

- [ ] Upload the finalized project through GitHub’s API-based repository write route.

- [x] Reduce the supplied extension icon size while retaining a clear Chrome toolbar image.

- [x] Replace the extension icon with the user-supplied blue link image.
- [ ] Rebuild the extension package and include the updated icon in the GitHub upload.

- [ ] Inspect the existing `mhasanbogura/streamlink-saver` repository and preserve any user-authored files.
- [x] Add GitHub Pages build configuration, deployment workflow, and the GitHub Pages extension handoff URL.
- [ ] Push the project, enable GitHub Pages deployment, and verify the published route.

- [x] Provide GitHub Pages deployment steps and the required hosted handoff URL replacement.

- [x] Send a right-clicked URL and resolved `.strm` filename to the hosted StreamLink Saver page.
- [x] Open the hosted download handoff in an inactive background tab.
- [x] Automatically create the `.strm` file from hosted-page query parameters and validate the handoff.

- [x] Capture the right-clicked link’s visible text or accessible label in the active tab.
- [x] Prefer a clean media-style label over generic URL path names such as `download`.
- [x] Confirm displayed movie filenames save as matching `.strm` files and rebuild the package.

- [x] Replace the text MIME download payload with a binary payload that preserves the requested `.strm` extension.
- [x] Update both direct right-click and popup download paths consistently.
- [x] Validate the packaged extension and confirm generated filenames remain `.strm`.

- [x] Add the `contextMenus` permission and background service worker to the Manifest V3 extension.
- [x] Add a right-click menu item for eligible HTTP and HTTPS links.
- [x] Write the clicked link directly to a safely named `.strm` download without showing the popup.
- [x] Update installation guidance, validate the extension, and rebuild the archive.
