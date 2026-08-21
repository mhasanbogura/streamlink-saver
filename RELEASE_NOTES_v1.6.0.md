## What’s fixed

- Removes date, time, size, and other download metadata that appears after a media extension in a visible link label.
- Keeps only the original media title before `.mkv`, `.mp4`, and other recognized media extensions.

For example, this label:

```text
Aakhri Sawal (2026) Hindi 720p LGPlay WEBRip x264 AAC 2.0 ESub - HDHub4u.mkv 2026-08-15 13-24 1.2 GB
```

now saves as:

```text
Aakhri Sawal (2026) Hindi 720p LGPlay WEBRip x264 AAC 2.0 ESub - HDHub4u.strm
```

## Install

Download `streamlink-saver-v1.6.0.zip`, extract it, then open `chrome://extensions`, enable Developer mode, and select **Load unpacked** for the extracted `extension` folder.
