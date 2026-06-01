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
name:'Mobil Special 20W-50',
description:'Lubricante premium para motores de alto rendimiento.',
price:25,
category:'motor',
images:['30.jpeg']
},

{
id:2,
name:'Aceite de motor Mobil Special 20W-50',
description:'Ideal para maquinaria industrial pesada.',
price:18,
category:'grasa',
images:['01.jpeg']
},

{
id:3,
name:'Mobil Delvac 1300 Super 10W-30',
description:'Máxima protección hidráulica profesional.',
price:30,
category:'hidraulico',
images:['75.jpeg']
},

{
id:4,
name:'WD-40',
description:'Aceite sintético premium de larga duración.',
price:35,
category:'motor',
images:['09.jpeg']
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
INSTALAR APP REAL
========================= */

let deferredPrompt;

const installBtn =
document.getElementById('installBtn');

window.addEventListener(
'beforeinstallprompt',
(e)=>{

e.preventDefault();

deferredPrompt = e;

/* MOSTRAR BOTON */

installBtn.style.display =
'inline-block';

console.log(
'PWA lista para instalar'
);

}
);

/* INSTALAR */

async function instalarApp(){

if(!deferredPrompt){

alert(
'La instalación no está disponible todavía'
);

return;

}

deferredPrompt.prompt();

const choiceResult =
await deferredPrompt.userChoice;

if(choiceResult.outcome ===
'accepted'){

alert(
'Aplicación instalada correctamente'
);

installBtn.style.display =
'none';

}else{

alert(
'Instalación cancelada'
);

}

deferredPrompt = null;

}

/* APP INSTALADA */

window.addEventListener(
'appinstalled',
()=>{

console.log(
'Aplicación instalada'
);

installBtn.style.display =
'none';

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

})

.catch(error=>{

console.log(
'Error Service Worker:',
error
);

});

});

}