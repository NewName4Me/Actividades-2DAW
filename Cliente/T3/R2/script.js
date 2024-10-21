/**
 * una funcion que dados un numero indefinido de numeros, nos devuelve un Objeto
 * que contiene el valor maximo,minimo y valor medio
 * @param  {...Number} arrayDeNumerosParaAnalizar 
 * @returns {Object}
 */
function maximoMinimoValorMedio(...arrayDeNumerosParaAnalizar) {
    return {
        "maximo": Math.max(...arrayDeNumerosParaAnalizar),
        "minimo": Math.min(...arrayDeNumerosParaAnalizar),
        "medio":
            (arrayDeNumerosParaAnalizar.reduce((acumulator, value) => acumulator + value, 0)) / arrayDeNumerosParaAnalizar.length,
    }
}

//console.log(maximoMinimoValorMedio(2, 3, 4));

/**
 * dado un color cualquiera devolvemos true o false en funcion de si este color
 * esta includo en nuestra lista de colores
 * @param {String} color 
 * @returns {Boolean}
 */
function colorDentroDeNuestraDB(color = '') {
    const listaDeColores = ["azul", "amarillo", "rojo", "verde", "cafe", "rosa"];
    return listaDeColores.includes(color.toLowerCase());
}

//console.log(colorDentroDeNuestraDB('morado'));
//console.log(colorDentroDeNuestraDB('ROJO'));

/**
 * funcion que dado un numero entero que representan iteraciones, devolvemos esa cantidad dada
 * de numeros aleatorios en un array
 * puedes indicar de forma opcional el maximo y minimo para que estos valores no se queden siempre entre 0 y 1
 * @param {Number} numIteraciones 
 * @returns {Array}
 */
function llenarArrayDeValoresAleatorios(numIteraciones, maximo = 1, minimo = 0) {
    const arrayDeValores = [];

    for (let i = 0; i < numIteraciones; i++) {
        const randomNum = (Math.random() * maximo) + minimo;

        arrayDeValores.push(randomNum);
    }

    return arrayDeValores;
}
//console.log(llenarArrayDeValoresAleatorios(20));

/**
 * dados nos arrays nos devuelve la union de estos, la interseccion, y la diferencia
 * @param {Array} primerArray 
 * @param {Array} segundoArray 
 * @returns 
 */
function interseccionUnionDiferencia(primerArray = [], segundoArray = []) {
    const union = [...new Set([...primerArray, ...segundoArray])];
    const interseccion = primerArray.filter(x => segundoArray.includes(x));
    const diferencia = [...primerArray.filter(x => !segundoArray.includes(x)), ...segundoArray.filter(x => !primerArray.includes(x))];

    return {
        "union": union,
        "interseccion": interseccion,
        "diferencia": diferencia,
    }
}

//console.log(interseccionUnionDiferencia([2, 3, 4], [1, 3, 5]));

/**
 * una funcion que toma un numero de valores aleatorios y nos devuelve el maximo minimo y media de estos
 * @returns 
 */
function llenarArrayDeValoresYDevolverInfo() {
    const iteraciones = 20;

    const valores = llenarArrayDeValoresAleatorios(iteraciones);
    return maximoMinimoValorMedio(...valores);
}
//console.log(llenarArrayDeValoresYDevolverInfo());

/**
 * una funcion que nos dice si una palabra se encuentra o no en el
 * @param {String} palabra 
 * @returns {Boolean}
 */
function palabraEnElDom(palabra) {
    return document.body.innerHTML.includes(palabra);
}

function tomarArrayDeNumerosAleatorios() {
    const numeroDeDatos = 20;
    const valorMaximo = 100;
    const valorMinimo = 0;

    const listaDeNumerosOriginal = llenarArrayDeValoresAleatorios(numeroDeDatos, valorMaximo, valorMinimo);
    const listaDeNumerosSinDuplicados = eliminarDuplicados(listaDeNumerosOriginal);
    const listaDeNumerosSinDuplicadosOrdenada = ordenarArray(listaDeNumerosSinDuplicados);
}

function eliminarDuplicados(array = []) {
    return [...new Set(array)];
}

function ordenarArray(array = []) {
    const arrayOrdenado = [];

    while (arrayOrdenado.length < array.length) {
        const maximoValor = getMaxValueAndPopIt(array);

        arrayOrdenado.push(maximoValor);
    }

    return arrayOrdenado;
}

function getMaxValueAndPopIt(array = []) {
    const maxValue = Math.max(...array);
    array.pop(maxValue);

    return array;
}

console.log(tomarArrayDeNumerosAleatorios());