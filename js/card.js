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

productos = [new Producto(1, "Auriculares HyperX Cloud II", 'Auriculares HyperX Cloud II Red PC | PS4 | Switch | XBOX', 11200, 'images/productos/auriculares.jpg', ['perifericos', 'auriculares']),
        new Producto(2, "Teclado Redragon K550 Yama", 'Redragon K550 YAMA Black Mechanical Retroiluminado RGB Español', 7250, 'images/productos/Teclado-Mecanico-Redragon-YAMA-K550.jpg', ['perifericos', 'teclados']),
        new Producto(4, 'Procesador Intel Core I7 9700F', "Procesador I7 9700F 4.7ghz", 35000, 'images/productos/i7.jpg', ['procesadores']),
        new Producto(26, 'GABINETE AUREOX GAMER ORION 350G TEMPLADO RGB ATX', '', 6000, 'images/productos/gabinete aureox.jpg', ['gabinetes']),
        new Producto(28, 'Discos Solido SSD M.2 ADATA 512GB FALCON 3100MB/s', '', 7800, 'images/productos/ssd falcon.jpg', ['almacenamiento']),
        new Producto(5, 'AMD PC AMD ATHLON 3000G', "Procesador I7 9700F 4.7ghz", 35000, 'images/productos/pc amd.jpg', ['computadoras', 'amd']),
        new Producto(7, 'Mouse Glorious Model D', 'Mouse ultra ligero 16000 DPI', 7000, 'images/productos/mouse.jpg', ['perifericos', 'mouses']),
        new Producto(8, 'Placa de video NVIDIA MSI RTX 3070', 'Placa RTX 3070 GAMER', 300000, 'images/productos/3070.jpg', ['placas de video']),
        new Producto(9, 'Asus fuente Alimentacion 650W', 'Asus Fuente 650B SWISS + 650W 80 PLUS BRONCE', 18000, 'images/productos/fuente.jpg', ['fuentes']),
        new Producto(6, 'PC ASUS ATHLON 3000G', '2X4GB - SSD 240GB - KIT', 40000, 'images/productos/pc asus.jpg', ['computadoras', 'amd']),
        new Producto(11, 'Teclado Logitech G213 Prodigy RGB Gaming Inglés Internacional', 'Teclado logitech G213 RGB Semi-Mecanico', 4500, 'images/productos/teclado.jpg', ['perifericos', 'teclados']),
        new Producto(16, 'Monitor LG 27 GAMER 27GL650F FULL HD 144HZ', 'Monitor 144hz 1ms de respuesta', 55000, 'images/productos/monitor lg 144hz.jpg', ['monitores']),
        new Producto(12, 'PC INTEL G4930+4GB+240GB SSD', 'PC intel g4930, Memoria 4GB DDR4 2666MHZ', 35000, 'images/productos/pc intel 2.jpg', ['computadoras', 'intel']),
        new Producto(10, 'PC INTEL I7 11700+H510+8GB+1TB', 'PC GAMER I7 8GB RAM', 80000, 'images/productos/pc-intel-i7.jpg', ['computadoras', 'intel']),
        new Producto(20, 'MOUSE PAD HYPERX FURY S PRO SPEED EDITION XL', '', 3400, 'images/productos/mousepadXLHYPERX.jpg', ['mousepads', 'perifericos']),
        new Producto(13, 'Auriculares Hyperx Cloud Flight Wireless', 'Auriculares inalambricos. Duracion de 30 horas', 13300, 'images/productos/hyperx flight.jpg', ['auriculares', 'perifericos']),
        new Producto(15, 'Monitor LG LED 22MN430H-B HDMI', '', 24000, 'images/productos/monitor lg.jpg', ['monitores']),
        new Producto(14, 'Auriculares Logitech G935', 'Auriculares inalambricos. Duracion de bateria 12 horas', 23000, 'images/productos/aurisLogitech.jpg', ['auriculares', 'perifericos']),
        new Producto(17, 'Monitor 24 Gigabyte G24F gaming IPS 165HZ HDMI', '', 49000, 'images/productos/monitor gigabyte 165.jpg', ['monitores']),
        new Producto(25, 'GABINETE V200 TG THERMALTAKE C/FUENTE 500W AMD EDITION', '', 8300, 'images/productos/gabinete.jpg', ['gabinetes']),
        new Producto(18, 'Microfono Hyperx Quadcast S RGB', '', 16000, 'images/productos/microfono-hyperx.jpg', ['microfonos', 'perifericos']),
        new Producto(3, 'TECLADO MECÁNICO CON RETROILUMINACIÓN G413 PARA GAMING', "Logitech G413 Gaming Español", 6700, 'images/productos/teclado 2.jpg', ['perifericos', 'teclados']),
        new Producto(19, 'Microfono Trust Fyru 4IN1 Streaming Mic GXT258 USB RGB', '', 10200, 'images/productos/microfono-trust.jpg', ['microfonos', 'perifericos']),
        new Producto(22, 'TECLADO Y MOUSE GAMER TRUST AZOR GXT838 ESPAÑOL GXT 838', '', 2300, 'images/productos/tecladoymouse.jpg', ['perifericos', 'kit de mouse y teclado']),
        new Producto(21, 'MOUSEPAD TRUST GXT 758 XXL GXT758', '', 2500, 'images/productos/mousepadTrust.jpg', ['mousepads', 'perifericos']),
        new Producto(23, 'TECLADO Y MOUSE CORSAIR K55 + HARPOON RGB', '', 8000, 'images/productos/teclado-y-mouse-corsair-k55.jpg', ['kit de mouse y teclado', 'perifericos']),
        new Producto(24, 'PARLANTES GENIUS SP-HF800A', '', 9500, 'images/productos/parlantes-genius.jpg', ['parlantes']),
        new Producto(27, 'GABINETE RAIDMAX F05 ARGB FAN X1 VIDRIO TEMPLADO', '', 7500, 'images/productos/gabinete-raidmax.jpg', ['gabinetes']),
        new Producto(29, 'Disco Solido SSD M.2 WD 240GB Green SN350 2400MB/s NVMe PCI-Express x4', '', 4000, 'images/productos/ssd wd.jpg', ['almacenamiento']),
        new Producto(30, 'Memoria Patriot Viper DDR4 8GB 3200MHz Steel RGB', '', 5160, 'images/productos/ram patriot.jpg', ['memorias ram']),
        new Producto(31, 'Memoria GeiL DDR4 8GB 3000MHz Orion RGB Black', '', 5200, 'images/productos/ram ceil 8gb.jpg', ['memorias ram']),
        new Producto(32, 'Cooler CPU Aerocool VERKHO I ', '', 1500, 'images/productos/cooler aerocool.jpg', ['coolers']),
        new Producto(33, 'Cooler FAN Cooler Master MASTERFAN MF120 HALO ARGB', '', 4200, 'images/productos/coolermaster.jpg', ['coolers']),
        new Producto(33, 'Mouse Logitech G903 Lightspeed Wireless Gaming 16.000dp', '', 10200, 'images/productos/mouse g903.jpg', ['mouses', 'perifericos']),
        new Producto(35, 'Mouse HyperX Pulsefire CORE RGB ', '', 2300, 'images/productos/mouse hyperx pulsefire.jpg', ['mouses', 'perifericos']),
        new Producto(34, 'Mouse Logitech G PRO Hero Gaming 16000DPI RGB', '', 3400, 'images/productos/mouse gpro.jpg', ['mouses', 'perifericos']),
        new Producto(36, 'Mouse Logitech G203 Lightsync RGB White', '', 2300, 'images/productos/mouse g203.jpg', ['mouses', 'perifericos'])

    ]
    //new Producto(, '', '', , '', [])

function buscarProducto(id, prods) {
    for (let i = 0; i < prods.length; i++) {
        if (id == prods[i].id) {
            return prods[i]
        }
    }
}

function encuentraCategoria(categoria, categorias) {
    if (categorias.indexOf(categoria) == -1) {
        return false
    } else {
        return true
    }
}

function detalles(id) {
    window.location.href = `prod.html?prodID=${id}`;
}

function categoria(categoria, clasificacion) {
    window.location.href = `categoria.html?cat=${categoria}&clas=${clasificacion}`
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
            if (encuentraCategoria(categoria, prod.categoria)) {
                htmlProd.innerHTML += htmlElement
            } else if ('productos' == categoria) {
                htmlProd.innerHTML += htmlElement
            }
        })
    }
}

function injectProductosCategoria(productos, categoria) {
    let htmlProd = document.getElementById('categorias')
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
            if (encuentraCategoria(categoria, prod.categoria)) {
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