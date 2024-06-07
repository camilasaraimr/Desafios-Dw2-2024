//DESAFIO 8  -   Camila Marín

//Programa Principal
const prod = ["pelota","reloj","mesa","auriculares","lampara"]

for(i of prod){

    let subtitle = document.createElement('h2')

    subtitle.innerHTML = `Nombre: <span style='color:darkblue;'>${i}</span`

    document.body.appendChild(subtitle)
}

//Fin.