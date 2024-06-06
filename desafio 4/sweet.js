//DESAFIO 4  -  Camila Marín

//Funciones
function sumarProductos(precioUnitario,cantidadDeseada){
    return precioUnitario * cantidadDeseada;
}

//Programa Principal

let nombreProducto = ("Coca-Cola");

let precioUni = (2000);

alert(`Bienvenido/a a nuestra gran página para comprar Coca-Cola!!\nVendemos ${nombreProducto} a $${precioUni}`);

let cantIng = prompt("¿Cuántos productos desea comprar?: ");

alert(`Gracias por su compra! El costo final es $${sumarProductos(precioUni,cantIng)} (${cantIng} ${nombreProducto})`);