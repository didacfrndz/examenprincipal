
//ahora generaremos la matriz con una funcion
let divTablero= document.querySelector("#tablero");
let manzana=[

]
function creaMatriu(columnes, files) {
    const matriu = [];
    for (let i = 0; i < files; i++) {
        const fila = [];
        for (let j = 0; j < columnes; j++) {
            fila.push(1); 
        }
        matriu.push(fila);
    }
    return matriu;
}
//test para ver si la funcion funciona correctamente
const matriu = creaMatriu(10, 10);
console.log(matriu);

//generacion de la serpiente

const serpiente=[
    {
        f:5,
        c:5
    },
    {
        f:5,
        c:6
    },
    {
        f:5,
        c:7
    }
]
console.log(serpiente);
//ahora debo recorrer el array u hacer una comparativa para cuando coincidan implementar a la serpiente

function recorrer(){
    console.log("recorrer???");
   for( let serp=0; serp<serpiente.length;serp++){
        let f=serpiente[serp].f;
        let c=serpiente[serp].c;
        matriu[f][c]=0;
    }
}
recorrer();
console.log(matriu);

//ahora generaremos las manzanas aleatoriamente


//ahora lo haremos con una funcion

function generarManzana(){
    
    manzana.push( {
            f:Math.floor(Math.random() * 11),
            c:Math.floor(Math.random() * 11)
        })
    
}
generarManzana();
console.log("Manzana",manzana);
//ahora aplicaremos la manzana a la matriz
function aplicarManzana(){
    console.log("manzana???");
    for(let apple=0; apple<manzana.length;apple++){
        let fM=manzana[apple].f;
        let cM=manzana[apple].c;
        matriu[fM][cM]=2;
    }
}
aplicarManzana();
console.log(matriu);

//pintar matriz
function pintartablero(){
    divTablero="";
    for(i=0;i<matriu[fila].length;i++){
        divTablero.innerHTML +="<div class'fila'>";
        for(j=0;j<matriu[columnes].length;j++){
            divTablero.innerHTML += "<div class'box'>BOX</div>";
        }
        divTablero.innerHTML +="</div>";
    }
}
pintartablero()












