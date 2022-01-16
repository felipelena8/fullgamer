const id = parseInt(new URL(window.location.href).searchParams.get('prodID'))
console.log(id)
const elementoHtml = document.getElementById('detallesProducto')
const productoBuscado = buscarProducto(id, productos)
elementoHtml.innerHTML = `
<div class='imagenDetalle'>
<img src="${productoBuscado.imagen}" class='imageDetail' alt="" srcset="">
</div>
<div class=' infoProducto'>
<h1 class="titleProd">${productoBuscado.nombre}</h1>
<h3 class='descProd '>${productoBuscado.descripcion}</h3>
<h3 class='precioProd '>Precio Efectivo <br>$${productoBuscado.precio}</h3>
<button class="btn btn-primary itemBtn" onclick="carro.agregar(${id})">Añadir al carrito</button>
<button class="btn btn-primary itemBtn" onclick="">Comprar</button>
</div>
`