//DESAFIO 3  -   Camila Marín

//Programa Principal
let nombreProducto = ("Coca-Cola");

let precioUnitario = (2000);

alert(`Bienvenido/a a nuestra gran página para comprar Coca-Cola!!\nVendemos ${nombreProducto} a $${precioUnitario}`);

let cantidadDeseada = prompt("¿Cuántos productos desea comprar?: ");

let costoTotal = precioUnitario * cantidadDeseada;

let costoDescuento = costoTotal * 10 / 100

let costoFinal = costoTotal - costoDescuento

if(cantidadDeseada >= 5){
    alert(`Felicidades! Por haber comprado ${cantidadDeseada} unidades te daremos un 10% de descuento!! \nEl costo final es: $${costoFinal} (${cantidadDeseada} ${nombreProducto})`); 

} else if(cantidadDeseada == 0){
    Swal.fire({
        icon: "question",
        title: "Mmmmh",
        text: "No has comprado nada:(\nSi fue solo un error, y deseas ingresar una cantidad tangible, pulsa el link de abajo!",
        footer: '<a href="./index.html">intentar de nuevo</a>' //lleva nuevamente al index
      });

} else if(cantidadDeseada < 0){
    Swal.fire({
        icon: "error",
        title: "Oops.....",
        text: "No has ingresado una cantidad existente!!",
        footer: '<a href="./index.html">intentar de nuevo</a>' //lleva nuevamente al index
      });

} else{
    alert(`Gracias por su compra! El costo final es $${costoTotal} (${cantidadDeseada} ${nombreProducto})`); 
}

//Fin.
