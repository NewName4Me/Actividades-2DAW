/**
 * Una funcion que dados una cantidad ilimitada de parametros, nos devuelve el mayor de todos
 * @param  {...Number} values 
 * @returns 
 */
function maximo(...values) {
    return Math.max(...values);
}
//console.log(maximo(2, 6, 3, 4));

/**
 * nos devuelve de forma aleatoria un numero entro 1 y 6, simulando ser un dado
 * @returns 
 */
function lanzamiento() {
    return Math.floor((Math.random() * 6) + 1);
}
//console.log(lanzamiento());

/**
 * una funcion que simula hacer un numero determinado de tiradas y nos almacena las ocurrencias
 * de cada resultado
 * @returns {Map} Situacion posibles : ocurrencias
 */
function multiplesTiradas(funcion, numeroDeEjecuciones) {
    const ocurrenciasDeCadaSituacion = new Map();

    for (let i = 0; i < numeroDeEjecuciones; i++) {
        const ocurrencia = funcion();

        if (ocurrenciasDeCadaSituacion.has(ocurrencia)) {
            ocurrenciasDeCadaSituacion.set(ocurrencia, ocurrenciasDeCadaSituacion.get(ocurrencia) + 1);
        } else {
            ocurrenciasDeCadaSituacion.set(ocurrencia, 1);
        }

    }

    return ocurrenciasDeCadaSituacion;
}

//console.log(multiplesTiradas(lanzamiento, 6000));

function calcularVolumenEsfera(radio) {
    return 4 / 3 * Math.PI * Math.pow(radio, 3);
}
//console.log(calcularVolumenEsfera(2));

function calcularVolumenEsferaYAreCirculo(radio) {
    const volumenEsfera = 4 / 3 * Math.PI * Math.pow(radio, 3);
    const areaCirculo = Math.PI * Math.pow(radio, 2);
    return {
        "volumenEsfera": volumenEsfera,
        "areaCirculo": areaCirculo
    }
}
//console.log(calcularVolumenEsferaYAreCirculo(2));

/**
 * una funcion que calcula la potencia de un numero de manera recursiva
 * @param {Number} base 
 * @param {Number} exponente 
 * @returns 
 */
function calcularPotenciasRecursividad(base, exponente) {
    if (exponente === 0) return 1;
    return base * calcularPotenciasRecursividad(base, exponente - 1);

}
//console.log(calcularPotenciasRecursividad(2, 3));

/**
 * una funcion que dado un numero nos calcula su factorial con recursividad
 * lo cual nos limita a que no podamos hacerlo con valores mayores a 170 
 * o nos devolvera infinito
 * @param {Number} numero 
 * @returns 
 */
function calcularFactorial(numero) {
    if (numero <= 2) return 2;
    return numero * calcularFactorial(numero - 1);
}

//console.log(calcularFactorial(170));
//console.log(calcularFactorial(171));
