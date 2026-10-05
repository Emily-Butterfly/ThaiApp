/* Service Worker der Web-App: hält alle Dateien offline bereit.
   Nach jeder inhaltlichen Änderung VERSION erhöhen, damit Geräte die neue Fassung laden. */
const VERSION = "thai-app-v1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "css/fonts.css",
  "css/app.css",
  "vendor/capacitor.js",
  "js/course.js",
  "js/platform.js",
  "js/app.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "icons/apple-touch-icon.png",
  "fonts/andika-latin-400-normal.woff2",
  "fonts/andika-latin-700-normal.woff2",
  "fonts/andika-latin-ext-400-normal.woff2",
  "fonts/andika-latin-ext-700-normal.woff2",
  "fonts/andika-vietnamese-400-normal.woff2",
  "fonts/andika-vietnamese-700-normal.woff2",
  "fonts/sarabun-thai-400-normal.woff2",
  "fonts/sarabun-thai-500-normal.woff2",
  "fonts/sarabun-thai-600-normal.woff2",
  "fonts/sarabun-latin-400-normal.woff2",
  "fonts/sarabun-latin-500-normal.woff2",
  "fonts/sarabun-latin-600-normal.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if(req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.match(req, {ignoreSearch: true}).then((hit) => hit || fetch(req).then((res) => {
      if(res.ok){ const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => (req.mode === "navigate" ? caches.match("index.html") : Response.error())))
  );
});
