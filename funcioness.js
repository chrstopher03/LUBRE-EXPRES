/* CONFIG */

const cambioDolar = 36.50;

/* STORAGE */

let carrito =
JSON.parse(
localStorage.getItem('carrito')
) || [];

const container =
document.getElementById('carrito');

const vacio =
document.getElementById('vacio');

const totalBox =
document.getElementById('total');

/* ALERTAS */

function alerta(
tipo,
titulo,
mensaje,
icono
){

const box =
document.getElementById(
'alertContainer'
);

const alert =
document.createElement('div');

alert.className =
`alert ${tipo}`;

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

alert.style.transform=
'translateX(120px)';

setTimeout(()=>{

alert.remove();

},300);

},3200);

}

/* RENDER */

function render(){

container.innerHTML='';

if(carrito.length === 0){

vacio.innerHTML = `

<div class="empty">

<i class="fa-solid fa-cart-shopping"></i>

<h2>
Carrito vacío
</h2>

<p>
Agrega productos para comenzar una venta
</p>

</div>

`;

document.getElementById('cantidad')
.innerText='0';

document.getElementById('cart-count')
.innerText='0';

totalBox.innerText='C$0.00';

calcularVuelto();

return;

}

vacio.innerHTML='';

let total = 0;

carrito.forEach((p,i)=>{

if(!p.cantidad){
p.cantidad = 1;
}

total += p.price * p.cantidad;

container.innerHTML += `

<div class="card">

<img src="${p.images[0]}">

<div class="info">

<h3>${p.name}</h3>

<p>${p.description}</p>

<div class="price">

C$${(p.price * p.cantidad).toFixed(2)}

</div>

<div class="cantidad-box">

<button onclick="disminuir(${i})">
-
</button>

<span>
${p.cantidad}
</span>

<button onclick="aumentar(${i})">
+
</button>

</div>

</div>

<button
class="delete"
onclick="eliminar(${i})"

>

<i class="fa-solid fa-trash"></i>

</button>

</div>

`;

});

const totalProductos =
carrito.reduce(
(ac,p)=>
ac + (p.cantidad || 1),
0
);

document.getElementById('cantidad')
.innerText =
totalProductos;

document.getElementById('cart-count')
.innerText =
totalProductos;

totalBox.innerText =
'C$' + total.toFixed(2);

localStorage.setItem(
'carrito',
JSON.stringify(carrito)
);

calcularVuelto();

}

/* AUMENTAR */

function aumentar(i){

if(!carrito[i].cantidad){
carrito[i].cantidad = 1;
}

carrito[i].cantidad++;

localStorage.setItem(
'carrito',
JSON.stringify(carrito)
);

render();

}

/* DISMINUIR */

function disminuir(i){

if(!carrito[i].cantidad){
carrito[i].cantidad = 1;
}

if(carrito[i].cantidad > 1){

carrito[i].cantidad--;

}else{

eliminar(i);
return;

}

localStorage.setItem(
'carrito',
JSON.stringify(carrito)
);

render();

}

/* ELIMINAR */

function eliminar(i){

const producto =
carrito[i];

carrito.splice(i,1);

localStorage.setItem(
'carrito',
JSON.stringify(carrito)
);

render();

alerta(
'warning',
'Producto eliminado',
producto.name + ' eliminado',
'fa-trash'
);

}

/* VUELTO */

function calcularVuelto(){

const recibido =
Number(
document.getElementById(
'recibido'
).value
);

const moneda =
document.getElementById(
'moneda'
).value;

const total =
carrito.reduce(
(a,b)=>
a + (b.price * (b.cantidad || 1)),
0
);

let vuelto = 0;

const conversion =
document.getElementById(
'conversion'
);

if(moneda === 'dolar'){

const convertido =
recibido * cambioDolar;

vuelto =
convertido - total;

conversion.style.display =
'block';

conversion.innerHTML = `

# US$${recibido.toFixed(2)}

C$${convertido.toFixed(2)}

`;

}else{

vuelto =
recibido - total;

conversion.style.display =
'none';

}

document.getElementById('vuelto')
.innerText =
'C$' +
(vuelto > 0
? vuelto.toFixed(2)
: '0.00');

if(vuelto < 0){

document.getElementById('vuelto')
.style.color='#ff4d4d';

}else{

document.getElementById('vuelto')
.style.color='#00ff88';

}

}

/* FINALIZAR */

function finalizarVenta(){

if(carrito.length === 0){

alerta(
'error',
'Carrito vacío',
'Agrega productos antes de vender',
'fa-cart-shopping'
);

return;

}

const vendedor =
document.getElementById(
'vendedor'
).value;

const recibido =
Number(
document.getElementById(
'recibido'
).value
);

const moneda =
document.getElementById(
'moneda'
).value;

const total =
carrito.reduce(
(a,b)=>
a + (b.price * (b.cantidad || 1)),
0
);

let recibidoFinal =
moneda === 'dolar'
? recibido * cambioDolar
: recibido;

if(recibidoFinal < total){

alerta(
'error',
'Dinero insuficiente',
'El monto recibido no cubre la venta',
'fa-money-bill'
);

return;

}

const vuelto =
recibidoFinal - total;

/* INVENTARIO */

let inventario =
JSON.parse(
localStorage.getItem(
'inventario'
)
) || {};

carrito.forEach(producto=>{

if(
inventario[producto.name]
!= null
){

inventario[producto.name] -=
(producto.cantidad || 1);

}

});

localStorage.setItem(
'inventario',
JSON.stringify(inventario)
);

/* VENTAS */

let ventas =
JSON.parse(
localStorage.getItem(
'ventas'
)
) || [];

ventas.push({

fecha:
new Date()
.toLocaleString(),

vendedor,

productos:carrito,

moneda,

total:
'C$' + total.toFixed(2),

recibido:
moneda === 'dolar'
? '$' + recibido.toFixed(2)
: 'C$' + recibido.toFixed(2),

vuelto:
'C$' + vuelto.toFixed(2)

});

localStorage.setItem(
'ventas',
JSON.stringify(ventas)
);

/* LIMPIAR */

localStorage.removeItem('carrito');

alerta(
'success',
'Venta realizada',
'La venta fue registrada',
'fa-circle-check'
);

setTimeout(()=>{

window.location.href =
'registro.html';

},1600);

}

/* START */

render();
