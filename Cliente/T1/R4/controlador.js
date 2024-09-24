import {
    sum, sumOfAll, countTheArgs,
    combineTwoArrays, sumEveryOther,
    divisible, divisibleEntre, rango,
    tieneTresDigitos, areaRectangulo, IMC,
    precioFinal, calularFactorial
} from "./script.js";

/**
 * este bloque se encarga de ejecutar el metodo necesario en funcion de que boton pulsen
 */
document.addEventListener('DOMContentLoaded', () => {
    const BUTTONS = document.querySelectorAll('BUTTON');

    BUTTONS.forEach(button => {
        button.addEventListener('click', e => {
            const BTN_ID = e.target.id;
            const PRE = document.querySelector('PRE');

            //Limpiar el contenido innecesario
            const SECTION = document.querySelector('SECTION');
            SECTION.innerHTML = '';

            const functionsQueDebeEjecutarCadaBoton = {
                "btn1": sum,
                "btn2": sumOfAll,
                "btn3": countTheArgs,
                "btn4": combineTwoArrays,
                "btn5": sumEveryOther,
                "btn6": divisible,
                "btn7": divisibleEntre,
                "btn8": rango,
                "btn9": tieneTresDigitos,
                "btn10": areaRectangulo,
                "btn11": IMC,
                "btn12": precioFinal,
                "btn13": calularFactorial,
            }

            //ejecutamos la funcion correspondiente
            PRE.textContent = functionsQueDebeEjecutarCadaBoton[BTN_ID].toString();

        });
    });
});