# Kodi Add-ons — Distribution

A simple download site for two Kodi add-ons (**The Crew**, **WatchNixtoons2**): APKs, add-on
zips, full bundles, and step-by-step guides. Designed so a **Fire TV Downloader** app or a
phone browser can grab files from one place.

## Files

- `index.html` — clickable download page (host this; or browse it in Downloader).
- `*.apk` — sideloadable apps (release + debug).
- `*-install-bundle.zip`, `kodi-addons-master.zip` — full bundles.
- add-on zips — for Kodi's **Install from zip file**.
- `LINKS.md` — fill in your hosting URLs / Fire TV short codes.

## Two ways to deploy

### A. Static host (Dropbox / Cloudflare R2 / VPS / S3)
Upload the **whole folder**. `index.html` uses relative links, so everything just works.
Give Downloader the URL to `index.html` (or a direct file URL).

### B. GitHub (Pages + Releases)
The big binaries are **git-ignored** (see `.gitignore`) because GitHub caps files at 100 MB
and binaries bloat a repo. So:
- Commit `index.html`, `LINKS.md`, `README.md`, and the small add-on zips → serve via
  **GitHub Pages**.
- Upload the **APKs and the 89/90 MB bundles** as **GitHub Release assets**.
- Edit `index.html` links for those big files to point at the Release asset URLs
  (`https://github.com/USER/REPO/releases/download/TAG/FILE`).

## Important for users (baked into index.html)
- Needs **Kodi 19.4+** and **internet on first install** (most helper modules download from
  Kodi's official repo).
- **The Crew:** install `script.module.resolveurl-5.1.202.zip` **before** the plugin — it's a
  third-party module not in Kodi's repo.
- These are open-source scraper add-ons; the authors host no content.
