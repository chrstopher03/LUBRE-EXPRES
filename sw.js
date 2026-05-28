
const CACHE_NAME = 'lubri-expres-v1';

const urlsToCache = [

'./',
'./index.html',
'./funcion.js',
'./logo.jpeg',
'./30.jpeg',
'./01.jpeg',
'./75.jpeg',
'./09.jpeg'

];

/* INSTALAR CACHE */

self.addEventListener('install', event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

return cache.addAll(urlsToCache);

})

);

});

/* ACTIVAR */

self.addEventListener('activate', event => {

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

});

/* FETCH */

self.addEventListener('fetch', event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return response || fetch(event.request);

})

);

});
