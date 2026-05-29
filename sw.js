const CACHE_NAME = 'lubri-expres-v3';

const urlsToCache = [
  './',
  './index.html',
  './funcion.js',
  './manifest.json',
  './logo.jpeg',
  './30.jpeg',
  './01.jpeg',
  './75.jpeg',
  './09.jpeg'
];

/* =========================
INSTALL
========================= */
self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      for (const url of urlsToCache) {
        try {
          await cache.add(url);
        } catch (err) {
          console.log('No se pudo cachear:', url);
        }
      }
    })
  );
});

/* =========================
ACTIVATE
========================= */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );

  self.clients.claim();
});

/* =========================
FETCH (ESTABLE + SEGURO)
========================= */
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        return caches.open(CACHE_NAME).then(cache => {
          try {
            cache.put(event.request, networkResponse.clone());
          } catch (e) {
            console.log('Cache put error:', e);
          }
          return networkResponse;
        });
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;

          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});