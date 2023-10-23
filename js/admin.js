/*  

 -title
 -descripcion
 - imagen
 -precio
 -fecha de creacion
 -categoria
 -id (automatico)

*/
const formularioProductoHTML = document.getElementById("formularioProducto")

formularioProductoHTML.addEventListener('submit', (evt) => {
    // formulario.elements.titulo
    evt.preventDefault()

    const el = formularioProductoHTML.elements;


    const nuevoProducto = {
        titulo: el.titulo.value,
        descripcion: el.descripcion.value,
        precio: el.precio.value,
        imagen: el.imagen.value,
        categoria: el.categoria.value,
        fechaDeCreacion: obtenerFecha(),


    }

    consolas.push(nuevoProducto)

    pintarProductos()
    formularioProductoHTML.reset()
    el.titulo.focus()

})

const inputFiltarHTML = document.getElementById("filtrar")



const consolas = [
    {
        descripcion: 'Consola de hogar con gráficos en alta definición.',
        titulo: 'PlayStation 5',
        fechaDeCreacion: '2020-11-12',
        precio: 499.99,
        imagen: 'https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true',
        categoria: 'Consola de Hogar'
    },
    {
        descripcion: 'Consola portátil con pantalla táctil.',
        titulo: 'Nintendo Switch',
        fechaDeCreacion: '2017-03-03',
        precio: 299.99,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_625423-MLA47920375564_102021-O.webp',
        categoria: 'Consola Portátil'
    },
    {
        descripcion: 'Consola de hogar con alta potencia y compatibilidad hacia atrás.',
        titulo: 'Xbox Series X',
        fechaDeCreacion: '2020-11-10',
        precio: 499.99,
        imagen: 'https://assets.xboxservices.com/assets/fb/d2/fbd2cb56-5c25-414d-9f46-e6a164cdf5be.png?n=XBX_A-BuyBoxBGImage01-D.png',
        categoria: 'Consola de Hogar'
    },
    {
        descripcion: 'Consola clásica miniaturizada con juegos preinstalados.',
        titulo: 'NES Classic Edition',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: 'https://m.media-amazon.com/images/I/81s7B+Als-L._SL1500_.jpg',
        categoria: 'Consola Retro'
    },

    {
        id: 'eec389d2-3d56-4b74-ae13-5d387a592048',
        descripcion: 'Consola clásica miniaturizada con juegos preinstalados.',
        titulo: 'NES Classic Edition',
        fechaDeCreacion: '2016-11-10',
        precio: 59.99,
        imagen: 'https://m.media-amazon.com/images/I/81s7B+Als-L._SL1500_.jpg',
        categoria: 'consolas'
    },
    {
        id: '5732bbf2-fa29-43c5-9acd-8246334ff9ea',
        descripcion: 'Consola portátil con dos pantallas, una de ellas táctil.',
        titulo: 'Nintendo DS',
        fechaDeCreacion: '2004-11-21',
        precio: 149.99,
        categoria: 'accesorios',
        imagen: 'https://assets.stickpng.com/images/585ea26acb11b227491c3509.png'
    },
    {
        id: 'ade12391-5086-409f-8011-3f04dd897f46',
        descripcion: 'Consola de hogar con innovador control en forma de tableta.',
        titulo: 'Nintendo Wii U',
        fechaDeCreacion: '2012-11-18',
        precio: 299.99,
        categoria: 'consolas',
        imagen: 'https://nucleogamer.com/wp-content/uploads/492448_thumb-1.png',
    },
    {
        id: '29122478-2e13-41c5-8bbc-8e1a24423c43',
        descripcion: 'Consola con gráficos realistas y unidad de Blu-ray.',
        titulo: 'PlayStation 4',
        fechaDeCreacion: '2013-11-15',
        precio: 399.99,
        categoria: 'juegos',
        imagen: 'https://livingplaystation.com/wp-content/uploads/2018/11/playstation-4-pro.png',
    },
    {
        id: 'f00f413d-2e20-46f0-914f-0b4538f23599',
        imagen: 'https://www.jvgelectronics.in/storage/product/1634471779img2.png',
        descripcion: 'Consola de hogar con posibilidad de ver películas en DVD.',
        titulo: 'Xbox 360',
        fechaDeCreacion: '2005-11-22',
        precio: 299.99,
        categoria: 'consolas'
    }

];

const tableBodyHTML = document.querySelector("#table-body")

function pintarProductos() {

    tableBodyHTML.innerHTML = "";

    consolas.forEach(function (conso, indice) {

        tableBodyHTML.innerHTML +=
            `<tr>
       <td class="table-image">
           <img src="${conso.imagen}"
               alt="${conso.titulo}">
       </td>
       <td class="table-title">${conso.titulo}</td>
       <td class="table-description">${conso.descripcion}
       </td>
       <td class="table-price">${conso.precio}</td>
       <td class="table-category">${conso.categoria}</td>
       <td>
            <button class= "btn btn-danger btn-sm" onclick="borrarProducto(${indice})">
            <i class="fa-solid fa-trash"></i>
            </button>
       </td>
    </tr>`

    })
    const tablaHTML = document.getElementById("tabla");
    tablaHTML.innerHTML += `cantidad de productos ${consolas.length}`


}

// funcion para filtrar elementos 
inputFiltarHTML.addEventListener('keyup', (evt) => {

    console.log(evt.target.value)
})

function borrarProducto(indiceRecibido) {
    consolas.splice(indiceRecibido, 1)
    console.log(consolas)

}
// pintamos productos al cargar nuextro scrip por primera vez 
pintarProductos()

function obtenerFecha() {
    const fecha = new Date()
    let mes = fecha.getMonth() + 1;
    if (mes < 10) {
        mes = '0' + mes
    }

    let dia = fecha.getDate();
    if (dia < 10) {
        dia = '0' + dia
    }
    const year = fecha.getFullYear()
    const fechaFormateada = `${year}-${mes}-${dia}`

    return fechaFormateada


}

/*

 <tr>
                <td class="table-image">
                    <img src="https://stylewatch.vtexassets.com/arquivos/ids/233580-800-800?v=638188815205330000&width=800&height=800&aspect=true"
                        alt="">
                </td>
                <td class="table-title">ps5</td>
                <td class="table-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, labore!
                </td>
                <td class="table-price">1000</td>
                <td class="table-category">consolas</td>
            </tr>
*/

