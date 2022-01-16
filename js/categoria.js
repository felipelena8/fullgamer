const params = new URL(window.location.href).searchParams
const categ = params.get('cat')
const clasi = params.get('clas')
const htmlTitulo = document.getElementById('tituloCategoria')
htmlTitulo.innerHTML = categ.toUpperCase()
const htmlFiltros = document.getElementById('filtrosBusqueda')
let htmlElement = ''
if (clasi == 'perifericos') {
    htmlElement = `<li class="itemsProductos text-white" onclick="categoria('teclados', 'perifericos')">Teclados</li>
    <li class="itemsProductos text-white" onclick="categoria('kit de mouse y teclado','perifericos')">Kits de Mouse y Teclado</li>
    <li class="itemsProductos text-white " onclick="categoria('mouses','perifericos')">Mouses</li>
    <li class="itemsProductos text-white" onclick="categoria('mousepads','perifericos')">Mousepads</li>
    <li class="itemsProductos text-white" onclick="categoria('microfonos','perifericos')">Microfonos</li>
    <li class="itemsProductos text-white" onclick="categoria('auriculares','perifericos')">Auriculares</li>`
} else if (clasi == 'computadoras') {
    htmlElement = `<li class="itemsProductos text-white" onclick="categoria('computadoras', 'computadoras')">Todos</li>
    <li class="itemsProductos text-white" onclick="categoria('intel', 'computadoras')">Intel</li>
    <li class="itemsProductos text-white" onclick="categoria('amd', 'computadoras')">AMD</li>`
} else {
    htmlElement = ` <li class="itemsProductos text-white" onclick="categoria('procesadores', 'productos')">Procesadores</li>
    <li class="itemsProductos text-white" onclick="categoria('placas de video', 'productos')">Placas de videos</li>
    <li class="itemsProductos text-white" onclick="categoria('almacenamiento', 'productos')">Almacenamiento</li>
    <li class="itemsProductos text-white" onclick="categoria('memorias ram', 'productos')">Memorias Ram</li>
    <li class="itemsProductos text-white" onclick="categoria('monitores', 'productos')">Monitores</li>
    <li class="itemsProductos text-white" onclick="categoria('teclados', 'productos')">Teclados</li>
    <li class="itemsProductos text-white" onclick="categoria('mouses', 'productos')">Mouses</li>
    <li class="itemsProductos text-white" onclick="categoria('gabinetes', 'productos')">Gabinetes</li>
    <li class="itemsProductos text-white" onclick="categoria('fuentes', 'productos')">fuentes</li>
    <li class="itemsProductos text-white" onclick="categoria('coolers', 'productos')"> coolers</li>
    <li class="itemsProductos text-white" onclick="categoria('parlantes', 'productos')">Parlantes</li>
    <li class="itemsProductos text-white" onclick="categoria('auriculares', 'productos')">Auriculares</li>`

}
htmlFiltros.innerHTML = htmlElement
injectProductosCategoria(productos, categ)