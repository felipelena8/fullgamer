const id = parseInt(new URL(window.location.href).searchParams.get('prodID'))
console.log(id)
const elementoHtml = document.getElementById('detallesProducto')
const productoBuscado = buscarProducto(id, productos)
elementoHtml.innerHTML = `
    <img src="${productoBuscado.imagen}" alt="" srcset="" class="imagenDetalle">
            <div class='infoProducto  col-4'>
                <h1 class="titleProd">${productoBuscado.nombre}</h1>
                <h3 class='descProd'>${productoBuscado.descripcion}</h3>
                <h3 class='precioProd'>$${productoBuscado.precio}</h3>
                <button class="btn btn-primary itemBtn" onclick="carro.agregar(${id})">Añadir al carrito</button>
            </div>
`