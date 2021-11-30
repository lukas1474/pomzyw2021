const cacheName = `Pomoc Żywnościowa`;
const filesToCache = [
  `/images/logo.svg`,
  `/images/splash.webp`,
  `/images/splash2.webp`,
  `/images/splash3.webp`,
  `/images/splash4.webp`,
  `/images/poster1.webp`,
  `/images/poster2.webp`,
  `/images/logo-starokatolicki__black.webp`,
  `/images/logo-starokatolicki__red.webp`,
  `/images/logo-calatrava.webp`,
  `/images/background.webp`,
  `/images/footer.webp`,
  `/index.html`,
];
self.addEventListener(`install`, function (e) {  //eslint-disable-line
  console.log(`[ServiceWorker] Install`);
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log(`[ServiceWorker] Caching app shell`);
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener(`activate`, (event) => {//eslint-disable-line
  event.waitUntil(self.clients.claim());//eslint-disable-line
});
self.addEventListener(`fetch`, (event) => {//eslint-disable-line
  event.respondWith(
    caches
      .match(event.request, { ignoreSearch: true })
      .then((response) => response || fetch(event.request))
  );
});
