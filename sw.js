/* =========================
VERSION
========================= */

const CACHE_VERSION = 'v4';

const CACHE_NAME =
'lubri-expres-' + CACHE_VERSION;

/* =========================
ARCHIVOS
========================= */

const urlsToCache = [

'/',
'/index.html',
'/style.css',
'/funcion.js',
'/manifest.json',

'/logo.jpeg',
'/icon-192.png',
'/icon-512.png',

'/30.jpeg',
'/01.jpeg',
'/75.jpeg',
'/09.jpeg'

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
========================= */

self.addEventListener(
'fetch',
event => {

if(
event.request.method !== 'GET'
){
return;
}

event.respondWith(

fetch(event.request)

.then(response => {

const responseClone =
response.clone();

caches.open(CACHE_NAME)
.then(cache => {

cache.put(
event.request,
responseClone
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
'/index.html'
);

}

});

})

);

}
);

/* =========================
ACTUALIZAR
========================= */

self.addEventListener(
'message',
event => {

if(
event.data?.action ===
'skipWaiting'
){

self.skipWaiting();

}

}
);