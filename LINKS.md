# Hosting Links — fill these in

Replace `HOST` with wherever you upload the files. Fire TV's **Downloader** app needs a
**direct** link (HTTP/HTTPS), not a landing page.

## Direct download URLs (relative names match the files in this folder)

| File | URL |
|------|-----|
| index page | `https://HOST/index.html` |
| The Crew APK | `https://HOST/thecrew-2.0.6-release.apk` |
| WatchNixtoons2 APK | `https://HOST/watchnixtoons2-0.14.18-release.apk` |
| Master bundle | `https://HOST/kodi-addons-master.zip` |
| The Crew bundle | `https://HOST/thecrew-install-bundle.zip` |
| WatchNixtoons2 bundle | `https://HOST/watchnixtoons2-install-bundle.zip` |
| resolveurl zip | `https://HOST/script.module.resolveurl-5.1.202.zip` |
| (other zips) | `https://HOST/<filename>.zip` |

## Fire TV — short codes (so you don't type long URLs on the remote)

1. Host the files (see options below) and note each direct URL.
2. Go to **https://aftv.news/** → create a free **Downloader Code** pointing at the URL.
3. On Fire TV: open **Downloader** → type the short code (e.g. `aftv.news/123456`) → download.
   - Downloader auto-prompts to **install** APKs.
   - For **zips**, Downloader saves to its download folder; then in Kodi use
     **Install from zip file** and browse to it.

Short codes to create:
- The Crew APK  → aftv.news code: `____________`
- WatchNixtoons2 APK → aftv.news code: `____________`
- Index page    → aftv.news code: `____________`

## Kodi "install zip from URL" (skips Downloader for the zips)

In Kodi: **Settings → File manager → Add source →** paste `https://HOST/` → name it
`Addons` → **Install from zip file → Addons →** pick the zip. (For The Crew, install
`script.module.resolveurl-...zip` before `plugin.video.thecrew.zip`.)

## Hosting options

| Option | Direct link | Notes |
|--------|-------------|-------|
| **GitHub Releases** ⭐ | yes | Upload big files as release **assets** (not committed). URL pattern: `https://github.com/USER/REPO/releases/download/TAG/FILENAME`. 2 GB/file. |
| **GitHub Pages** | yes | Good for `index.html` + small zips. Don't commit the 90 MB bundles (100 MB file limit / repo bloat) — link those to Releases instead. |
| **Dropbox** | yes | Share link, change `?dl=0` → `?dl=1`. |
| **Cloudflare R2 / Backblaze B2** | yes | Object storage, free tier, great for big files. |
| Google Drive | flaky | Large-file scan interstitial breaks Downloader — avoid. |

### Recommended combo
- **index.html + small zips** → GitHub Pages (or any static host).
- **APKs + 89/90 MB bundles** → GitHub **Releases**.
- Point `index.html` links at the Release asset URLs, and make **aftv.news** codes for the
  two APKs.
