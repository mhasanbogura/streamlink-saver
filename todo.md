# StreamLink Saver Enhancement Tasks

- [x] Create one `Save link as .strm.zip` release asset containing `Chrome/` and `Firefox/` extension-source folders.
- [x] Replace the separate Chrome and Firefox release ZIPs with the combined package.

- [x] Rename the Chrome GitHub Release asset to `Save link as .strm for Chrome.zip`.

- [x] Rename the extension source folder to `Save link as .strm`.
- [x] Build clean Chrome and Firefox extension-only ZIPs for the GitHub Release.
- [x] Upload the renamed source and remove all repository ZIP download folders.
- [x] Publish the Chrome and Firefox ZIPs as GitHub Release assets.

- [x] Move browser ZIP distribution folders under `Save link as .strm/chrome` and `Save link as .strm/firefox`.
- [x] Keep the nested package ZIPs out of their own extension archives.
- [x] Validate and upload the nested GitHub distribution layout.

- [x] Create a Firefox-compatible extension manifest and package.
- [x] Add extension-only `Chrome/Save link as .strm.zip` and `Firefox/Save link as .strm.zip` repository downloads.
- [x] Validate both packages and upload the cross-browser distribution layout to GitHub.

- [x] Create the public v1.7.0 GitHub Release with the default-Downloads settings ZIP.

- [x] Add an extension settings page with a persistent save path defaulting to `Downloads/`.
- [x] Apply the stored settings path to hosted download filename assignment.
- [x] Validate the default and custom folder paths, then publish the update.

- [x] Create the public v1.6.0 GitHub Release with the media-boundary filename-cleanup ZIP.

- [x] Trim visible-link label text after a recognized media extension such as `.mkv`.
- [x] Validate that download metadata is excluded from the final `.strm` filename.

- [x] Create the public v1.5.0 GitHub Release with the hosted-interception extension ZIP.

- [x] Route saves through the hosted download page and keep the expected `.strm` path pending in the extension.
- [x] Intercept the hosted download event to force the configured subfolder and resolved `.strm` filename.
- [x] Validate that generic browser download names no longer replace the intended filename.

- [x] Create the public v1.4.0 GitHub Release with the corrected SAVE_PATH extension ZIP.

- [x] Replace the configuration object with a simple Downloads-prefixed `SAVE_PATH` constant.
- [x] Strip the leading `Downloads` directory before passing the target subfolder to Chrome.
- [x] Preserve the resolved `.strm` filename for configured subfolder downloads and validate it.

- [x] Create the public v1.3.0 GitHub Release with the configuration-file extension ZIP.

- [x] Remove the fixed-folder settings page and popup gear interface.
- [x] Add an editable configuration file that defines the Downloads-relative save subfolder.
- [x] Validate and publish the configuration-file based save behavior.

- [x] Create the public v1.2.0 GitHub Release with the fixed-folder extension ZIP.

- [x] Add a persistent fixed Downloads subfolder option that is used without repeated location prompts.
- [x] Apply the configured fixed folder to popup and right-click .strm saves.
- [x] Validate the configured save paths and publish the updated extension release.

- [ ] Upload the finalized v1.1.0 source changes to the GitHub repository.
- [ ] Create the public v1.1.0 GitHub Release with the extension ZIP asset.

- [x] Add a visible context-menu success notification after the hosted handoff opens.
- [ ] Build the updated extension ZIP and publish it in a GitHub Release.

- [x] Replace the unavailable Manus-hosted brand image with the supplied compact link icon in the GitHub Pages build.

- [x] Trigger the enabled GitHub Pages workflow and verify the published handoff route.

- [x] Confirm the refreshed GitHub integration can write to `mhasanbogura/streamlink-saver`.
- [x] Upload the finalized source, enable Pages, and verify the GitHub Pages handoff route.

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
