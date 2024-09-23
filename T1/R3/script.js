/**
 * dado el año actual calculas las 2 posibles edades de un usuario 
 * dada su fecha de nacimiento
 * 
 * @param {*} user_year  la edad de nuestro usuario
 */
function ageCalculator(user_year) {
    //tomar el año actual
    const CURRENT_YEAR = new Date().getFullYear();

    //calcular las 2 posibles edades
    const POSSIBLE_AGE = CURRENT_YEAR - user_year;
    const POSSIBLE_AGE_MINUS_ONE = POSSIBLE_AGE - 1;

    //mensaje que mostramos a nuestro usuairo
    const MESSAGE = `You are either ${POSSIBLE_AGE} or ${POSSIBLE_AGE_MINUS_ONE}`;

    return MESSAGE;
}

/**
 * funcion que nos determina cuanto nos van a durar unos suministros en base a 
 * una estimación de cuanto tiempo vamos a vivir y cuanto consumimos dicho suministro al dia
 * 
 * @param {*} current_age 
 * @param {*} estimated_consume
 * @param {*} maximun_age  
 */
function supplyCalculator(current_age, maximun_age, estimated_consume) {
    const DAYS_REAMINING = (maximun_age - current_age) * 365;
    const LIFE_SUPPLY_CONSUME = DAYS_REAMINING * estimated_consume;
    const MESSAGE = `You will need ${LIFE_SUPPLY_CONSUME} to last until the ripe old age of ${maximun_age}`;

    return MESSAGE;
}

/**
 * una funcion que nos calcula el area y perimetro de una circunferencia dado su radio
 * @param {*} radius 
 */
function theGeometrizer(radius) {

    //funcion que calcula el perimetro
    const calculateCircumference = () => {
        const PERIMETER = 2 * Math.PI * radius;
        const MESSAGE = `The circumference is ${PERIMETER}`;

        return MESSAGE;
    };

    //funcion que calcula el area
    const calculateArea = () => {
        const AREA = Math.PI * Math.pow(radius, 2);
        const MESSAGE = `The area is ${AREA}`;

        return MESSAGE;
    };

    //muestro todos los calculos realiados
    return {
        circumference: calculateCircumference(),
        area: calculateArea()
    }
}

/**
 * funcion que nos convierte una temperatura dada en celsius o fahrenheit y nos la convierte a la contraria
 * @param {*} temperature 
 * @param {*} unit 
 */
function convertTemperature(temperature, unit) {
    //vemos que quiere hacer el usuario
    const TEMPERATURE_UNITS = {
        CELSIUS: 'celsius',
        FAHRENHEIT: 'fahrenheit'
    };

    //segun la unidad de temperatura que haya escodigo el usuario ejecutamos un bloque u otro
    switch (unit) {
        case TEMPERATURE_UNITS.CELSIUS:
            const FAHRENHEIT = temperature * 9 / 5 + 32;
            return `${temperature}C is ${FAHRENHEIT}F`;

        case TEMPERATURE_UNITS.FAHRENHEIT:
            const CELSIUS = (temperature - 32) * 5 / 9;
            return `${temperature}F is ${CELSIUS}C`;

        default:
            throw new Error('Debes proporcionar una unidad de temperatura valida');
    }
}

/* console.log(ageCalculator(2003));
console.log(supplyCalculator(21, 100, 2));
console.log(theGeometrizer(2));
console.log(convertTemperature(32, 'fahrenheit'));
console.log(convertTemperature(0, 'celsius')); */