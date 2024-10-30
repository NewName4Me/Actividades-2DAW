//#region Ej1
/**
* @name filterNumbersGreaterThan
* @description Filtra los números de un array que sean mayor a cierto número
x dejando solo los que sean menores a este
*
* @param {number[]} numbers - Array de números a filtrar
* @param {number} filter - Número a partir del cuál filtrar los demás número
s
* @returns {Number[]} - Array de números filtrados menores a {filter}
*
* @example
* filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
*/
const filterNumbersGreaterThan = (numbers = [], filter) => numbers.filter(valor => valor < filter);

/* console.log(filterNumbersGreaterThan([1,4,2,6,3],3)); */

//#region Ej2
/**
* @name toHackerSpeak
* @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que
transformar las "a" en 4, las "e" en 3, las "i"
* en 1, las "o" en 0 y las "s" en 5
*
* @param {string} text
* @returns {String} - El texto convertido a "Hacker Speak"
*
* @example
* toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
*/
const toHackerSpeak = (text = '') => {
    const mapConversion = {
        "a": 4,
        "e": 3,
        "i": 1,
        "o": 0,
        "s": 5,
    };

    //recorremos cada caracter y comprobamos si coincide con alguno de nuestro objeto de conversion
    return text.split('').map(char => {
        const key = char.toLowerCase();
        return key in mapConversion ? mapConversion[key] : char;
    }).join('');
}
/* console.log(toHackerSpeak("I'm a hacker now")); */

//#region Ej3
/**
* @name getFileExtension
* @description Obtiene la extensión de un archivo
*
* @param {string} file - El nombre del archivo a obtener la extensión
* @returns {String} - La extensión del archivo
*
* @example
* getFileExtension("imagen.jpg") // returns "jpg"
*/
const getFileExtension = (file = '') => file.split('.').pop();

/* console.log(getFileExtension('imagen.jpg'));*/

//#region Ej4
/**
* @name flatArray
* @description Dado un array 2D, devuelve un array 1D que contiene todos los
ítems
*
* @param {[][]} arr - Array 2D a "aplanar"
* @returns {[]} - El array "aplanado"
*
* @example
* flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
*/
const flatArray = (arr = [[]]) => arr.flat(Number.MAX_SAFE_INTEGER);

/* console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]));
 */

//region Ej5
/**
* @name countLetter
* @description Devuelve la cantidad de veces que una letra aparece en un str
ing
*
* @param {string} letter - Letra a contar
* @param {string} text - Texto sobre el que realizar la cuenta de {letter}
* @returns {Number} - Número de veces que aparece {letter} en {text}
*
* @example
* countLetter("a", "javascript") // returns 2
*/
const countLetter = (letter = '', text = '') => text.length - text.replace(new RegExp(letter, 'g'), '').length;
/* console.log(countLetter("a", "javascript"));
 */
//#region EJ6
/**
* @name removeWords
* @description Dado un string y un array de palabras a remover, devuelve el
string sin las palabras removidas
*
* @param {string} str - Texto a recortar
* @param {string[]} words - Palabras a remover
* @returns {string} - Texto resultante con las palabras removidas
*
* @example
* removeWords("This is a really bad test", ["really", "bad"]) // returns
"This is a test"
*/
const removeWords = (str = '', words = []) => str.split(' ').filter(w => !words.includes(w)).join(' ');
console.log(removeWords("This is a really bad test", ["really", "bad"]));