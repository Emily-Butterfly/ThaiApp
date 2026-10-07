/* Service Worker der Web-App: hält alle Dateien offline bereit.
   sw-version.js schreibt der Build (scripts/version.mjs) mit dem Fingerprint aller Dateien in www/.
   Ändert sich irgendeine Datei, ändert sich der Cache-Name: Der Browser installiert dann diesen
   Service Worker neu, lädt alle Dateien frisch und räumt den alten Cache weg.
   Kein try/catch: Fehlt sw-version.js oder lädt es nicht, schlägt die Installation fehl und der
   Browser versucht es beim nächsten Besuch erneut, statt auf einem alten Stand stehen zu bleiben. */
importScripts("sw-version.js");
const VERSION = "thai-app-" + String(self.WEB_FINGERPRINT).slice(0, 16);
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "version.json",
  "css/fonts.css",
  "css/app.css",
  "vendor/capacitor.js",
  "js/platform.js",
  "js/course.js",
  "js/course-a2.js",
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
  // cache: "reload" umgeht den HTTP-Cache, damit wirklich die neue Fassung im Offline-Speicher landet.
  e.waitUntil(caches.open(VERSION)
    .then((c) => c.addAll(FILES.map((f) => new Request(f, {cache: "reload"}))))
    .then(() => self.skipWaiting()));
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
