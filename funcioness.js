const cambioDolar = 36.50;

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const container = document.getElementById('carrito');
const vacio = document.getElementById('vacio');
const totalBox = document.getElementById('total');

function alerta(tipo, titulo, mensaje, icono){

const box = document.getElementById('alertContainer');
if(!box) return;

const alert = document.createElement('div');

alert.className = `alert ${tipo}`;

alert.innerHTML = `
<i class="fa-solid ${icono}"></i>
<div>
<h4>${titulo}</h4>
<p>${mensaje}</p>
</div>
`;

box.appendChild(alert);

setTimeout(()=>{
alert.style.opacity='0';
alert.style.transform='translateX(120px)';
setTimeout(()=>alert.remove(),300);
},3200);

}

function guardarCarrito(){
localStorage.setItem('carrito', JSON.stringify(carrito));
}

/* =========================
TOTAL
========================= */
function obtenerTotal(){

return carrito.reduce((ac,p)=>{

const precioFinal = p.precioVenta ?? p.price;

return ac + (precioFinal * (p.cantidad || 1));

},0);

}

/* =========================
CAMBIAR PRECIO
========================= */
function cambiarPrecio(i, valor){

const nuevo = parseFloat(valor);

if(isNaN(nuevo) || nuevo <= 0) return;

carrito[i].precioVenta = nuevo;

guardarCarrito();
render();
}

/* =========================
RENDER CARRITO
========================= */
function render(){

if(!container) return;

container.innerHTML = '';

if(carrito.length === 0){

vacio.innerHTML = `
<div class="empty">
<i class="fa-solid fa-cart-shopping"></i>
<h2>Carrito vacío</h2>
<p>Agrega productos para comenzar una venta</p>
</div>
`;

document.getElementById('cantidad').innerText = '0';
document.getElementById('cart-count').innerText = '0';
totalBox.innerText = 'C$0.00';

calcularVuelto();
return;
}

vacio.innerHTML = '';

carrito.forEach((p,i)=>{

if(!p.cantidad) p.cantidad = 1;

const precioOriginal = p.price;
const precioVenta = p.precioVenta ?? p.price;

container.innerHTML += `
<div class="card">

<img src="${p.images?.[0] || 'no-image.png'}">

<div class="info">

<h3>${p.name}</h3>

<p>${p.description || ''}</p>

<div class="price">
Original: C$${precioOriginal.toFixed(2)}
</div>

<label>Precio de venta</label>
<input type="number"
value="${precioVenta}"
oninput="cambiarPrecio(${i}, this.value)">

<div class="price">
Subtotal: C$${(precioVenta * p.cantidad).toFixed(2)}
</div>

<div class="cantidad-box">
<button onclick="disminuir(${i})">-</button>
<span>${p.cantidad}</span>
<button onclick="aumentar(${i})">+</button>
</div>

</div>

<button class="delete" onclick="eliminar(${i})">
<i class="fa-solid fa-trash"></i>
</button>

</div>
`;
});

document.getElementById('cantidad').innerText =
carrito.reduce((ac,p)=>ac + (p.cantidad || 1),0);

document.getElementById('cart-count').innerText =
document.getElementById('cantidad').innerText;

totalBox.innerText = 'C$' + obtenerTotal().toFixed(2);

guardarCarrito();
calcularVuelto();
}

/* =========================
CANTIDAD
========================= */
function aumentar(i){
carrito[i].cantidad = (carrito[i].cantidad || 1) + 1;
guardarCarrito();
render();
}

function disminuir(i){
if((carrito[i].cantidad || 1) > 1){
carrito[i].cantidad--;
}else{
eliminar(i);
return;
}
guardarCarrito();
render();
}

function eliminar(i){
carrito.splice(i,1);
guardarCarrito();
render();
}

/* =========================
VUELTO
========================= */
function calcularVuelto(){

const recibido = parseFloat(document.getElementById('recibido')?.value) || 0;
const moneda = document.getElementById('moneda')?.value;

const total = obtenerTotal();

let vuelto = 0;

if(moneda === 'dolar'){
vuelto = (recibido * cambioDolar) - total;
}else{
vuelto = recibido - total;
}

const box = document.getElementById('vuelto');

if(box){
box.innerText = 'C$' + (vuelto >= 0 ? vuelto.toFixed(2) : '0.00');
box.style.color = vuelto < 0 ? '#ff4d4d' : '#00ff88';
}
}

/* =========================
FINALIZAR VENTA (CON IMAGEN)
========================= */
function finalizarVenta(){

if(carrito.length === 0){
alerta('error','Carrito vacío','Agrega productos','fa-cart-shopping');
return;
}

const vendedor = document.getElementById('vendedor').value;
const recibido = parseFloat(document.getElementById('recibido').value) || 0;
const moneda = document.getElementById('moneda').value;

const total = obtenerTotal();

const recibidoFinal =
moneda === 'dolar' ? recibido * cambioDolar : recibido;

if(recibidoFinal < total){
alerta('error','Dinero insuficiente','No cubre la venta','fa-money-bill');
return;
}

const vuelto = recibidoFinal - total;

/* INVENTARIO */
let inventario = JSON.parse(localStorage.getItem('inventario')) || {};

carrito.forEach(p=>{
if(inventario[p.name] != null){
inventario[p.name] =
Math.max(0, inventario[p.name] - (p.cantidad || 1));
}
});

localStorage.setItem('inventario', JSON.stringify(inventario));

/* VENTAS CON IMAGEN */
let ventas = JSON.parse(localStorage.getItem('ventas')) || [];

ventas.push({
fecha: new Date().toLocaleString(),
vendedor,

productos: carrito.map(p => ({
name: p.name,
images: p.images || [],   // 🔥 AQUÍ VA LA IMAGEN
precioOriginal: p.price,
precioVenta: p.precioVenta ?? p.price,
cantidad: p.cantidad || 1,
subtotal: (p.precioVenta ?? p.price) * (p.cantidad || 1)
})),

total: 'C$' + total.toFixed(2),
recibido: recibidoFinal,
vuelto: 'C$' + vuelto.toFixed(2)
});

localStorage.setItem('ventas', JSON.stringify(ventas));

localStorage.removeItem('carrito');
carrito = [];

render();

alerta('success','Venta realizada','Guardada correctamente','fa-circle-check');

setTimeout(()=>{
window.location.href = 'registro.html';
},1200);

}

render();