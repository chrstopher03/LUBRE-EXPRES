const CACHE_NAME = 'lubri-expres-v2';

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
INSTALAR
========================= */

self.addEventListener('install', event => {

console.log('Service Worker instalado');

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

return cache.addAll(urlsToCache);

})

);

self.skipWaiting();

});

/* =========================
ACTIVAR
========================= */

self.addEventListener('activate', event => {

console.log('Service Worker activado');

event.waitUntil(

caches.keys().then(cacheNames => {

return Promise.all(

cacheNames.map(cache => {

if(cache !== CACHE_NAME){

return caches.delete(cache);

}

})

);

})

);

self.clients.claim();

});

/* =========================
FETCH
========================= */

self.addEventListener('fetch', event => {

event.respondWith(

caches.match(event.request)
.then(response => {

if(response){

return response;

}

return fetch(event.request)
.then(networkResponse => {

return caches.open(CACHE_NAME)
.then(cache => {

cache.put(
event.request,
networkResponse.clone()
);

return networkResponse;

});

});

})
.catch(() => {

if(event.request.mode === 'navigate'){

return caches.match('./index.html');

}

})

);

});