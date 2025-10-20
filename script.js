
//ahora generaremos la matriz con una funcion

function creaMatriu(columnes, files) {
    const matriu = [];
    for (let i = 0; i < files; i++) {
        const fila = [];
        for (let j = 0; j < columnes; j++) {
            fila.push(0); 
        }
        matriu.push(fila);
    }
    return matriu;
}
//test para ver si la funcion funciona correctamente
const matriu = creaMatriu(10, 10);
console.log(matriu);




