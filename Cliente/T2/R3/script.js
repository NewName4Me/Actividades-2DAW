//#region Act 1
/**
 * funcion que revierte una palabra
 * @param {*} cad_arg 
 * @returns 
 */
const invierteCadena = (cad_arg) => cad_arg.split("").reverse().join("");
console.log(invierteCadena("hola que tal"));

/**
 * funcion que nos revierte cada palabra de un texto
 * @param {*} cad_arg 
 * @returns 
 */
const inviertePalabras = (cad_arg) => cad_arg
    .split(" ")
    .map(palabra => palabra.split("").reverse().join(""))
    .join(" ");
console.log(inviertePalabras("hola que tal"));

/**
 * funcion que encuentra la palarba más larga dentro de una cadena
 * @param {*} card_arg 
 * @returns 
 */
const encuentraPalabraMasLarga = (card_arg) => {
    let palabraMasLarga = '';

    card_arg
        .split(" ")
        .map(palabra => {
            if (palabraMasLarga.length < palabra.length) {
                palabraMasLarga = palabra;
            }
        });

    return palabraMasLarga;
}
console.log(encuentraPalabraMasLarga("hola que tal amigo"));

/**
 * funcion que nos dice cuantas palabras tienen más de 'i' caracteres
 * @param {*} cad_args 
 * @param {*} i 
 * @returns 
 */
const filtrarPalabrasMasLargas = (cad_args, i) => {
    let counter = 0;

    cad_args
        .split(" ")
        .map(palabra => {
            if (palabra.length > i) counter++
        })

    return counter;
}
console.log(filtrarPalabrasMasLargas("hola que tal amigo", 3));

/**
 * Funcion que formatea un string para que la primera letra sea en mayuscula
 * 
 * @param {string} [cad_arg=''] - El string que queremos formatear
 * @returns {string} - El string formateado
 */
const cadenaBienFormada = (cad_arg = '') => {
    cad_arg = cad_arg.trim();
    const PRIMERA_LETRA_MAYUSCULA = cad_arg.charAt(0).toUpperCase();
    const RESTO_DE_LA_PALABRA = cad_arg.slice(1);

    return PRIMERA_LETRA_MAYUSCULA + RESTO_DE_LA_PALABRA;
};
console.log(cadenaBienFormada("   programando cadena bien formada"));

//#region Act 2
/**
 * una funcion que dada una cadena nos dice si esta contiene SOLO mayusculas
 * SOLO minusculas o una combinacion de ambas
 * @param {*} cad_arg 
 * @returns 
 */
function comoEstaFormadaEstaCadena(cad_arg = '') {
    const CADENA_A_MINUSCULA = cad_arg.toLowerCase();
    const CADENA_A_MAYUSCULA = cad_arg.toUpperCase();

    if (CADENA_A_MAYUSCULA === cad_arg) return "Todo mayusculas";
    if (CADENA_A_MINUSCULA === cad_arg) return "Todo minusculas";
    return "Una combinacion de mayusuclas y minusculas";
}
console.log(comoEstaFormadaEstaCadena("AWEBO"));
console.log(comoEstaFormadaEstaCadena("awebo"));
console.log(comoEstaFormadaEstaCadena("Awebo"));

//#region Act 3
/**
 * una funcion que determina cuantas veces una subcadena se encuentra dentro de otra
 * @param {*} cadena 
 * @param {*} subcadena 
 * @returns 
 */
function localizarSubcadenaEnCadena(cadena = '', subcadena = '') {
    if (subcadena.length == 0) return 0;

    const regex = new RegExp(subcadena, 'g');
    const CALCULAR_VECES_EN_CADENA = (cadena.length - cadena.replace(regex, '').length) / subcadena.length;
    return CALCULAR_VECES_EN_CADENA;
}
console.log(localizarSubcadenaEnCadena("mi mama se llama luisa", "a"));//5

//#region Act 4
/**
 * una funcion que coje las letras de nuestro texto y las ordena por primero consonantes y luego vocales
 * IMPORTANTE: si una letra se repite la pondra multiples veces, dado que no nos indican si queremos que esto
 * se evite o no, sería añadir una condicion más para cada caso si asi nos lo piden
 * @param {*} cad_args 
 * @returns 
 */
function reorganizarTextoPorTipoDeLetraPrimeroConsonantesLuegoVocales(cad_args) {
    //listas de vocales y consonantes
    const LISTA_DE_VOCALES = ["a", "e", "i", "o", "u"];
    const LISTA_DE_CONSONANTES = [
        "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
        "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"
    ];

    //arrays donde almacenaremos cada un indivicualemente
    const CONSONANTES_EN_CADENA = [];
    const VOCALES_EN_CADENA = [];

    for (let i = 0; i < cad_args.length; i++) {
        const char = cad_args[i];

        //cuando sean vocales o consonantes los guardamos en su array correspondiente
        if (LISTA_DE_VOCALES.includes(char)) {
            VOCALES_EN_CADENA.push(char);
        } else if (LISTA_DE_CONSONANTES.includes(char)) {
            CONSONANTES_EN_CADENA.push(char);
        }
    }

    const CONSONANTES_CON_VOCALES = (CONSONANTES_EN_CADENA.toString() + VOCALES_EN_CADENA.toString());

    //lo devolvemos eliminando las comas que genera por defecto el metodo toString() al convertir un array
    return CONSONANTES_CON_VOCALES.replace(/,/g, '');
}
console.log(reorganizarTextoPorTipoDeLetraPrimeroConsonantesLuegoVocales("esto es un texto muy chachi"));

//#region Act 5
/**
 * una funcion que dada una cadena nos devuelve esta sin los caracteres repetidos ni espacios
 * @param {*} cad_arg 
 * @returns 
 */
function eliminarCaracteresRepetidos(cad_arg) {
    const ARRAY_CADENA_SIN_CARACTERES_REPETIDOS_NI_ESPACIOS = [];

    for (let i = 0; i < cad_arg.length; i++) {
        const char = cad_arg[i];

        if (!ARRAY_CADENA_SIN_CARACTERES_REPETIDOS_NI_ESPACIOS.includes(char)) {
            ARRAY_CADENA_SIN_CARACTERES_REPETIDOS_NI_ESPACIOS.push(char);
        }
    }

    return ARRAY_CADENA_SIN_CARACTERES_REPETIDOS_NI_ESPACIOS.join().replace(/[, ]/g, '');
}
console.log(eliminarCaracteresRepetidos("esto es un texto largo con caracteres repetidos y espacios"));

//#region Act 6
/**
 * funcion que nos dice si una subcadena esta contenida en otra
 * @param {*} cadena 
 * @param {*} subcadena 
 * @returns si esta contenida nos dice el primer encuentro de esta contencion, si no nos devuelve -1
 */
function esSubcadenaDeOtra(cadena = '', subcadena = '') {
    return cadena.indexOf(subcadena);
}
console.log(esSubcadenaDeOtra("hola como estas", "como")); //5
console.log(esSubcadenaDeOtra("hola como estas", "comida")); //-1

//#region Act 7
/**
 * una funcion que comprueba si una palabra es palindromo usando la tecnica de dos punteros
 * @param {*} cad_args 
 * @returns true si es palindromo false si no lo es
 */
function esPalindromo(cad_args) {
    let left = 0;
    let right = cad_args.length - 1;

    while (left < right) {
        if (cad_args[left] !== cad_args[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(esPalindromo("holiwi")); //false
console.log(esPalindromo("aojoa")); //true

//#region Act 8
/**
 * 
 * @param {*} cad_args 
 * @returns 
 */
function getNumeroDePalabrasEnTexto(cad_args = '') {
    return cad_args.trim().split(" ").length
}
console.log(getNumeroDePalabrasEnTexto("   un texto larguisimo aqui metido buah que pasada de texto nene   "));

//#region Act 9
/**
 * funcion que devuelve true o false segun si la tarjeta de creadito es valida o no
 * Condiciones:
 *  16 digitos todos numericos
 *  Al menos 2 digitos diferentes
 *  El ultimo numero debe ser par
 *  Suma de todos los numeros al menos 16
 * @param {*} card 
 */
function validateCreditCard(card) {
    if (isNaN(Number(card))) return false; //comprobar si es numerico completamente
    if ((card % 10) % 2 != 0) return false; //comprobar que el ultimo digito es par
    if (card.toString().length != 16) return false; // si tiene menos de 16 digitos false
    if ((card.toString().split("").reduce((acumulator, valor) => acumulator + Number(valor), 0)) < 16) return false; //si la suma de todo es menor a 16 
    if (card.toString().split("").every(num => num == card.toString()[0])) return false; //si todos los numeros son iguales  devolver false

    return true;
}
console.log(validateCreditCard(9999777788880000));
console.log(validateCreditCard(6666666666661666));
console.log(validateCreditCard("a92332119c011112"));
console.log(validateCreditCard(4444444444444444));
console.log(validateCreditCard(1111111111111110));
console.log(validateCreditCard(6666666666666661));

//#region Act 10
/**
 * mejora la anterior en que acepta 123-2131-312-312 guiones en el input
 * @param {*} card 
 */
function validateCreditCard2(card) {
    card = Number(card.toString().replace(/-/g, "")); //elimino los dashes de la tarjeta

    if (isNaN(card)) return false; //comprobar si es numerico completamente
    if ((card % 10) % 2 != 0) return false; //comprobar que el ultimo digito es par
    if (card.toString().length != 16) return false; // si tiene menos de 16 digitos false
    if ((card.toString().split("").reduce((acumulator, valor) => acumulator + Number(valor), 0)) < 16) return false; //si la suma de todo es menor a 16 
    if (card.toString().split("").every(num => num == card.toString()[0])) return false; //si todos los numeros son iguales  devolver false

    return true;
}
console.log(validateCreditCard2("9999-7777-8888-0000"));
console.log(validateCreditCard2("6666-6666-6666-1666"));
console.log(validateCreditCard2("a923-3211-9c01-1112"));
console.log(validateCreditCard2("4444-4444-4444-4444"));
console.log(validateCreditCard2("1111-1111-1111-1110"));
console.log(validateCreditCard2("6666-6666-6666-6661"));