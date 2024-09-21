import { callsCheckOperationResult } from './js/ej1.js';
import { checkUnderAge } from './js/ej2.js';
import { messageBassedOnAge } from './js/ej3.js';
import { showListOfHours } from './js/ej4.js';
import { testCodeNotOriginal, testCodeOriginal } from './js/ej5.js';
import { replaceWhileWithFor } from './js/ej6.js';
import { controlParental } from './js/ej7.js';
import { controlParentalV2 } from './js/ej8.js';

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button');

    //hago que todos los botones necesarios cuando sean clickeados ejecuten la funcion que les corresponda
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const btnId = e.target.id;

            //cada boton tiene asignado una funciona a ejecutar, de esta forma lo asignamos
            const funcionesQueDebeEjecutarCadaBoton = {
                "btn1": callsCheckOperationResult,
                "btn2": checkUnderAge,
                "btn3": messageBassedOnAge,
                "btn4": showListOfHours,
                "btn5.1": testCodeOriginal,
                "btn5.2": testCodeNotOriginal,
                "btn6": replaceWhileWithFor,
                "btn7": controlParental,
                "btn8": controlParentalV2
            }

            //ejecutamos el codigo correspondiente
            funcionesQueDebeEjecutarCadaBoton[btnId]();
        });
    })
});