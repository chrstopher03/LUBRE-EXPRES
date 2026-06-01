/* =========================
ANIMACIÓN INICIO
========================= */

function entrar(){

const inicio =
document.getElementById('inicio');

inicio.style.opacity = '0';

setTimeout(()=>{

inicio.style.display = 'none';

},1000);

}

/* =========================
ALERTAS PROFESIONALES
========================= */

function mostrarToast(
mensaje,
tipo='success'
){

const container =
document.getElementById(
'toast-container'
);

if(!container) return;

const toast =
document.createElement('div');

toast.className =
`toast ${tipo}`;

let icono =
'fa-circle-info';

if(tipo === 'success'){
icono =
'fa-circle-check';
}

if(tipo === 'error'){
icono =
'fa-circle-xmark';
}

if(tipo === 'warning'){
icono =
'fa-triangle-exclamation';
}

toast.innerHTML = `<i class="fa-solid ${icono}"></i> <span>${mensaje}</span>`;

container.appendChild(
toast
);

setTimeout(()=>{

toast.style.opacity='0';
toast.style.transform=
'translateX(100%)';

setTimeout(()=>{

toast.remove();

},400);

},3000);

}

/* =========================
PRODUCTOS
========================= */

const products = [

{
id:1,
name:'Mobil Parmazone',
description:'Lubricante premium para motores de alto rendimiento.',
price:780,
category:'motor',
images:['6.jpeg']
},

{
id:2,
name:'Mobil Heavy Duty',
description:'Ideal para maquinaria industrial pesada.',
price:780,
category:'grasa',
images:['7.jpeg']
},

{
id:3,
name:'Mobil ATF D/M',
description:'Máxima protección hidráulica profesional.',
price:350,
category:'hidraulico',
images:['8.jpeg','10.jpeg']
},

{
id:4,
name:'American Automatic transmission',
description:'American ',
price:180,
category:'motor',
images:['11.jpeg']
},


{
id:5,
name:'Mobil delvac',
description:'American ',
price:35,
category:'motor',
images:['12.jpeg','13.jpeg']
},


{
id:6,
name:'Motor Oil SAE 50',
description:'American ',
price:140,
category:'motor',
images:['14.jpeg']
},

{
id:7,
name:'Mobil Super moto',
description:'American ',
price:300,
category:'motor',
images:['15.jpeg']
},

{
id:8,
name:'Havoline SAE 20W-50',
description:'American ',
price:280,
category:'motor',
images:['16.jpeg']
},

{
id:9,
name:'TEC service Power Steering Fluid',
description:'American ',
price:200,
category:'motor',
images:['17.jpeg']
},

{
id:10,
name:'Havoline 2-cicle',
description:'American ',
price:200,
category:'motor',
images:['18.jpeg']
},


{
id:10,
name:'Auto Super Heavy Duty',
description:'Liquido de frenos',
price:90,
category:'motor',
images:['19.jpeg']
},

{
id:11,
name:'Auto Super Heavy Duty',
description:'Liquido de Frenos Rojo',
price:90,
category:'motor',
images:['20.jpeg']
},

{
id:12,
name:'Movil delvac 10W-30',
description:'',
price:90,
category:'motor',
images:['21.jpeg']
},

{
id:12,
name:'Movil delvac 15W-40',
description:'',
price:90,
category:'motor',
images:['22.jpeg']
}



];

let filteredProducts = [...products];

let productoActual = null;

let imagenActual = 0;

/* =========================
RENDER
========================= */

function renderProducts(){

const container =
document.getElementById('productos');

container.innerHTML = '';

filteredProducts.forEach(product=>{

container.innerHTML += `

<div class="card">

<div class="card-img">
<img src="${product.images[0]}" alt="${product.name}">
</div>

<div class="card-content">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="precio">
C$${product.price}
</div>

<button onclick="abrirModal(${product.id})">
Ver Producto
</button>

</div>

</div>

`;

});

}

/* =========================
MODAL
========================= */

function abrirModal(id){

const product =
products.find(
p => p.id === id
);

productoActual = product;

imagenActual = 0;

document.getElementById('modal')
.style.display = 'flex';

document.getElementById('modal-title')
.innerText = product.name;

document.getElementById('modal-desc')
.innerText = product.description;

document.getElementById('modal-price')
.innerText =
'C$' + product.price;

document.getElementById('modal-img')
.src = product.images[0];

}

function siguienteImagen(){

imagenActual++;

if(
imagenActual >=
productoActual.images.length
){

imagenActual = 0;

}

document.getElementById('modal-img')
.src =
productoActual.images[
imagenActual
];

}

function anteriorImagen(){

imagenActual--;

if(imagenActual < 0){

imagenActual =
productoActual.images.length - 1;

}

document.getElementById('modal-img')
.src =
productoActual.images[
imagenActual
];

}

function cerrarModal(){

document.getElementById('modal')
.style.display = 'none';

}

window.onclick = function(e){

const modal =
document.getElementById('modal');

if(e.target == modal){

cerrarModal();

}

}

/* =========================
CARRITO
========================= */

function agregarCarrito(){

if(!productoActual){

mostrarToast(
'Producto no encontrado',
'error'
);

return;

}

let carrito =
JSON.parse(
localStorage.getItem('carrito')
) || [];

carrito.push(
productoActual
);

localStorage.setItem(
'carrito',
JSON.stringify(carrito)
);

actualizarContador();

cerrarModal();

mostrarToast(
`${productoActual.name} agregado al carrito`,
'success'
);

}

function actualizarContador(){

let carrito =
JSON.parse(
localStorage.getItem('carrito')
) || [];

document.getElementById(
'cart-count'
).innerText =
carrito.length;

}

actualizarContador();

/* =========================
FILTROS
========================= */

document.getElementById(
'buscador'
).addEventListener(
'keyup',
filtrar
);

document.getElementById(
'categoria'
).addEventListener(
'change',
filtrar
);

function filtrar(){

const texto =
document.getElementById(
'buscador'
).value.toLowerCase();

const categoria =
document.getElementById(
'categoria'
).value;

filteredProducts =
products.filter(product=>{

const coincideNombre =
product.name
.toLowerCase()
.includes(texto);

const coincideCategoria =
categoria === 'todos'
||
product.category === categoria;

return (
coincideNombre &&
coincideCategoria
);

});

renderProducts();

}

/* =========================
INICIAR
========================= */

renderProducts();
/* =========================
   INSTALAR APP PWA
========================= */

let deferredPrompt = null;

const installBtn =
document.getElementById('installBtn');

/* Detectar disponibilidad de instalación */

window.addEventListener(
'beforeinstallprompt',
(e)=>{

e.preventDefault();

deferredPrompt = e;

installBtn.style.display =
'inline-block';

console.log(
'PWA disponible para instalar'
);

}
);

/* Instalar aplicación */

async function instalarApp(){

if(!deferredPrompt){

alert(
'La instalación aún no está disponible. Si estás en iPhone usa "Compartir > Añadir a pantalla de inicio".'
);

return;

}

try{

deferredPrompt.prompt();

const result =
await deferredPrompt.userChoice;

if(result.outcome ===
'accepted'){

console.log(
'Usuario aceptó la instalación'
);

}else{

console.log(
'Usuario canceló la instalación'
);

}

deferredPrompt = null;

installBtn.style.display =
'none';

}catch(error){

console.error(
'Error al instalar:',
error
);

}

}

/* App instalada */

window.addEventListener(
'appinstalled',
()=>{

console.log(
'Aplicación instalada correctamente'
);

installBtn.style.display =
'none';

deferredPrompt = null;

}
);

/* =========================
   SERVICE WORKER
========================= */

if('serviceWorker' in navigator){

window.addEventListener(
'load',
()=>{

navigator.serviceWorker
.register('./sw.js')
.then((registration)=>{

console.log(
'Service Worker registrado',
registration
);

/* Buscar actualizaciones */

registration.update();

/* Detectar nueva versión */

registration.addEventListener(
'updatefound',
()=>{

const newWorker =
registration.installing;

newWorker.addEventListener(
'statechange',
()=>{

if(
newWorker.state === 'installed'
){

if(
navigator.serviceWorker.controller
){

console.log(
'Nueva versión disponible'
);

if(
confirm(
'Hay una nueva versión disponible. ¿Actualizar ahora?'
)
){

newWorker.postMessage(
{
action:'skipWaiting'
}
);

}

}else{

console.log(
'Aplicación cacheada por primera vez'
);

}

}

}
);

}
);

})
.catch(error=>{

console.error(
'Error Service Worker:',
error
);

});

});

}

/* Recargar cuando el SW nuevo tome control */

let refreshing = false;

navigator.serviceWorker?.addEventListener(
'controllerchange',
()=>{

if(refreshing) return;

refreshing = true;

window.location.reload();

}
);