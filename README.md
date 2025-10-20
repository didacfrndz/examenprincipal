#chuletilla

que necesito?
como plasmar un tablero con una matriz

function imprimirMatriz(matriz) {
    // Selecciona el contenedor donde se imprimirá la matriz
    const divmatriz = document.getElementById('gameContainer');
    
    // Limpia el contenedor antes de imprimir la matriz
    divmatriz.innerHTML = ''; 
    
    // Recorre las filas de la matriz
    for (let fila = 0; fila < matriz.length; fila++) {
        let filaHTML = '<div class="fila-matriz">';
        
        // Recorre las columnas de cada fila
        for (let columna = 0; columna < matriz[fila].length; columna++) {
            // Muestra los enemigos (usamos 'E' para indicar la posición de un enemigo)
            if (matriz[fila][columna] === 'E') {
                filaHTML += `<div class="box-matriz enemigo">🛸</div>`;  // Usamos un ícono de nave, pero puedes usar cualquier cosa
            } else {
                filaHTML += `<div class="box-matriz">${matriz[fila][columna]}</div>`;
            }
        }

        filaHTML += '</div>';
        divmatriz.innerHTML += filaHTML; 
    }
}

// Llama a la función para imprimir la matriz
imprimirMatriz(matriz);



function creaMatriu(columnes, files) {
    const matriu = [];
    for (let i = 0; i < files; i++) {
        const fila = [];
        for (let j = 0; j < columnes; j++) {
            fila.push(aleatorio()); // true (vivo) o false (muerto)
        }
        matriu.push(fila);
    }
    return matriu;
}
//test para ver si la funcion funciona correctamente
const matriu = creaMatriu(50, 50);
console.log(matriu);


implementar algo en la matriz

function dibuixaUniversAmbEstat(matriu) {
    const divmatriu = document.querySelector('.matriu');
    let html = '';
    for (let i = 0; i < matriu.length; i++) {
        html += '<div class="fila">';
        for (let j = 0; j < matriu[i].length; j++) {
            const estado = matriu[i][j] ? 'viva' : 'muerta';
            html += `<div class="celula celula-matriu ${estado}" data-id="${i}-${j}"></div>`;
        }
        html += '</div>';
    }
    divmatriu.innerHTML = html;
}  





generar una manzana random

generar un control de errores con la serpiente, mientras manzana no choque con serpiente se genera, si choca, genera otra

saber hacer un controlador de movimineto con las flechas del teclado

generar la animacion, que sea mover serpiente, una casilla a la izquierda cada segundo, osea una funcion que repinte la serpiente
pero tambien un filtro para que borre la antigua serpiente

setInterval(() => {
    const novaMatriu = crearMatriuEvolucionada(matriuActual);
    copiaMatriu(matriuActual, novaMatriu);
    dibuixaUniversAmbEstat(matriuActual);
}, 500);

primer paso seria generar el tablero 
segundo paso seria generar la serpiente
tercer paso insertar la serpiente en el tablero
cuarto paso controlador de movimineto
quinto paso controlador de colision pared/serpiente
sexto paso generacion de manzana aleatorio
septimo paso controlador colision manzana
octavo paso aumento de cuerpo serpiente
noveno paso implementar el coche con una manzana para que aumentre el tamaño de la serpiente


