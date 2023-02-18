const carrito = [];
const costeCarrito = [];

const filtrarCategorias = () =>{
    productos.filter();
}

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.precio - b.precio)
    MostrarListaOrdenada()
};

const ordenarMayorMenor = () => {
    productos.sort((a, b) => b.precio - a.precio)
    MostrarListaOrdenada()
};


// const comprarPerifericos = () => {
//     let cantidad = 0
//     let cantidadTotal = 0           ``
//     confirmarCompra 
// }

const MostrarListaOrdenada = () => {
    const listaProductos = productos.map((producto) =>{
        return  " -" + producto.nombre + " $" + producto.precio
    })
    alert("Los productos disponibles son:" +`\n\n` + listaProductos.join("\n"))
    comprarProductos(listaProductos)
}


// carrito.reduce((acc,producto)) => acc + (productos.precio *cantidadSeleccionada)

// productos.filter(productos.tipo)

const comprarProductos = (listaProductos) => {
    let productoNombre = ''
    let productoCantidad = 0
    let otroProducto = false
    do {
        productoNombre = prompt("Que producto deseas comprar?" + "\n\n"+ listaProductos.join("\n"));
        productoCantidad = parseInt(prompt("Cuantos deseas llevar"));

        const producto = productos.find(producto => producto.nombre.toLowerCase() == productoNombre.toLowerCase())
        // const productoPrecio = productos.find(productoPrecio => productonombre )
        // console.log(producto + " " + productoPrecio)

        if(producto){
            agregarAlCarrito(producto, producto.id, productoCantidad, productoNombre)
        } else {
            alert("No se ha podido encontrar, intenta de nuevo")
        }

        otroProducto = confirm("Deseas agregar otro producto?")
    } while (otroProducto);

    confirmarCompra()
}

const agregarCantidad = (productoCantidad) =>  producto.cantidad += productoCantidad 


const agregarAlCarrito = (producto, productoId, productoCantidad, productoNombre) => {
    const productoRepetido = carrito.some(productoId => producto.id === productoId) // Intente con nombre, pero al pasar mas de una vez un mismo producto por el flujo de compra, se escribe dos veces en la listaProductos, que es mostrada al usuario
        if (productoRepetido){
            producto.cantidad += productoCantidad
        } else {
            carrito.push(producto)
            producto.cantidad += productoCantidad
        }
};

const eliminarProductoCarrito = (nombreProductoAEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre.toLowerCase() === nombreProductoAEliminar.toLowerCase) {
            if (producto.cantidad > 1) {
                producto.cantidad--
            } else {
                carrito.splice(index, 1)
            }
        }
    })

    confirmarCompra()
};

const confirmarCompra = () => {
    const listaProductos = carrito.map(producto =>{
        return " " + producto.nombre + " | Cantidad: "+producto.cantidad
    })
    const isCheckout = confirm(" Checkout: "
        +"\n\n"+listaProductos.join("\n")
        +"\n\nSi deseas confirmar la compra presiona 'OK', en caso de querer eliminar un producto del carrito presione cancelar"
    )

    if(isCheckout){
        finalizarCompra(listaProductos)
    } else{
        const nombreProductoAEliminar = prompt ("Ingrese el nombre del producto a eliminar:")
        eliminarProductoCarrito(nombreProductoAEliminar)
    }


};

const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.cantidad * item.precio), 0)
    alert('Detalle de su compra: '
        +'\n\n'+listaProductos.join('\n')
        +'\n\nTotal de productos: '+cantidadTotal
        +'\n\nEl total de su compra es: '+precioTotal
        +'\n\nGracias por su compra!'
    )
};
// error listaproductos.join no es una funcion
//     alert(`Detalles de su compra: \n\n`+listaProductos.join("\n") `\nCantitad Total de productos: ${cantidadTotal}.\nValor total de la compra: ${precioTotal} \nGracias por su compra!`)
// }

const comprar = () => {
    const productosBaratos = confirm("Queres ordenar la lista de productos por precio de menor a mayor?")

    if(productosBaratos) {
        ordenarMenorMayor()
    } else {
        ordenarMayorMenor()
    }
};


comprar()



// const mostrarValorTotal = () => {
//     carrito.precio * carrito.producto.cantidad
// }
//  
// ANTES DE CAMBIAR EL SOME A FIND PARA QUE AL ENCONTRARLO SE LE PUEDA PASAR .CANTIDAD Y SUMARLE, PROBAR COMO SE PODRIA CON EL SOME
// const agregarAlCarrito = (producto, productoId, productoCantidad, productoNombre) => {
//     productos.push(carrito[productoNombre]) // esto va con producto ya esta abajo
// const productoRepetido = carrito.some(productoNombre => nombre === productoNombre) // O con id si 
// if (productoRepetido){
//      agregarCantidad(productoCantidad, producto.cantidad)
// }else {
// carrito.push(producto)
// agregarCantidad(productoCantidad)

//  
// }




