//DESAFIO 6  -   Camila Marín

//funciones
let producto = {
    nombre: "Camiseta",
    precio: "$9000",
    cantDispo: "20" 
};

//Programa Principal
producto.nombre = 'Zapatillas';

producto.categoria = "Calzado";

delete producto.cantDispo;

console.log(`Este es el producto disponible!!\n producto: ${producto.nombre} \n precio: ${producto.precio} \n categoría: ${producto.categoria}`);

//Fin.