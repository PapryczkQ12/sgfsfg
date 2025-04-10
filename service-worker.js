const CACHE_NAME = "mobywatel-cache-v1";
const urlsToCache = [
  "/",
  "/assets/id.css?v=1.5",
  "/assets/main.css?v=2.0",
  "/assets/id.js?v=1.1"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
