// Service worker for the Kodi Add-ons download page.
// Caches the app shell so the page is installable and works offline.
// Downloads (APKs/zips on GitHub Releases) are intentionally NOT cached — they're
// large and meant to be fetched fresh; we only cache the lightweight page shell.

const CACHE = 'kodi-addons-shell-v1';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Never cache the big download files (GitHub Releases) — always go to network.
  if (url.hostname === 'github.com' && url.pathname.includes('/releases/download/')) {
    return; // default browser network handling
  }

  // App shell + small same-origin files: cache-first, fall back to network and cache it.
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then((hit) =>
        hit ||
        fetch(req).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
          return res;
        }).catch(() => caches.match('./index.html'))
      )
    );
  }
});
