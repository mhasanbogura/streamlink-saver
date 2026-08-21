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
3. Select **Load unpacked** and choose the repository’s `extension` folder.
4. Use the popup, or right-click an HTTP/HTTPS link and select **Save link as .strm**.

See [GITHUB_PAGES_HOSTING.md](GITHUB_PAGES_HOSTING.md) for more deployment detail.
