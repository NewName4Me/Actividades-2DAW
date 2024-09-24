export function controlParentalV2() {
    //Claves para acceder a la app
    const name = "Adolfo";
    const surname = "Suárez";

    //preguntamos al usuario y almacenamos cada palabra de su respuesta en un array para procesarlo más fácilmente
    const userInput = prompt("¿Cuál fue el primer presidente de la democracia española?");
    const userInputToArray = userInput.split(" ");

    //comprobamos que situacion hemos obtenido
    const situtationOcurred = posibleSituations(name, surname, userInputToArray);

    //ejecutamos la funcion correspondiente dependiendo de la situacion obtenida
    executeCorrespondingFunction(situtationOcurred);
}

/**
 * este metodo almacena todas las situaciones posibles en un objeto 
 * y comprueba cual se ha dado en el intento de login,despues devuelve un "String"
 * que indica cual es la funcion que ha salido como resultante
 * 
 * @param {*} name 
 * @param {*} surname 
 * @param {*} userInputToArray 
 * @returns 
 */
function posibleSituations(name, surname, userInputToArray) {
    const numeroDePalabrasClave = 2;

    const posibleSituation = {
        allRight: userInputToArray.includes(name) && userInputToArray.includes(surname),
        allWrong: !userInputToArray.includes(name) && !userInputToArray.includes(surname),
        nameRight: userInputToArray.includes(name) && userInputToArray.length != numeroDePalabrasClave,
        surnameRight: userInputToArray.includes(surname) && userInputToArray.length != numeroDePalabrasClave,
    }

    //recorremos la lista de situaciones y vemos cual se da 
    for (const [key, value] of Object.entries(posibleSituation)) {
        if (value) {
            return key;
        }
    }

    return null;
}

/**
 * esta funciones recibe la situacion obtenida y ejecuta el metodo correspondiente en base a esta
 * 
 * @param {*} situation 
 */
function executeCorrespondingFunction(situation) {
    switch (situation) {
        case "allRight": allRight(); break;
        case "allWrong": allWrong(); break;
        case "nameRight": nameRight(); break;
        case "surnameRight": surnameRight(); break;
        default: ErrorFunction(); break;
    }
}

//Lista de posibles situaciones
function allRight() {
    alert("Bienvenido");
}

function allWrong() {
    alert("ERROR");
    //volvemos a empezar
    controlParentalV2();
}

function nameRight() {
    alert("Te falta el apellido");
    controlParentalV2();
}

function surnameRight() {
    alert("Te falta el nombre");
    controlParentalV2();
}

function ErrorFunction() {
    console.log("Método insertado en la lista de posibles situaciones desconocido");
}