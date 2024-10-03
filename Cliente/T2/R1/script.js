/**
 * una funcion que determina el numero de dias resetantes hasta las vacaciones de navidad
 * 19 de diciembre
 */
function daysUntilHolidays() {
    const HOLIDAYS_FORMATED = new Date(`${new Date().getFullYear()}-12-19`);
    const CURRENT_DATE = new Date();

    const DIFERENCIA = HOLIDAYS_FORMATED.getTime() - CURRENT_DATE.getTime();

    return DIFERENCIA / (1000 * 60 * 60 * 24);
}

/**
 * una funcion que dado nuestro cumpleaños nos dice el numero de veces que nuestro cumpleaños cayo en domingo
 * @param {*} birthday 
 * @returns counter
 */
function everyYearMyBirthdayTookOnSunday(birthday = '2000-1-1') {
    const START_YEAR = new Date(birthday).getFullYear();
    const END_YEAR = new Date().getFullYear();

    let counter = 0;

    for (let i = START_YEAR; i <= END_YEAR; i++) {
        const BIRTHDAY_FORMATED = new Date(`${i}-${birthday.split('-')[1]}-${birthday.split('-')[2]}`);
        if (BIRTHDAY_FORMATED.getDay() === 0) {
            counter++;
        }
    }

    return counter;
}

function displayTime() {
    const myDate = new Date();

    const HORAS = myDate.getHours();
    const MINUTOS = myDate.getMinutes();
    const SEGUNDOS = myDate.getSeconds();

    return {
        "detallada": `${HORAS} : ${MINUTOS} : ${SEGUNDOS}`,
        "noDetallada": `Son las ${HORAS}h y ${MINUTOS}m`
    }
}

/**
 * una funcion que nos pregunta nuestro datos y nos indica el tiempo tardado en responder
 */
function countTimeToAnswer() {
    const CURRENT_SECOND = new Date().getTime();


    prompt("Nombre y apellido");


    const FINISH_SECOND = new Date().getTime();

    return (FINISH_SECOND - CURRENT_SECOND) / 1000 + "s";
}

/**
 * una funcion que contiene varias funciones como 
 * elevar a, cuadrado, redondear, sin cosenos etc
 */
function variousOperation() {
    return {
        powerOf: function (base, power) {
            return Math.pow(base, power);
        },
        sqrtOf: function (number) {
            if (number < 0) throw new Error("Números menores a 0 no disponibles");
            return Math.sqrt(number);
        },
        roundCeilAndFloorOf: function (number) {
            return {
                "round": Math.round(number),
                "floor": Math.floor(number),
                "ceil": Math.ceil(number)
            };
        },
        sinCosAndTanOf: function (angle) {
            return {
                "sin": Math.sin(angle),
                "cos": Math.cos(angle),
                "tan": Math.tan(angle)
            };
        }
    };
}

/**
 * una funcion que hace operaciones varias con nuestro nombre completo dentro de otras funciones, como 
 * darnos la longitud, devolverlo divido en array, convertirlo a mayuscula o minuscula
 */
function variosOperationsWithString() {
    return {

        fullNameLength: function (fullName) {
            return fullName.replace(" ", "").trim().length;
        },

        lowerAndUpperCase: function (fullName) {
            return {
                "lower": fullName.toLowerCase(),
                "upper": fullName.toUpperCase()
            }
        },

        divideFullName: function (fullName) {
            return fullName.split(" ");
        }
    }
}

/**
 * una funcion que nos devuelve el numero más alto dentro de un grupo
 * @param  {...any} args 
 * @returns 
 */
function returnHighest(...args) {
    let HIGHEST_NUMBER = Number.MIN_SAFE_INTEGER;

    args.forEach(arg => {
        if (arg > HIGHEST_NUMBER) HIGHEST_NUMBER = arg;
    });
    return HIGHEST_NUMBER;

    console.log('Otra forma interesante es Math.max(...args)');
}

/**
 * una funcion que nos dice cuantas veces aparece la letra a
 */
function howManyTimesDoesAppear(text) {
    return text.length - text.replace(/a/g, "").length;
}

/**
 * una funcion que dado un  texto nos dice cuantas vocales tiene
 */
function howManyVowelsInText(text) {
    const VOCALES = ["a", "e", "i", "o", "u"];
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        if (VOCALES.includes(text[i])) counter++;
    }

    return counter;
}

/**
 * una funcion que nos dice cuantas veces se repite cada vocal
 * @param {*} text 
 */
function howManyTimesEachVowel(text) {
    const VOWELS_COUNTER = new Map();

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();

        if (["a", "e", "i", "o", "u"].includes(char)) {
            VOWELS_COUNTER.set(char, (VOWELS_COUNTER.get(char) || 0) + 1);
        }
    }

    return VOWELS_COUNTER;
}

/**
 * una funcion que nos da la vuelta a una cadena de texto
 */
function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log(daysUntilHolidays());
console.log(everyYearMyBirthdayTookOnSunday('2003-03-14'));
/* console.log(countTimeToAnswer()); */
console.log(howManyTimesDoesAppear("aweaaabo"));
console.log(howManyVowelsInText("anoche"));
console.log(howManyTimesEachVowel("anoche a"));
console.log(reverseString("hole"));
