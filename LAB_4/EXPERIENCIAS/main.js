/*
// console.log("JavaScript desde un archivo externo");

const nombreProducto = "Teclado mecánico";
let precio = "180";
let stock = 5;
const disponible = true;

console.log(typeof nombreProducto);
console.log(typeof precio);
console.log(typeof stock);
console.log(typeof disponible);

if (stock > 0) {
    var mensaje = "Producto disponible";
    let unidades = stock;

    console.log(mensaje);
    console.log(unidades);
}

console.log(mensaje);

const nombreCliente = "Andrea";
const cantidadProductos = 3;
const precioUnitario = 120;
const importe = cantidadProductos * precioUnitario;

console.log("Cliente:", nombreCliente);
console.log("Cantidad:", cantidadProductos);
console.log("Precio unitario:", precioUnitario);
console.log("Importe:", importe);
*/
// function calcularSubtotal(precio, cantidad) {
//     return precio * cantidad;
// }

// console.log(calcularSubtotal(120, 3));
// console.log(calcularSubtotal(80, 5));

// const calcularSubtotal = function(precio, cantidad) {
//     return precio * cantidad;
// };

// console.log(calcularSubtotal(120, 3));

// const calcularSubtotal =
//     (precio, cantidad) => precio * cantidad;

// console.log(calcularSubtotal(120, 3));

// function calcularTotal(
//     precio,
//     cantidad = 1,
//     descuento = 0
// ) {
//     const subtotal = precio * cantidad;
//     return subtotal - subtotal * descuento / 100;
// }

// console.log(calcularTotal(100));
// console.log(calcularTotal(100, 3));
// console.log(calcularTotal(100, 3, 10));

// function sumarImportes(...importes) {
//     console.log(importes);

//     return importes.reduce(
//         (total, importe) => total + importe,
//         0
//     );
// }

// console.log(sumarImportes(100, 50));
// console.log(sumarImportes(100, 50, 80, 25));

// const aplicarDescuento = precio => precio * 0.90;
// const aplicarIGV = precio => precio * 1.18;

// function procesarPrecio(precio, operacion) {
//     return operacion(precio);
// }

// console.log(
//     procesarPrecio(100, aplicarDescuento)
// );

// console.log(
//     procesarPrecio(100, aplicarIGV)
// );

// function calcularVenta(
//     precio,
//     cantidad,
//     descuento = 0
// ) {
//     const subtotal = precio * cantidad;
//     const montoDescuento = subtotal * descuento / 100;

//     return subtotal - montoDescuento;
// }

// console.log(
//     "Venta 1:",
//     calcularVenta(120, 3)
// );

// console.log(
//     "Venta 2:",
//     calcularVenta(80, 5, 10)
// );

// console.log(
//     "Venta 3:",
//     calcularVenta(250, 2, 20)
// );

// const producto = {
//     id: 1,
//     nombre: "Teclado",
//     precio: 120,
//     stock: 8,

//     calcularValorStock() {
//         return this.precio * this.stock;
//     }
// };

// console.log(producto.nombre);
// console.log(producto.precio);
// producto.categoria = "Periféricos";

// producto.stock = 10;

const productos = [
    {
        id: 1,
        nombre: "Teclado",
        precio: 120,
        stock: 8
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 70,
        stock: 15
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 850,
        stock: 4
    },
    {
        id: 4,
        nombre: "Webcam",
        precio: 160,
        stock: 0
    }
];

// console.log("Cantidad de productos:", productos.length);

// console.log("Tipo del primer elemento:", typeof productos[0]);

// console.log("Precio del Monitor:", productos[2].precio);

// productos.forEach(producto => {
//     console.log(
//         producto.nombre,
//         producto.precio,
//         producto.stock
//     );
// });

// productos.forEach(producto => {
//     console.log(
//         `${producto.nombre} | S/ ${producto.precio} | Stock: ${producto.stock}`
//     );
// });

// const nombres = productos.map(
//     producto => producto.nombre
// );

// console.log(nombres);

// const preciosIncrementados = productos.map(
//     producto => producto.precio * 1.10
// );

// console.log(preciosIncrementados);

// const bajoStock = productos.filter(
//     producto => producto.stock < 10
// );

// console.log(bajoStock);

// bajoStock.forEach(producto => {
//     console.log(
//         `${producto.nombre} | Stock: ${producto.stock}`
//     );
// });

// const conStock = productos.filter(
//     producto => producto.stock > 0
// );

// console.log(conStock);

// const conStock = productos.filter(
//     producto => producto.stock > 0
// );

// console.log(conStock);

// conStock.forEach(producto => {
//     console.log(
//         `${producto.nombre} | Stock: ${producto.stock}`
//     );
// });

// const encontrado = productos.find(
//     producto => producto.id === 3
// );

// console.log(encontrado);

// const noEncontrado = productos.find(
//     producto => producto.id === 15
// );

// console.log(noEncontrado);

// const totalInventario = productos.reduce(
//     (total, producto) =>
//         total + producto.precio * producto.stock,
//     0
// );

// console.log("Total inventario:", totalInventario);

// productos.push(
//     {
//         id: 5,
//         nombre: "Audífonos",
//         precio: 200,
//         stock: 6
//     },
//     {
//         id: 6,
//         nombre: "Laptop Stand",
//         precio: 180,
//         stock: 5
//     }
// );

// // const mayores150 = productos.filter(
// //     producto => producto.precio > 150
// // );

// // console.log("Productos mayores a S/ 150:");
// // console.log(mayores150);

// // const todosLosNombres = productos.map(
// //     producto => producto.nombre
// // );

// // console.log("Nombres:");
// // console.log(todosLosNombres);

// // const productoElegido = productos.find(
// //     producto => producto.id === 5
// // );

// // console.log("Producto elegido:");
// // console.log(productoElegido);

// const totalActualizado = productos.reduce(
//     (total, producto) =>
//         total + producto.precio * producto.stock,
//     0
// );

// console.log("Total actualizado:", totalActualizado);

// function calcularVenta(precio, cantidad) {
//     return precio * cantidad;
// }

// console.log(
//     calcularVenta(100, 3)
// );

// console.log(
//     calcularVenta("abc", 3)
// );

// function calcularVenta(precio, cantidad) {
//     precio = Number(precio);
//     cantidad = Number(cantidad);

//     if (precio <= 0 || cantidad <= 0) {
//         return "Datos no válidos";
//     }

//     return precio * cantidad;
// }

// function calcularVenta(precio, cantidad) {
//     precio = Number(precio);
//     cantidad = Number(cantidad);

//     return precio * cantidad;
// }

// console.log(calcularVenta("100", "3"));

// function calcularVenta(precio, cantidad) {
//     precio = Number(precio);
//     cantidad = Number(cantidad);

//     if (precio <= 0 || cantidad <= 0) {
//         return "Datos no válidos";
//     }

//     return precio * cantidad;
// }

// // console.log(calcularVenta("100", "3"));
// // console.log(calcularVenta(-20, 3));
// // console.log(calcularVenta(100, 0));
// console.log(calcularVenta("abc", 3));

// function calcularVenta(precio, cantidad) {
//     precio = Number(precio);
//     cantidad = Number(cantidad);

//     if (
//         Number.isNaN(precio) ||
//         Number.isNaN(cantidad)
//     ) {
//         return "Debe ingresar valores numéricos";
//     }

//     if (precio <= 0 || cantidad <= 0) {
//         return "Datos no válidos";
//     }

//     return precio * cantidad;
// }

// console.log(calcularVenta("abc", 3));
 
// function calcularVenta(precio, cantidad) {
//     precio = Number(precio);
//     cantidad = Number(cantidad);

//     if (
//         Number.isNaN(precio) ||
//         Number.isNaN(cantidad)
//     ) {
//         throw new Error(
//             "Precio y cantidad deben ser numéricos"
//         );
//     }

//     if (precio <= 0 || cantidad <= 0) {
//         throw new Error(
//             "Los valores deben ser mayores que cero"
//         );
//     }

//     return precio * cantidad;
// }

// // try {
// //     const total = calcularVenta(100, 3);
// //     console.log(total);
// // } catch (error) {
// //     console.error(
// //         "No fue posible calcular la venta:",
// //         error.message
// //     );
// // }

// try {
//     const total = calcularVenta("abc", 3);
//     console.log(total);
// } catch (error) {
//     console.error(
//         "No fue posible calcular la venta:",
//         error.message
//     );
// } finally {
//     console.log("Proceso de venta finalizado");
// }

function registrarProducto(nombre, precio, stock) {
    precio = Number(precio);
    stock = Number(stock);

    if (nombre === "") {
        throw new Error("El nombre no puede estar vacío");
    }

    if (Number.isNaN(precio) || precio <= 0) {
        throw new Error("El precio debe ser válido y mayor que cero");
    }

    if (Number.isNaN(stock) || stock < 0) {
        throw new Error("El stock debe ser válido y no negativo");
    }

    return {
        nombre: nombre,
        precio: precio,
        stock: stock
    };
}

// try {
//     console.log(
//         registrarProducto("Teclado", 120, 8)
//     );
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     console.log(
//         registrarProducto("Teclado", -120, 8)
//     );
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     console.log(
//         registrarProducto("Teclado", 120, -5)
//     );
// } catch (error) {
//     console.error(error.message);
// }

try {
    console.log(
        registrarProducto("Teclado", 120, -5)
    );
} catch (error) {
    console.error(
        "Error al registrar producto:",
        error.message
    );
}