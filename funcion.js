
/* =========================
INICIO
========================= */

function entrar(){
const inicio = document.getElementById('inicio');

inicio.style.opacity = '0';

setTimeout(()=>{
inicio.style.display = 'none';
},1000);
}

/* =========================
TOAST
========================= */

function mostrarToast(mensaje, tipo='success'){

const container = document.getElementById('toast-container');
if(!container) return;

const toast = document.createElement('div');
toast.className = `toast ${tipo}`;

let icono = 'fa-circle-info';

if(tipo === 'success') icono = 'fa-circle-check';
if(tipo === 'error') icono = 'fa-circle-xmark';
if(tipo === 'warning') icono = 'fa-triangle-exclamation';

toast.innerHTML = `<i class="fa-solid ${icono}"></i> <span>${mensaje}</span>`;

container.appendChild(toast);

setTimeout(()=>{
toast.style.opacity='0';
toast.style.transform='translateX(100%)';
setTimeout(()=>toast.remove(),400);
},3000);
}

/* =========================
INVENTARIO GLOBAL (🔥 NUEVO)
========================= */

let inventario = JSON.parse(localStorage.getItem('inventario')) || {};

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
price:1700,
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
price:350,
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
id:13,
name:'Movil delvac 15W-40',
description:'',
price:370,
category:'motor',
images:['22.jpeg']
},
{
id:14,
name:'Movil delvac 15W-40',
description:'',
price:300,
category:'motor',
images:['23.jpeg']
},
{
id:15,
name:'Mobil Special 20W-50 - Aceite para motor',
description:'',
price:1200,
category:'motor',
images:['24.jpeg']
},
{
id:16,
name:'Mobil Delvac 1300 Super 15W-40.',
description:'',
price:1300,
category:'motor',
images:['25.jpeg']
},
{
id:17,
name:'Movil delvac 15W-40',
description:'',
price:1200,
category:'motor',
images:['26.jpeg']
},
{
id:18,
name:'Mobilube HD Plus Gear Oil 85W-140',
description:'',
price:1400,
category:'motor',
images:['27.jpeg']
},
{
id:19,
name:'Mobilube HD Plus Gear Oil 85W-140',
description:'',
price:360,
category:'motor',
images:['28.jpeg']
},
{
id:20,
name:'Mobilube HD Plus Gear Oil 80W-90',
description:'',
price:1400,
category:'motor',
images:['29.jpeg']
},


{
id:29,
name:'Aceite para Moto Bajaj DTS-i 20W50',
description:'',
price:350,
category:'motor',
images:['38.jpeg']
},



{
id:31,
name:'Aceite para Motor 4T 20W-50 – Motul 3000',
description:'',
price:370,
category:'motor',
images:['39.jpeg']
},


{
id:32,
name:'Aceite Raloy 4T Moto Mineral SAE 20W-50 – 1L',
description:'',
price:220,
category:'motor',
images:['40.jpeg']
},

{
id:32,
name:'Refrigerante Ebullient Red Coolant Antifreeze',
description:'',
price:90,
category:'motor',
images:['41.jpeg']
},

{
id:32,
name:'HS Windshield Washer Fluid & Bug Remover 2-in-1',
description:'',
price:250,
category:'motor',
images:['42.jpeg']
},


{
id:28,
name:'HS Heavy Duty Purple Blaster',
description:'',
price:580,
category:'motor',
images:['43.jpeg']
},


{
id:28,
name:'HS Heavy Duty Purple Blaster-Atomizador',
description:'',
price:270,
category:'motor',
images:['44.jpeg']
},

{
id:28,
name:'AUTO Coolant Refrigerante Verde',
description:'',
price:280,
category:'motor',
images:['45.jpeg']
},

{
id:28,
name:'Shell Advance AX5 20W-50 4T',
description:'',
price:300,
category:'motor',
images:['46.jpeg']
},
{
id:22,
name:'Mobil Delvac Legend 20W-50 High Mileage',
description:'',
price:90,
category:'motor',
images:['31.jpeg']
},
{
id:23,
name:'Valvoline All-Fleet Legacy SAE 15W-40 API CI-4/SL',
description:'',
price:90,
category:'motor',
images:['32.jpeg']
},
{
id:24,
name:'Mobil Delvac 1300 Super SAE 15W-40',
description:'',
price:90,
category:'motor',
images:['33.jpeg']
},
{
id:25,
name:'Chevron Ursa Premium TDX SAE 15W-40 API CI-4/SL',
description:'',
price:90,
category:'motor',
images:['34.jpeg']
},
{
id:26,
name:'Chevron Ursa HD AK SAE 25W-50 API CF-4',
description:'',
price:90,
category:'motor',
images:['35.jpeg']
},

{
id:27,
name:'PUMA Lubricants HD Super SAE 25W-60',
description:'',
price:90,
category:'motor',
images:['36.jpeg']
},
{
id:28,
name:'Super S FG-1000 Heavy Duty SAE 10W',
description:'',
price:90,
category:'motor',
images:['37.jpeg']
},




];

let filteredProducts = [...products];
let productoActual = null;
let imagenActual = 0;

/* =========================
RENDER PRODUCTOS (CON STOCK REAL)
========================= */

function renderProducts(){

const container = document.getElementById('productos');
container.innerHTML = '';

filteredProducts.forEach(product=>{

const stock = inventario[product.name] || 0;
const agotado = stock <= 0;

container.innerHTML += `

<div class="card ${agotado ? 'disabled' : ''}">

<div class="card-img">
<img src="${product.images[0]}" alt="${product.name}">
</div>

<div class="card-content">

<h3>${product.name}</h3>

<p>${product.description}</p>

<div class="precio">C$${product.price}</div>

<div class="stock-label">
${agotado ? '<span class="agotado">AGOTADO</span>' : 'Stock: ' + stock}
</div>

<button onclick="abrirModal(${product.id})"
${agotado ? 'disabled' : ''}
>
Ver Producto
</button>

</div>

</div>

`;

});

}

/* =========================
MODAL (BLOQUEA AGOTADOS)
========================= */

function abrirModal(id){

const product = products.find(p => p.id === id);

const stock = inventario[product.name] || 0;

if(stock <= 0){
mostrarToast('Producto agotado','error');
return;
}

productoActual = product;
imagenActual = 0;

document.getElementById('modal').style.display = 'flex';

document.getElementById('modal-title').innerText = product.name;
document.getElementById('modal-desc').innerText = product.description;
document.getElementById('modal-price').innerText = 'C$' + product.price;
document.getElementById('modal-img').src = product.images[0];

}

/* =========================
IMÁGENES MODAL
========================= */

function siguienteImagen(){
imagenActual++;
if(imagenActual >= productoActual.images.length) imagenActual = 0;
document.getElementById('modal-img').src = productoActual.images[imagenActual];
}

function anteriorImagen(){
imagenActual--;
if(imagenActual < 0) imagenActual = productoActual.images.length - 1;
document.getElementById('modal-img').src = productoActual.images[imagenActual];
}

function cerrarModal(){
document.getElementById('modal').style.display = 'none';
}

window.onclick = function(e){
if(e.target.id === 'modal') cerrarModal();
}

/* =========================
CARRITO + RESTA STOCK
========================= */

function agregarCarrito(){

if(!productoActual){
mostrarToast('Producto no encontrado','error');
return;
}

let stock = inventario[productoActual.name] || 0;

if(stock <= 0){
mostrarToast('Producto agotado','error');
return;
}

// 🔥 RESTAR STOCK
inventario[productoActual.name] = stock - 1;
localStorage.setItem('inventario', JSON.stringify(inventario));

// CARRITO
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
carrito.push(productoActual);
localStorage.setItem('carrito', JSON.stringify(carrito));

actualizarContador();
renderProducts();
cerrarModal();

mostrarToast(`${productoActual.name} agregado al carrito`,'success');
}

/* =========================
CONTADOR
========================= */

function actualizarContador(){
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
document.getElementById('cart-count').innerText = carrito.length;
}

actualizarContador();

/* =========================
FILTROS
========================= */

document.getElementById('buscador').addEventListener('keyup', filtrar);
document.getElementById('categoria').addEventListener('change', filtrar);

function filtrar(){

const texto = document.getElementById('buscador').value.toLowerCase();
const categoria = document.getElementById('categoria').value;

filteredProducts = products.filter(product=>{

const matchName = product.name.toLowerCase().includes(texto);
const matchCat = categoria === 'todos' || product.category === categoria;

return matchName && matchCat;

});

renderProducts();
}

/* =========================
INICIALIZAR
========================= */

renderProducts();
/* =========================
INICIAR
========================= */

renderProducts();/* =========================
   INSTALAR APP PWA
========================= */

let deferredPrompt = null;

const installBtn =
document.getElementById('installBtn');

/* Ocultar inicialmente */

if(installBtn){

installBtn.style.display =
'none';

}

/* Detectar instalación disponible */

window.addEventListener(
'beforeinstallprompt',
(event)=>{

console.log(
'PWA instalable detectada'
);

event.preventDefault();

deferredPrompt = event;

if(installBtn){

installBtn.style.display =
'inline-flex';

}

}
);

/* Detectar si ya está instalada */

window.addEventListener(
'appinstalled',
()=>{

console.log(
'Aplicación instalada'
);

deferredPrompt = null;

if(installBtn){

installBtn.style.display =
'none';

}

}
);

/* Instalación */

async function instalarApp(){

if(!deferredPrompt){

alert(
'La instalación no está disponible todavía.'
);

return;

}

try{

await deferredPrompt.prompt();

const choice =
await deferredPrompt.userChoice;

console.log(
'Resultado:',
choice.outcome
);

if(choice.outcome ===
'accepted'
){

console.log(
'Instalación aceptada'
);

}else{

console.log(
'Instalación cancelada'
);

}

deferredPrompt = null;

if(installBtn){

installBtn.style.display =
'none';

}

}catch(error){

console.error(
'Error de instalación:',
error
);

}

}

/* =========================
   SERVICE WORKER
========================= */

if('serviceWorker' in navigator){

window.addEventListener(
'load',
async ()=>{

try{

const registration =
await navigator.serviceWorker
.register('./sw.js');

console.log(
'SW registrado',
registration
);

/* Buscar actualizaciones */

registration.update();

/* Nueva versión */

registration.addEventListener(
'updatefound',
()=>{

const worker =
registration.installing;

console.log(
'Actualización encontrada'
);

worker.addEventListener(
'statechange',
()=>{

if(
worker.state ===
'installed'
){

if(
navigator.serviceWorker.controller
){

const actualizar =
confirm(
'Hay una nueva versión disponible. ¿Actualizar ahora?'
);

if(actualizar){

worker.postMessage({
action:
'skipWaiting'
});

}

}else{

console.log(
'Primera instalación completada'
);

}

}

}
);

}
);

}catch(error){

console.error(
'Error SW:',
error
);

}

});

}

/* Recargar automáticamente */

let refreshing = false;

navigator.serviceWorker?.addEventListener(
'controllerchange',
()=>{

if(refreshing) return;

refreshing = true;

window.location.reload();

}
);

/* =========================
   DIAGNÓSTICO
========================= */

window.addEventListener(
'load',
()=>{

console.log(
'URL:',
location.href
);

console.log(
'Standalone:',
window.matchMedia(
'(display-mode: standalone)'
).matches
);

}
);