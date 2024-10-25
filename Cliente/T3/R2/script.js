/**
 * una funcion que dados un numero indefinido de numeros, nos devuelve un Objeto
 * que contiene el valor maximo,minimo y valor medio
 * @param  {...Number} arrayDeNumerosParaAnalizar  -arrayDeNumerosParaAnalizar
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
 * @param {String} color - color 
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
        const randomNum = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

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
function llenarArrayDeValoresYDevolverInfo(i, min, max) {


    const valores = llenarArrayDeValoresAleatorios(i, max, min);
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
    const listaDeNumerosSinDuplicadosOrdenada = ordenarArrayBurbuja(listaDeNumerosSinDuplicados);

    return {
        "Original": listaDeNumerosOriginal,
        "Ordeandos": listaDeNumerosSinDuplicadosOrdenada
    }
}

function eliminarDuplicados(array = []) {
    return [...new Set(array)];
}

function ordenarArrayBurbuja(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}

//console.log(tomarArrayDeNumerosAleatorios());

/**
 * dado un string con palabras separadas por coma, nos devuelve este strgin como un array 
 * ordenado
 * @param {String} listaDeStringsSeparadosPorComa 
 * @returns {Array}
 */
function ordenarStrings(listaDeStringsSeparadosPorComa = '') {
    return listaDeStringsSeparadosPorComa
        .split(",")
        .filter(string => string.trim() !== "") //me aseguro de eliminar los strins vacios
        .sort((a, b) => a.localeCompare(b));
}

//console.log(ordenarStrings("erik,pablo,carmne,eliseo, , felipe"));

function funcionesVariasConCadenasDeTexto(cadenaDeTexto = '') {
    const cadenaComoArray = cadenaDeTexto.trim().split(",").filter(string => string.trim() !== "");

    function numeroDePalabras() {
        return cadenaComoArray.length;
    }

    function primeraPalabra() {
        return cadenaComoArray[0];
    }

    function ultimaPalabra() {
        return cadenaComoArray[cadenaComoArray.length - 1];
    }

    function palabrasOrdenadasEnOrdenInversoAlIntroducido() {
        const cadenaAlReves = [];

        cadenaComoArray.forEach(palabra => {
            cadenaAlReves.unshift(palabra);
        });

        return cadenaAlReves;
    }

    function palabrasOrdenadasAtoZ() {
        return [...cadenaComoArray].sort((a, b) => a.localeCompare(b));
    }

    function palabrasOrdenadasZtoA() {
        return [...cadenaComoArray].sort((a, b) => b.localeCompare(a));
    }

    return {
        "NumeroDePalabras": numeroDePalabras(),
        "PrimeraPalabra": primeraPalabra(),
        "UltimaPalabra": ultimaPalabra(),
        "CadenaAlReves": palabrasOrdenadasEnOrdenInversoAlIntroducido(),
        "PalabrasOrdenadas": palabrasOrdenadasAtoZ(),
        "PalabrasOrdenadasAlReves": palabrasOrdenadasZtoA()
    }
}

//console.log(funcionesVariasConCadenasDeTexto("erik,hola,awebo,buenos,dias,,weon"));
