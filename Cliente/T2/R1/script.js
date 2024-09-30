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

/**
 * una funcion que nos pregunta nuestro datos y nos indica el tiempo tardado en responder
 */
function countTimeToAnswer() {
    const CURRENT_SECOND = new Date().getTime();

    setTimeout(() => {
        /* aqui estara la logica de preguntar al usuario */
    }, 2000);

    const FINISH_SECOND = new Date().getTime();

    return (CURRENT_SECOND - FINISH_SECOND);
}

/**
 * una funcion que contiene varias funciones como 
 * elevar a, cuadrado, redondear, sin cosenos etc
 */
function variousOperation() {
    function powerOf(base, power) {
        return Math.pow(base, power);
    }

    function sqrtOf(number) {
        if (number < 0) throw new Error("Numeros menos a 0 no disponibles");
        return Math.sqrt(number);
    }

    function roundCeilAndFloorOf(number) {
        return {
            "round": Math.round(number),
            "floor": Math.floor(number),
            "ceil": Math.ceil(number)
        }
    }

    function sinCosAndTanOf(angle) {
        return {
            "sin": Math.sin(angle),
            "cos": Map.cos(angle),
            "tan": Math.tan(angle)
        }
    }
}

/**
 * una funcion que hace operaciones varias con nuestro nombre completo dentro de otras funciones, como 
 * darnos la longitud, devolverlo divido en array, convertirlo a mayuscula o minuscula
 */
function variosOperationsWithString() {
    function fullNameLength(fullName) {
        return fullName.replace(" ", "").trim().length;
    }

    function lowerAndUpperCase(fullName) {
        return {
            "lower": fullName.toLowerCase(),
            "upper": fullName.toUpperCase()
        }
    }

    function divideFullName(fullName) {
        return fullName.split(" ");
    }

    console.log(fullNameLength("der dea "));
    console.log(lowerAndUpperCase("dwDdwadDDAWD "));
}

/**
 * una funcion que nos devuelve el numero más alto dentro de un grupo
 * @param  {...any} args 
 * @returns 
 */
function returnHighest(...args) {
    const HIGHEST_NUMBER = Number.MIN_SAFE_INTEGER;

    args.forEach(arg => {
        if (arg > HIGHEST_NUMBER) HIGHEST_NUMBER = arg;
    });

    return HIGHEST_NUMBER;
}

/**
 * una funcion que nos dice cuantas veces aparece la letra a
 */
function howManyTimesDoesAppear(text) {
    return text.length - text.replace(/a/g, "").length;
}

console.log(daysUntilHolidays());
console.log(everyYearMyBirthdayTookOnSunday());
console.log(countTimeToAnswer());
console.log(howManyTimesDoesAppear("aweaaabo"));
