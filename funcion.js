
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
description:'Mobil Permazone 50/50 Prediluted Coolant/Antifreeze es un refrigerante y anticongelante listo para usar, formulado para proteger el sistema de enfriamiento de motores de vehículos tanto a gasolina como diésel.',
price:780,
category:'motor',
images:['6.jpeg']
},

{
id:2,
name:'Mobil Heavy Duty',
description:'Mobil Heavy Duty SCA Precharged 50/50 Prediluted Coolant/Antifreeze es un refrigerante y anticongelante de servicio pesado listo para usar, diseñado especialmente para proteger motores de combustible diésel de alta exigencia (camiones, maquinaria y equipos pesados).',
price:780,
category:'grasa',
images:['7.jpeg']
},

{
id:3,
name:'Mobil ATF D/M',
description:'Mobil ATF D/M es un fluido para transmisiones automáticas especialmente formulado para vehículos de pasajeros y camiones ligeros que requieren especificaciones Dexron III (GM) o Mercon (Ford), siendo compatible con motores que utilizan combustible tanto de gasolina como diésel.',
price:350,
category:'hidraulico',
images:['8.jpeg','10.jpeg']
},

{
id:4,
name:'American Automatic transmission',
description:'American Motor Oil Automatic Transmission Fluid (AMO ATF) es un fluido para transmisiones automáticas diseñado para ofrecer un rendimiento excepcional y protección contra la fricción en todas las marcas de transmisiones automáticas, siendo compatible con vehículos de gasolina y diésel.',
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
id:29,
name:'Shell Advance AX5 20W-50 4T',
description:'',
price:300,
category:'motor',
images:['47.jpeg']
},


{
id:30,
name:'aceite de motor Golden Oil Aceite Mineral SAE 20W-50 API SN (1 litro).',
description:'Es un aceite lubricante para motores de gasolina',
price:300,
category:'motor',
images:['48.jpeg']
},



{
id:31,
name:'Hyundai XTeer G800 SP 5W-30 Full Synthetic.',
description:'Hyundai XTeer G800 5W-30 es un aceite de motor 100% sintético para vehículos de gasolina, incluyendo motores T-GDI (turbo de inyección directa).',
price:300,
category:'motor',
images:['49.jpeg']
},

{
id:32,
name:'Hyundai XTeer G800 SP 0W-20.',
description:'Hyundai XTeer G800 SP 0W-20 es un aceite de motor 100% sintético diseñado para vehículos de gasolina, híbridos y motores T-GDI (turbo de inyección directa)',
price:300,
category:'motor',
images:['50.jpeg']
},

{
id:33,
name:'Hyundai XTeer HD7000 CI-4 15W-40',
description:'Hyundai XTeer HD7000 CI-4 15W-40 es un aceite de motor sintético especialmente formulado para vehículos y maquinaria de combustible diésel',
price:300,
category:'motor',
images:['51.jpeg']
},

{
id:34,
name:'Hyundai XTeer D500 CI-4 10W-30 ',
description:'Hyundai XTeer D500 CI-4 10W-30 es un aceite de motor de alto rendimiento para vehículos de combustible diésel',
price:1600,
category:'motor',
images:['52.jpeg']
},

{
id:35,
name:'ELF Performance Pro 700 15W-40',
description:'ELF Performance Pro 700 15W-40 es un aceite de motor de alto rendimiento formulado para vehículos de combustible diésel',
price:1500,
category:'motor',
images:['53.jpeg']
},

{
id:36,
name:'ELF Performance Pro 700I 15W-40 (1 Litro)',
description:'Aceite lubricante de alto rendimiento diseñado para proteger y mejorar el funcionamiento del motor.',
price:280,
category:'motor',
images:['54.jpeg']
},

{
id:37,
name:'Mobil Super Synthetic 5W-30 Full Synthetic Motor Oil',
description:'Aceite de motor totalmente sintético diseñado para brindar una excelente protección contra el desgaste, altas temperaturas y la formación de depósitos para gasolina',
price:550,
category:'motor',
images:['55.jpeg']
},

{
id:38,
name:'Mobil Full Synthetic 10W-30',
description:'Mobil Full Synthetic 10W-30 es un aceite de motor totalmente sintético diseñado para brindar una excelente protección contra el desgaste, la formación de depósitos y las altas temperaturas. Está formulado para motores de combustible gasolina.',
price:550,
category:'motor',
images:['56.jpeg']
},

{
id:39,
name:'Mobil Full Synthetic 0W-20 ',
description:'Mobil Full Synthetic 0W-20 es un aceite de motor totalmente sintético especialmente formulado para vehículos de combustible gasolina. s',
price:550,
category:'motor',
images:['57.jpeg']
},

{
id:40,
name:'Mobil Special Synthetic Blend 10W-30',
description:'Mobil Special Synthetic Blend 10W-30 es un aceite de motor de tecnología sintética semisintética (Synthetic Blend) especialmente formulado para vehículos de combustible gasolina.',
price:360,
category:'motor',
images:['58.jpeg']
},

{
id:41,
name:'Elf Multiplex 2 ',
description:'es una grasa lubricante de complejo de litio de alta calidad, especialmente formulada para la lubricación de rodamientos, chasis y componentes mecánicos sometidos a altas cargas y condiciones severas de trabajo. Es apta para equipos y vehículos de combustible gasolina y diésel',
price:250,
category:'motor',
images:['59.jpeg']
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

let stockHTML = '';

if(agotado){

stockHTML = `
<div class="agotado">
<span class="stock-badge">✖</span>
Producto agotado
</div>
`;

}else if(stock <= 5){

stockHTML = `
<div class="stock-bajo">
<span class="stock-badge">⚠</span>
Solo quedan ${stock} unidades
</div>
`;

}else{

stockHTML = `
<div class="stock-normal">
<span class="stock-badge">✓</span>
${stock} unidades disponibles
</div>
`;

}

container.innerHTML += `

<div class="card ${agotado ? 'disabled' : ''}">

<div class="card-img">
<img src="${product.images[0]}" alt="${product.name}">
</div>
<div class="card-content">

<h3>${product.name}</h3>

<div class="precio">
C$${product.price}
</div>

<div class="stock-label">
${stockHTML}
</div>

<button
onclick="abrirModal(${product.id})"
${agotado ? 'disabled' : ''}
>
Ver Producto
</button>

</div>
</div>

`;

});

}

/* OCULTAR CONTENIDO */
document.documentElement.style.overflow = 'hidden';

window.addEventListener('load', () => {

    const loader =
    document.getElementById('loaderScreen');

    const bar =
    document.getElementById('loaderBar');

    const text =
    document.getElementById('loaderText');

    const mensajes = [
        'Iniciando sistema...',
        'Cargando catálogo...',
        'Verificando inventario...',
        'Preparando tienda...',
        'Bienvenido a LUBRI EXPRES'
    ];

    let progreso = 0;
    let indice = 0;

    const intervalo = setInterval(() => {

        progreso += 20;

        bar.style.width =
        progreso + '%';

        if(indice < mensajes.length){

            text.textContent =
            mensajes[indice];

            indice++;

        }

        if(progreso >= 100){

            clearInterval(intervalo);

            setTimeout(() => {

                loader.style.transition =
                'opacity .8s ease';

                loader.style.opacity = '0';

                setTimeout(() => {

                    loader.remove();

                    document.documentElement.style.overflow =
                    'auto';

                },800);

            },500);

        }

    },500);

});


/* =========================
MODAL (BLOQUEA AGOTADOS)
========================= */

function abrirModal(id){

const product = products.find(
p => p.id === id
);

const stock =
inventario[product.name] || 0;

if(stock <= 0){

mostrarToast(
'Producto agotado',
'error'
);

return;

}

productoActual = product;
imagenActual = 0;

document.getElementById('modal').style.display = 'flex';

document.getElementById('modal-title').innerText =
product.name;

document.getElementById('modal-desc').innerText =
product.description;

document.getElementById('modal-price').innerText =
'C$' + product.price;

document.getElementById('modal-img').src =
product.images[0];

const stockBox =
document.getElementById('modal-stock');

if(stockBox){

if(stock <= 5){

stockBox.innerHTML = `
<div class="stock-bajo modal-alert">
<span class="stock-badge">⚠</span>
Alta demanda: solo quedan ${stock} unidades disponibles
</div>
`;

}else{

stockBox.innerHTML = `
<div class="stock-normal modal-alert">
<span class="stock-badge">✓</span>
${stock} unidades disponibles en inventario
</div>
`;

}

}

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
CARRITO (SIN DESCONTAR STOCK)
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

/* CARRITO */
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

/* SI YA EXISTE, SUMA CANTIDAD */
const existente = carrito.find(
p => p.name === productoActual.name
);

if(existente){

existente.cantidad =
(existente.cantidad || 1) + 1;

}else{

carrito.push({
...productoActual,
cantidad:1
});

}

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

/* =========================
CONTADOR
========================= */

function actualizarContador(){

let carrito =
JSON.parse(localStorage.getItem('carrito'))
|| [];

const totalProductos =
carrito.reduce(
(ac,p)=>ac + (p.cantidad || 1),
0
);

document.getElementById('cart-count')
.innerText = totalProductos;

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