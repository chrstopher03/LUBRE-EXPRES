/* =========================
PRODUCTOS
========================= */

const productos = [

{
name:'Mobil Parmazone',
image:['6.jpeg']
},

{
name:'Mobil Heavy Duty',
image:['7.jpeg']
},

{
name:'Mobil ATF D/M',
image:['8.jpeg','10.jpeg']
},

{
name:'American Automatic transmission',
image:['11.jpeg']
},


{
name:'Mobil Delvac Extreme CK-4 15W-40 ',
image:['12.jpeg','13.jpeg']
},


{
name:'WorldWide Lubricants Universal SAE 5',
image:['14.jpeg']
},

{
name:'Mobil Super Moto 4T 20W-50 ',
image:['15.jpeg']
},

{
name:'Chevron Havoline 4T SAE 20W-50',
image:['16.jpeg']
},

{
name:'Tec Service Power Steering Fluid',
image:['17.jpeg']
},

{
name:'Chevron Havoline 2-Cycle Engine Oil TC-W3 ',
image:['18.jpeg']
},


{
name:'AAuto Super Heavy Duty Power Brake DOT3',
image:['19.jpeg']
},

{
name:'Auto Super Heavy Duty Power Brake DOT3 Rojo',
image:['20.jpeg']
},

{
name:'Mobil Delvac 1300 Super SAE 10W-30',
image:['21.jpeg']
},

{
name:'Mobil Delvac 1300 Super SAE 15W-40 ',
image:['22.jpeg']
},
{
name:'Mobil Delvac MX F2 SAE 15W-40 ',
image:['23.jpeg']
},
{
name:'Mobil Special 20W-50 - Aceite para motor',
image:['24.jpeg']
},
{
name:'Mobil Delvac 1300 Super 15W-40.',
image:['25.jpeg']
},
{

name:'Movil delvac 15W-40',
image:['26.jpeg']
},
{
name:'Mobilube HD Plus Gear Oil 85W-140',
image:['27.jpeg']
},
{
name:'Mobilube HD Plus Gear Oil 85W-140.',
image:['28.jpeg']
},
{
name:'Mobilube HD Plus Gear Oil 80W-90',
image:['29.jpeg']
},


{
name:'Aceite para Moto Bajaj DTS-i 20W50',
image:['38.jpeg']
},



{
name:'Aceite para Motor 4T 20W-50 – Motul 3000',
image:['39.jpeg']
},


{
name:'Aceite Raloy 4T Moto Mineral SAE 20W-50 – 1L',
image:['40.jpeg']
},

{
name:'Refrigerante Ebullient Red Coolant Antifreeze',
image:['41.jpeg']
},

{
name:'HS Windshield Washer Fluid & Bug Remover 2-in-1',
image:['42.jpeg']
},


{
name:'HS Heavy Duty Purple Blaster',
image:['43.jpeg']
},


{
name:'HS Heavy Duty Purple Blaster-Atomizador',
image:['44.jpeg']
},

{
name:'AUTO Coolant Refrigerante Verde',
image:['45.jpeg']
},

{
name:'Shell Advance AX5 20W-50 4T',
image:['46.jpeg']
},


{
name:'Shell Advance AX5 20W-50 4T',
image:['47.jpeg']
},


{
name:'aceite de motor Golden Oil Aceite Mineral SAE 20W-50 API SN (1 litro).',
image:['48.jpeg']
},



{
name:'Hyundai XTeer G800 SP 5W-30 Full Synthetic.',
image:['49.jpeg']
},

{
name:'Hyundai XTeer G800 SP 0W-20.',
image:['50.jpeg']
},

{
name:'Hyundai XTeer HD7000 CI-4 15W-40',
image:['51.jpeg']
},

{
name:'Hyundai XTeer D500 CI-4 10W-30 ',
image:['52.jpeg']
},

{
name:'ELF Performance Pro 700 15W-40',
image:['53.jpeg']
},

{
name:'ELF Performance Pro 700I 15W-40 (1 Litro)',
image:['54.jpeg']
},

{
name:'Mobil Super Synthetic 5W-30 Full Synthetic Motor Oil',
image:['55.jpeg']
},

{
name:'Mobil Full Synthetic 10W-30',
image:['56.jpeg']
},

{
name:'Mobil Full Synthetic 0W-20 ',
image:['57.jpeg']
},

{
name:'Mobil Special Synthetic Blend 10W-30',
image:['58.jpeg']
},

{
name:'Elf Multiplex 2 ',
image:['59.jpeg']
},

{
name:'Mobil Delvac Legend 20W-50 High Mileage',
image:['31.jpeg']
},
{
name:'Valvoline All-Fleet Legacy SAE 15W-40 API CI-4/SL',
image:['32.jpeg']
},
{
name:'Mobil Delvac 1300 Super SAE 15W-40',
image:['33.jpeg']
},
{
name:'Chevron Ursa Premium TDX SAE 15W-40 API CI-4/SL',
image:['34.jpeg']
},
{
name:'Chevron Ursa HD AK SAE 25W-50 API CF-4',
image:['35.jpeg']
},

{
name:'PUMA Lubricants HD Super SAE 25W-60',
image:['36.jpeg']
},
{
name:'Super S FG-1000 Heavy Duty SAE 10W',
image:['37.jpeg']
},





];

/* =========================
INVENTARIO
========================= */

let inventario =
JSON.parse(localStorage.getItem('inventario'));

if(!inventario){

inventario = {

'Mobil Special 20W-50':10,
'Aceite de motor Mobil Special 20W-50':8,
'Mobil Delvac 1300 Super 10W-30':6,
'WD-40':5

};

localStorage.setItem(
'inventario',
JSON.stringify(inventario)
);

}

/* =========================
VENTAS
========================= */

let ventas =
JSON.parse(localStorage.getItem('ventas'))
|| [];

const tabla =
document.getElementById('tablaVentas');

/* =========================
SONIDOS
========================= */

const sonidos = {

success:new Audio(
'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=correct-2-46134.mp3'
),

error:new Audio(
'https://cdn.pixabay.com/download/audio/2022/03/10/audio_c6ccf26616.mp3?filename=error-126627.mp3'
),

warning:new Audio(
'https://cdn.pixabay.com/download/audio/2022/03/15/audio_5d1b5c5f6f.mp3?filename=warning-notification-2-6838.mp3'
)

};

Object.values(sonidos).forEach(s=>{

s.volume = 0.2;

});

/* =========================
ALERTAS PREMIUM
========================= */

function alerta(
titulo,
mensaje,
tipo='info'
){

const container =
document.getElementById('alertContainer');

let icono =
'fa-circle-info';

if(tipo === 'success'){
icono = 'fa-circle-check';
}

if(tipo === 'error'){
icono = 'fa-circle-xmark';
}

if(tipo === 'warning'){
icono = 'fa-triangle-exclamation';
}

const alert =
document.createElement('div');

alert.className =
`alert ${tipo}`;

alert.innerHTML = `

<div class="alert-icon">

<i class="fa-solid ${icono}"></i>

</div>

<div class="alert-content">

<h4>${titulo}</h4>

<p>${mensaje}</p>

</div>

<button class="alert-close">

<i class="fa-solid fa-xmark"></i>

</button>

<div class="alert-progress"></div>

`;

container.appendChild(alert);

/* SONIDO */

if(sonidos[tipo]){

sonidos[tipo]
.currentTime = 0;

sonidos[tipo]
.play()
.catch(()=>{});

}

/* REMOVER */

const removeAlert = ()=>{

alert.style.animation =
'alertHide .35s ease forwards';

setTimeout(()=>{

alert.remove();

},300);

};

alert.querySelector('.alert-close')
.onclick = removeAlert;

setTimeout(removeAlert,3500);

}
/* =========================
INVENTARIO
========================= */

function renderInventario(){

const box = document.getElementById('inventarioBox');

box.innerHTML = '';

let bajos = 0;

productos.forEach(p=>{

const stock = inventario[p.name] || 0;

// 🔥 SOLO VISUAL, NO BLOQUEA
const agotado = stock === 0;

let clase = 'green';

if (stock <= 0) {
  clase = 'red';
} else if (stock <= 2) {
  clase = 'red';
  bajos++;
} else if (stock <= 5) {
  clase = 'orange';
  bajos++;
}

box.innerHTML += `

<div class="stock-card">

<img src="${p.image}">

<div class="stock-top">

<h3>${p.name}</h3>

<div class="stock ${clase}">
${agotado ? 'AGOTADO' : stock + ' unidades'}
</div>

</div>

<div class="stock-actions">

<input
type="number"
min="1"
id="stock-${p.name}"
placeholder="Cantidad"
/>

<button onclick="agregarStock('${p.name}')">

<i class="fa-solid fa-plus"></i>

</button>

</div>

</div>

`;

});

document.getElementById('productosBajos').innerText = bajos;

}

/* =========================
AGREGAR STOCK
========================= */

function agregarStock(nombre){

const input = document.getElementById(`stock-${nombre}`);

const cantidad = Number(input.value);

// 🔥 VALIDACIÓN
if (!cantidad || cantidad <= 0){

alerta(
'Cantidad inválida',
'Ingresa una cantidad válida',
'error'
);

return;

}

// 🔥 SUMA STOCK
inventario[nombre] = (inventario[nombre] || 0) + cantidad;

// 🔥 GUARDAR
localStorage.setItem('inventario', JSON.stringify(inventario));

input.value = '';
productos.forEach(p=>{

    if(inventario[p.name] === undefined){
        inventario[p.name] = 0;
    }

});

localStorage.setItem(
'inventario',
JSON.stringify(inventario)
);
renderInventario();

alerta(
'Inventario actualizado',
`Se agregaron ${cantidad} unidades`,
'success'
);

}
/* =========================
RENDER VENTAS (ACTUALIZADO)
========================= */

function renderVentas(lista = ventas){

tabla.innerHTML = '';

let totalDia = 0;
let vendidos = 0;

const copia = [...lista].reverse();

if(copia.length === 0){

tabla.innerHTML = `
<tr>
<td colspan="7"
style="text-align:center;padding:35px;color:#999;">
<i class="fa-solid fa-box-open"
style="font-size:38px;display:block;margin-bottom:10px;color:#444;"></i>
No hay ventas registradas
</td>
</tr>
`;
return;
}

copia.forEach((v)=>{

const productosHTML = v.productos.map(p=>{

const precioOriginal = p.precioOriginal ?? p.price ?? 0;
const precioVenta = p.precioVenta ?? precioOriginal;
const cantidad = p.cantidad ?? 1;
const subtotal = p.subtotal ?? (precioVenta * cantidad);

return `
<div class="product">
<img src="${p.images?.[0] || ''}">
<div>

<b>${p.nombre || p.name}</b>

<div style="font-size:12px;color:#999;">
Cantidad: ${cantidad} <br>
Original: C$${precioOriginal.toFixed(2)} <br>
Venta: C$${precioVenta.toFixed(2)} <br>
Subtotal: C$${subtotal.toFixed(2)}
</div>

</div>
</div>
`;

}).join('');

tabla.innerHTML += `
<tr>

<td>
<div class="fecha">${v.fecha}</div>
</td>

<td>
<div class="vendedor">
<i class="fa-solid fa-user"></i>
${v.vendedor}
</div>
</td>

<td>
${productosHTML}
</td>

<td>
<div class="total">${v.total}</div>
</td>

<td>
<div class="badge ${v.moneda === 'dolar' ? 'dollar' : 'cash'}">
${v.moneda || 'cordoba'}
</div>
</td>

<td>${v.vuelto}</td>

<td>
<button class="delete-btn" onclick="eliminarVenta(${ventas.indexOf(v)})">
<i class="fa-solid fa-trash"></i>
</button>
</td>

</tr>
`;
totalDia += Number(v.total.replace('C$','') || 0);

vendidos += v.productos.reduce(
    (total, p) => total + Number(p.cantidad || 1),
    0
);
});

document.getElementById('ventasDia').innerText = 'C$' + totalDia.toFixed(2);
document.getElementById('corteCaja').innerText = 'C$' + totalDia.toFixed(2);
document.getElementById('ventasHoy').innerText = lista.length;
document.getElementById('totalVentas').innerText = ventas.length;
document.getElementById('productosVendidos').innerText = vendidos;

crearGrafica(lista);
}function filtrarVentas(){

const fecha =
document.getElementById('fechaFiltro').value;

const vendedor =
document.getElementById('vendedorFiltro').value;

const filtradas = ventas.filter(v=>{

let coincideFecha = true;
let coincideVendedor = true;

/* FILTRO FECHA */
if(fecha){

const fechaVenta = new Date(v.fecha);

if(!isNaN(fechaVenta)){

const año = fechaVenta.getFullYear();

const mes = String(
fechaVenta.getMonth() + 1
).padStart(2,'0');

const dia = String(
fechaVenta.getDate()
).padStart(2,'0');

const fechaFormateada =
`${año}-${mes}-${dia}`;

coincideFecha =
fechaFormateada === fecha;

}else{

coincideFecha = false;

}

}

/* FILTRO VENDEDOR */
if(vendedor){

coincideVendedor =
v.vendedor === vendedor;

}

return coincideFecha &&
coincideVendedor;

});

renderVentas(filtradas);

alerta(
'Filtro aplicado',
`${filtradas.length} ventas encontradas`,
'success'
);

}
/* =========================
ELIMINAR VENTA
========================= */

function eliminarVenta(index){

const confirmar =
confirm(
'¿Eliminar esta venta?'
);

if(!confirmar){
return;
}

ventas.splice(index,1);

localStorage.setItem(
'ventas',
JSON.stringify(ventas)
);

renderVentas();

alerta(
'Venta eliminada',
'La venta fue eliminada',
'warning'
);

}

/* =========================
BORRAR TODO
========================= */

function borrarTodasVentas(){

const confirmar =
confirm(
'¿Borrar TODAS las ventas?'
);

if(!confirmar){
return;
}

localStorage.removeItem('ventas');

ventas = [];

renderVentas();

alerta(
'Historial eliminado',
'Todas las ventas fueron eliminadas',
'error'
);

}

/* =========================
GRAFICA
========================= */

let grafica;

function crearGrafica(lista){

const dias = [];
const totales = [];

lista.forEach(v=>{

dias.push(
v.fecha.split(',')[0]
);

totales.push(
Number(
v.total.replace('C$','')
)
);

});

if(grafica){
grafica.destroy();
}

grafica =
new Chart(
document.getElementById('grafica'),
{

type:'bar',

data:{

labels:dias,

datasets:[{

label:'Ventas',

data:totales,

backgroundColor:'#f7c600',

hoverBackgroundColor:'#ffd93d',

borderRadius:14,

borderSkipped:false

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

},

animation:{
duration:1200
},

scales:{

y:{

ticks:{
color:'#999'
},

grid:{
color:'rgba(255,255,255,.05)'
}

},

x:{

ticks:{
color:'#999'
},

grid:{
display:false
}

}

}

}

}

);

}

/* =========================
INICIAR
========================= */

renderVentas();
renderInventario();

alerta(
'Sistema iniciado',
'Registro de ventas cargado correctamente',
'success'
);

