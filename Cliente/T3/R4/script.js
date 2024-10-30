//#region Ej1
const findLargestNumber = (arr = []) => Math.max(...arr);
const findLongestString = (arr = ['']) => arr.reduce((a, b) => a.length > b.length ? a : b, '');
const findEvenNumbers = (arr = []) => arr.filter(n => n % 2 == 0);
const findOddNumbers = (arr = []) => arr.filter(n => n % 2 != 0);
const findWordsThatContainIs = (arr = ['']) => arr.filter(s => s.indexOf('is') > -1);
const assertAllNumbersDivisibleByThree = (arr = []) => arr.filter(n => n % 3 == 0);
const zipTwoArray = (arr1 = [], arr2 = []) => [...arr1, ...arr2];
const sortJoinedArrayFromSmallestToLargest = (arr1 = [], arr2 = []) => [...arr1, ...arr2].sort((a, b) => a - b);
const removeFirstWordInTheArray = (arr = ['']) => arr.slice(1); //shift me devolvería el valor eliminado
const placeNewWordAtTheStart = (arr = [''], word = '') => {
    arr.unshift(word);
    return arr;
}
const replaceSomeElements = (arr = [''], wordToReplace = '', wordThatReplaces = '') => arr.map(v => v === wordToReplace ? wordThatReplaces : v);

//#region Ej2
const sortAllNamesThatStartWithLetterJ = (names = ['']) => {
    return names
        .filter(n => n.toLocaleLowerCase().startsWith('j')) //me devuelve los que empiezan por J
        .map(n => n.split(' ').map(w => w.charAt(0)).join('')) //toma el primer caracter de cada palabra de su nombre
        .sort();
}
const nombres = ["Juan Pérez", "José Martínez", "Ana Gómez", "Jorge López", "María Fernández", "Julián Torres", "Luis Sánchez", "Julia Rodríguez", "Carlos Díaz", "Jazmín Ortega"];
console.log(sortAllNamesThatStartWithLetterJ(nombres));


//#region Ej3
const findTreasure = (arr = []) => {
    for (const [indexFila, fila] of arr.entries()) {
        for (const [indexColumna, columna] of fila.entries()) {

            const [decenas, unidades] = columna.toString().split('');

            if (decenas == indexFila + 1 && unidades == indexColumna + 1) return [indexFila + 1, indexColumna + 1];
        }
    }

    return new Error('No hay tesoro en este mapa ... nos engañaron capitán 😞. Esta semana, no podremos comer');
}
const map = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
];

console.log(findTreasure(map));//[5,2] en base 1 no base 0 ,el numero 52

//#region EJ4
/**
 * Crea un mapa bidimensional de tesoro con un número específico de filas y columnas.
 * Se garantiza que el mapa tenga al menos una ubicación donde esté escondido el tesoro.
 * @param {number} filas - Número de filas del mapa.
 * @param {number} columnas - Número de columnas del mapa.
 * @returns {Array<Array<number>>} - Mapa del tesoro, un array bidimensional.
 */
const crearMapaDelTesoroValido = (filas = 5, columnas = 5) => {
    let tesoroColocado = false;// Indica si el tesoro ya se ha colocado en el mapa
    let mapa;

    // Continúa generando mapas hasta que el tesoro esté colocado

    while (!tesoroColocado) {
        mapa = [];

        for (let i = 0; i < filas; i++) {
            const fila = [];// Inicia un nuevo mapa vacío en cada intento

            for (let j = 0; j < columnas; j++) {
                const probarSiDeboSubirTesoro = probarSuerte();
                const num = generarNumeroAleatorioEntre11Y55();

                // Si el tesoro no ha sido colocado y el número aleatorio es menor que 5, coloca el tesoro en esta posición
                if (!tesoroColocado && probarSiDeboSubirTesoro < 5) {
                    fila.push(Number((i + 1).toString() + (j + 1).toString()));
                    tesoroColocado = true;

                } else {
                    fila.push(num);
                }
            }
            mapa.push(fila);
        }
    }

    return mapa;// Retorna el mapa completo una vez que el tesoro ha sido colocado
}

/**
 * Genera un número aleatorio entre 11 y 55, ambos inclusive.
 * @returns {number} - Un número aleatorio entre 11 y 55.
 */
function generarNumeroAleatorioEntre11Y55() {
    return Math.floor(Math.random() * (55 - 11 + 1)) + 11;
}

/**
 * Genera un número aleatorio entre 0 y 99, que se utiliza para probar si debe colocarse el tesoro en una posición específica.
 * @returns {number} - Un número aleatorio entre 0 y 99.
 */
function probarSuerte() {
    return Math.floor(Math.random() * (100));
}
console.log(crearMapaDelTesoroValido(5, 5));


//#region Ej5

/**
 * Encuentra los puntos de silla en una matriz.
 * @param {Array} arr - La matriz a evaluar.
 * @returns {Array|Error} - Devuelve una lista de puntos de silla o un error si no hay.
 */
const saddlePoints = (arr = []) => {
    const listOfSaddlePoints = [];

    for (const [indexFila, fila] of arr.entries()) {
        const maxInRowValue = maxInRow(fila); // Usar la nueva función para encontrar el máximo

        for (const [columnaIndex, elementoEnCelda] of fila.entries()) {
            // Si el elemento es el mayor en la fila
            if (elementoEnCelda === maxInRowValue) {
                // Si además es el elemento más pequeño de la columna, lo añadimos a la lista de saddle points
                if (isMinInColumn(arr, elementoEnCelda, columnaIndex)) {
                    listOfSaddlePoints.push({ fila: indexFila, columna: columnaIndex });
                }
            }
        }
    }

    return listOfSaddlePoints.length !== 0 ? listOfSaddlePoints : new Error('No hay saddle Points en esta lista');
}

/**
 * Función que devuelve el elemento más grande de una fila.
 * @param {Array} fila - La fila a evaluar.
 * @returns {Number} - El valor máximo en la fila.
 */
function maxInRow(fila) {
    return Math.max(...fila);
}

/**
 * Comprueba si un elemento es el menor en su columna.
 * @param {Array} arr - La matriz a evaluar.
 * @param {Number} valor - El valor a comprobar.
 * @param {Number} colIndex - El índice de la columna.
 * @returns {Boolean} - Devuelve true si el valor es el menor, false de lo contrario.
 */
function isMinInColumn(arr, valor, colIndex) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][colIndex] < valor) {
            return false; // Si encuentra un elemento menor, devuelve false
        }
    }
    return true; // Si todos son mayores o iguales, devuelve true
}

// Ejemplo de matriz
const saddle = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 5, 8]
];

// Llamada a la función y muestra el resultado
console.log(saddlePoints(saddle));

//#region Ej6
const squareCoder = (arr = []) => {
    const result = [];
    for (let i = 0; i < arr[0].length; i++) {
        let row = '';
        for (let j = 0; j < arr.length; j++) {
            row += arr[j][i];
        }
        result.push(row);

    }
    return result.join(' ');
}
const code = [
    ["i", "f", "m", "a", "n", "w", "a", "s"],
    ["m", "e", "a", "n", "t", "t", "o", "s"],
    ["t", "a", "y", "o", "n", "t", "h", "e"],
    ["g", "r", "o", "u", "n", "d", "g", "o"],
    ["d", "w", "o", "u", "l", "d", "h", "a"],
    ["v", "e", "g", "i", "v", "e", "n", "u"],
    ["s", "r", "o", "o", "t", "s", "", ""]
]
console.log(squareCoder(code)); //imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
