/* =========================
VERSION
========================= */

const CACHE_VERSION = 'v3';

const CACHE_NAME =
'lubri-expres-' + CACHE_VERSION;

/* =========================
ARCHIVOS
========================= */

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

self.addEventListener(
'install',
event => {

console.log(
'SW instalado'
);

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

return cache.addAll(
urlsToCache
);

})

);

self.skipWaiting();

}
);

/* =========================
ACTIVAR
========================= */

self.addEventListener(
'activate',
event => {

console.log(
'SW activado'
);

event.waitUntil(

caches.keys()
.then(cacheNames => {

return Promise.all(

cacheNames.map(cache => {

if(
cache !== CACHE_NAME
){

console.log(
'Eliminando cache:',
cache
);

return caches.delete(
cache
);

}

})

);

})

);

self.clients.claim();

}
);

/* =========================
FETCH
(Network First)
========================= */

self.addEventListener(
'fetch',
event => {

event.respondWith(

fetch(event.request)

.then(response => {

const clone =
response.clone();

caches.open(CACHE_NAME)
.then(cache => {

cache.put(
event.request,
clone
);

});

return response;

})

.catch(() => {

return caches.match(
event.request
)

.then(response => {

if(response){

return response;

}

if(
event.request.mode ===
'navigate'
){

return caches.match(
'./index.html'
);

}

});

})

);

}
);

/* =========================
ACTUALIZACION FORZADA
========================= */

self.addEventListener(
'message',
event => {

if(
event.data &&
event.data.action ===
'skipWaiting'
){

self.skipWaiting();

}

}
);