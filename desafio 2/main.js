//DESAFIO 2  -   Camila Marín

//Programa Principal
let nombreProducto = ("Coca-Cola");

let precioUnitario = (2000);

alert("Bienvenido a nuestra gran página para comprar Coca-Cola\nVendemos " + nombreProducto + " a $" + precioUnitario);

let cantidadDeseada = prompt("¿Cuántos productos desea comprar?: ");

let costoTotal = precioUnitario * cantidadDeseada;

alert("El costo total de tu compra es: $" + costoTotal + " (" + cantidadDeseada + " " + nombreProducto+")");
alert(`El costo total de tu compra es $${costoTotal} (${cantidadDeseada} ${nombreProducto})`); 

//Fin.