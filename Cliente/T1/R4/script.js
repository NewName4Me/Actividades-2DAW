//#region Ej 1
/**
 * funcion que dado un numero indefinido de argumentos nos devuelve la suma de estos
 * @param {*} values 
 * @returns 
 */
export function sum(...values) {
    return values.reduce((acumulator, value) => acumulator + parseInt(value), 0);
}

//#region Ej 2
/**
 * funcion que dado un numero indefinido de argumentos nos devuelve la suma de estos
 * pero ignorando los valores no numericos como strings
 * @param {*} values 
 * @returns 
 */
export function sumOfAll(...values) {
    return values.reduce((acumulator, value) => {

        if (!isNaN(value)) {
            return acumulator + value;
        }

        return acumulator;
    }, 0);
}

//#region Ej 3
/**
 * una funcion que puede tomar un numero indefinido de parametros y nos dice cuantos hemos introducido
 * @param {...*} args 
 */
export function countTheArgs(...args) {
    return args.length;
}


//#region Ej 4
/**
 * funcion que nos devuelve dos arrays combinados
 * @param {*} firstArray 
 * @param {*} secondArray 
 * @returns 
 */
export function combineTwoArrays(firstArray = [], secondArray = []) {
    return [...firstArray, ...secondArray];
}


//#region Ej 5
/**
 * funcion que dado un numero indefinido de parametros nos suma los que estan en posicion par
 * @param {...*} values 
 */
export function sumEveryOther(...values) {
    return values.reduce((acumulador, value, index) => {
        if (index % 2 == 0) {
            return acumulador + value;
        }

        return acumulador;
    }, 0);
}

//#region Ej 6
/**
 * funcion que nos dice si un numero es divisible entre 0 o no
 * @param {*} number 
 */
export function divisible(number) {
    return number % 3 == 0;
}

//#region Ej 7
/**
 * funcion que nos devuelve true si dividendo es divisible entre divisor
 * @param {*} dividendo 
 * @param {*} divisor 
 * @returns 
 */
export function divisibleEntre(dividendo, divisor) {
    if (dividendo == 0) return "No se puede dividir por 0";
    return dividendo % divisor == 0;
}

//#region Ej 8
/**
 * funcion que comprueba si valor esta comprendido dentr de rangoInf y rangoSup
 * @param {*} valor 
 * @param {*} rangoInf 
 * @param {*} rangoSup 
 */
export function rango(valor, rangoInf, rangoSup) {
    return (valor >= rangoInf && valor <= rangoSup);
}

//#region Ej 9
/**
 * funcion que devuelve si un numero dado tiene o no tres digitos
 * @param {*} number 
 * @returns 
 */
export function tieneTresDigitos(number) {
    if (isNaN(parseInt(number))) return "El valor introducido no es un numero";
    return number.toString().length == 3;
}

//#region Ej 10
/**
 * funcion que nos devuelve el area de un rectangulo dada su base y altura
 * @param {*} base 
 * @param {*} altura 
 * @returns 
 */
export function areaRectangulo(base, altura) {
    return base * altura;
}

//#region Ej 11
/**
 * funcion que calcula el Indice de masa corporal de una persona dada su altura y peso
 * @param {*} weight 
 * @param {*} height 
 * @returns 
 */
export function IMC(weight, height) {
    return weight / (Math.pow(height, 2));
}

//#region Ej 12
/**
 * funcion que dado un precio y el descuento a aplicar nos calcula el precio resultante una vez aplicado el descuento
 * @param {*} originalPrice 
 * @param {*} discount 
 * @returns 
 */
export function precioFinal(originalPrice, discount) {
    return originalPrice - (originalPrice * (discount / 100));
}

//#region Ej 13
/**
 * calculamos el factorial de un numero usando recursividad
 * @param {*} number 
 * @returns 
 */
export function calularFactorial(number) {
    if (number === 1 || number === 0) return 1;
    return number * calularFactorial(number - 1);
}

//en caso de que al profesor no le gusta usar recursividad que lo entiendo perfectamente
export function calularFactorialSinRecursividad(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

//#region Pruebas
/* console.log(sum(2, 6, 7));
console.log(sumOfAll(2, 6, 7, "holw,", 5));
console.log(countTheArgs(2, 6, 7, "holw,", 5));
console.log(combineTwoArrays([1, 1, 1, 1], ["a", "c", "d"]));
console.log(sumEveryOther(1, 4, 2, 4));
console.log(divisible(3));
console.log(divisibleEntre(7, 2));
console.log(rango(6, 2, 9));
console.log(tieneTresDigitos(602));
console.log(areaRectangulo(2, 10));
console.log(IMC(70, 182));
console.log(precioFinal(100, 20));
console.log(calularFactorial(170));
console.log(calularFactorialSinRecursividad(170)); */