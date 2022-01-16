class Producto {
    constructor(id, nombre, descripcion, precio, imagen, categoria) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.imagen = imagen
        this.categoria = categoria
    }
}
class Carrito {
    constructor() {
        this.precio = 0
        this.cantidad = 0
        this.elementos = []
        this.cantidadPorElemento = []
    }
    agregar(id) {
        let producto = buscarProducto(id, productos)
        let indice = this.elementos.indexOf(producto)
        if (indice == -1) {
            this.elementos.push(producto)
            this.cantidad += 1
            this.cantidadPorElemento.push(1)
        } else {
            this.cantidadPorElemento[indice] += 1
        }
        this.precio += producto.precio
        this.actualizarIndicador()
        this.actualizarLista()

    }
    eliminar(id) {
        let producto = buscarProducto(id, productos)
        let indiceElemento = this.elementos.indexOf(producto)
        let cantProducto = this.cantidadPorElemento[indiceElemento]
        this.precio -= producto.precio * cantProducto
        this.cantidadPorElemento.splice(indiceElemento, 1)

        this.elementos.splice(indiceElemento, 1)
        this.cantidad -= 1
        this.actualizarLista()
        this.actualizarIndicador()
    }
    vaciar() {
        this.precio = 0
        this.cantidad = 0
        this.elementos = []
        this.actualizarLista()
        this.actualizarIndicador()
    }
    cantElementos(producto) {
        return this.cantidadPorElemento[this.elementos.indexOf(producto)]
    }
    actualizarIndicador() {
        let elementoHtml = document.getElementById('indicadorCarrito')
        elementoHtml.innerHTML = `<p>${this.cantidad}</p>`
    }
    actualizarLista() {
        var ids = {}
        let htmlElement = document.getElementById('contenedorCartCards')
        var elementosLista = ""
        htmlElement.innerHTML = ``
        if (this.cantidad != 0) {
            this.elementos.map(producto => {
                elementosLista += `
                <div id="cardCarrito">
                    <div class = 'contImagenCart'>
                    <img src="${producto.imagen}" alt="" class="imagenCart">
                    </div>
                    <div class="cartInfo">
                        <h4 class='titleCart'>${producto.nombre}</h4>
                        <p class="itemCostCart">$${producto.precio}</p>
                        <p class = "my-0 ">Cantidad: ${this.cantElementos(producto)} <a onclick="carro.eliminar(${producto.id})">Eliminar</a></p>
                        
                    </div>
                </div>
            `
            })
            let listaProductos = document.getElementById('listadoProductos')
            listaProductos.innerHTML = `<div class="d-flex" id="contenedorCartCards">
            ${elementosLista}
        </div>
        <div class="footerCart">
            <p id="total" class="text-center">Total: $${this.precio}</p>
            <div class = "justify-content-center w-100 d-flex containerBoton">
            <button class="btn btn-primary itemBtn col-5">Finalizar compra</button>
            <button class="btn btn-primary itemBtn col-5" onclick = "carro.vaciar()">Vaciar carrito</button>
            </div>
            
        </div><div class="d-none">No hay elementos</div>`
        } else {
            let listaProductos = document.getElementById('listadoProductos')
            listaProductos.innerHTML = `<div class="d-flex" id="contenedorCartCards">
            </div>
            <div class="d-block">No hay elementos</div>`
        }
    }

}

productos = [new Producto(1, "Auriculares HyperX Cloud II", 'Auriculares HyperX Cloud II Red PC | PS4 | Switch | XBOX', 11200, 'images/productos/auriculares.jpg', 'perifericos'),
    new Producto(2, "Teclado Redragon K550 Yama", 'Redragon K550 YAMA Black Mechanical Retroiluminado RGB Español', 7250, 'images/productos/Teclado-Mecanico-Redragon-YAMA-K550.jpg', 'perifericos'),
    new Producto(3, 'Teclado logitech G213', "Logitech G213 Prodigy RGB Gaming Español", 6700, 'images/productos/teclado 2.jpg', 'perifericos'),
    new Producto(4, 'Procesador Intel Core I7 9700F', "Procesador I7 9700F 4.7ghz", 35000, 'images/productos/i7.jpg', 'procesadores'),
    new Producto(5, 'AMD PC AMD ATHLON 3000G', "Procesador I7 9700F 4.7ghz", 35000, 'images/productos/pc amd.jpg', 'computadoras'),
    new Producto(6, 'PC ASUS ATHLON 3000G', '2X4GB - SSD 240GB - KIT', 40000, 'images/productos/pc asus.jpg', 'computadoras'),
    new Producto(7, 'Mouse Glorious Model D', 'Mouse ultra ligero 16000 DPI', 7000, 'images/productos/mouse.jpg', 'perifericos'),
    new Producto(8, 'Placa de video NVIDIA MSI RTX 3070', 'Placa RTX 3070 GAMER', 300000, 'images/productos/3070.jpg', 'placas'),
    new Producto(9, 'Asus fuente Alimentacion 650W', 'Asus Fuente 650B SWISS + 650W 80 PLUS BRONCE', 18000, 'images/productos/fuente.jpg', 'fuentes'),
    new Producto(10, 'PC INTEL I7 11700+H510+8GB+1TB', 'PC GAMER I7 8GB RAM', 80000, 'images/productos/pc-intel-i7.jpg', 'computadoras'),
    new Producto(11, 'Teclado Logitech G213 Prodigy RGB Gaming Inglés Internacional', 'Teclado logitech G213 RGB Semi-Mecanico', 4500, 'images/productos/teclado.jpg', 'perifericos')
]

function buscarProducto(id, prods) {
    for (let i = 0; i < prods.length; i++) {
        if (id == prods[i].id) {
            return prods[i]
        }
    }
}

function detalles(id) {

    window.location.href = `prod.html?prodID=${id}`;

}
carro = new Carrito()

function injectProductos(productos, categoria) {
    let htmlProd = document.getElementById(categoria)
    if (htmlProd) {
        productos.map(prod => {
            htmlElement = `
                    <div class="item m-2" data-aos="zoom-in-right"><img src="${prod.imagen}" alt="Auriculares HyperX" class="itemImg"  onclick = 'detalles(${prod.id})'>
                    <div class="itemBody">
                        <h4 class="itemTitle m-0">${prod.nombre}</h4>
                        <p class="itemText m-0">${prod.descripcion}</p>
                        <h2 class="itemCost mt-1">$${prod.precio}</h2>
                        <button class="btn btn-primary itemBtn" onclick = "carro.agregar(${prod.id})">Añadir al carrito</button>
                    </div>
                </div>
                    `;
            if (categoria == prod.categoria) {
                htmlProd.innerHTML += htmlElement

            } else if ('productos' == categoria) {
                htmlProd.innerHTML += htmlElement
            }
        })
    }
}

injectProductos(productos, 'productos');
injectProductos(productos, 'perifericos');
injectProductos(productos, 'computadoras');

carro = new Carrito()