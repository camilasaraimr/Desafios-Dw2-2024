//DESAFIO 5  -   Camila Marín

//Funciones
function eliminaElemento (array,e){
    const i = array.indexOf(e);
    if(i !== -1){
        array.splice(i,1);
        return true
    }
    else
        return false;
}

//PROGRAMA PRINCIPAL
let precioProducto;
console.log("APROVECHE!! NOS QUEDA POCO STOCK!!")

const productos = ["coca-cola","papas fritas","agua mineral","alfajor fulbito"];

for(let i=0; i < productos.length; i++){
    console.log(productos[i]);
}

let elecUsr = prompt('Ingrese el producto que desea comprar!!: ');

const productoUsr = eliminaElemento(productos,elecUsr)

if(productoUsr){
    alert(`Felicidadess!! Has comprado ${elecUsr} por $500`)
}
else{
    alert(`No se ha podido identificar el elemento "${elecUsr}"`)
}

console.log("\nSTOCK ACTUALIZADO!! APROVECHE Y COMPRE!!")
for(let i=0; i < productos.length; i++){
    console.log(productos[i]);
}

//Fin.


