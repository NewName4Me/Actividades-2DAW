import {
    sum, sumOfAll, countTheArgs,
    combineTwoArrays, sumEveryOther,
    divisible, divisibleEntre, rango,
    tieneTresDigitos, areaRectangulo, imc,
    precioFinal, calularFactorial
} from "./script.js";

/**
 * este bloque se encarga de ejecutar el metodo necesario en funcion de que boton pulsen
 */
document.addEventListener('DOMContentLoaded', () => {
    const BUTTONS = document.querySelectorAll('BUTTON');

    BUTTONS.forEach(button => {
        button.addEventListener('click', e => {
            //tomamos el id del boton pulsado
            const BTN_ID = e.target.id;

            //mostramos el contenido con el codigo y las pruebas
            const CONTENEDOR_TEST = document.querySelector('.contenedorTest');
            CONTENEDOR_TEST.style.display = 'block';

            const PRE = document.querySelector('PRE');

            //Limpiar el contenido innecesario
            const SECTION = document.querySelector('SECTION');
            SECTION.innerHTML = '';

            //Objeto que relaciona cada boton con el metodo que debe ejecutar
            const funcionesQueDebeMostrarCadaBoton = {
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
                "btn11": imc,
                "btn12": precioFinal,
                "btn13": calularFactorial,
            }

            // Definimos el objeto test, puede que fuera mejor usar un json ,pero no quiero liarla más
            const testDeCadaFuncion = {
                "btn1": {
                    "sum": [1, 5, 7],
                    "sum2": [1, 5, 7, 2],
                },
                "btn2": {
                    "sumOfAll": [2, 6, 7, "hola"],
                    "sumOfAll2": [2, 6, "testin", -1]
                },
                "btn3": {
                    "countTheArgs": [2, 6, 7, "holiwi", "5"],
                    "countTheArgs2": ["0", true, 5]
                },
                "btn4": {
                    "combineTwoArrays": [[1, 1, 1, 1], [2, 2, 2, 2]],
                    "combineTwoArrays2": [[1, 1, 1, "b"], ["a", 2, 2]]
                },
                "btn5": {
                    "sumEveryOther": [1, 4, 2, 4],
                    "sumEveryOther2": [1, 4, 2, 4, 4]
                },
                "btn6": {
                    "divisible": [6],
                    "divisible2": [7]
                },
                "btn7": {
                    "divisibleEntre": [6, 2],
                    "divisibleEntre2": [7, 3]
                },
                "btn8": {
                    "rango": [6, 2, 9],
                    "rango2": [2, 0, 1]
                },
                "btn9": {
                    "tieneTresDigitos": [620],
                    "tieneTresDigitos2": [2]
                },
                "btn10": {
                    "areaRectangulo": [20, 2],
                    "areaRectangulo2": [5, 1]
                },
                "btn11": {
                    "imc": [70, 1.82],
                    "imc2": [45, 1.54]
                },
                "btn12": {
                    "precioFinal": [100, 20],
                    "precioFinal2": [50, 50]
                },
                "btn13": {
                    "calularFactorial": [5],
                    "calularFactorial2": [170],
                    "calularFactorial3": [171]
                }
            };

            //ejecutamos la funcion correspondiente
            PRE.textContent = funcionesQueDebeMostrarCadaBoton[BTN_ID].toString();

            addTestExamples(testDeCadaFuncion[BTN_ID], funcionesQueDebeMostrarCadaBoton[BTN_ID]);
        });
    });

    /**
     * función que muestra los ejemplos de prueba y sus resultados
     * @param {*} funcionesTests 
     * @param {*} funcionAEjecutar 
     */
    function addTestExamples(funcionesTests, funcionAEjecutar) {
        const ZONA_DE_TEST = document.querySelector('.zonaDeTest');

        // Limpiamos el contenido previo de resultados
        ZONA_DE_TEST.innerHTML = '';

        // Recorremos todos los tests y mostramos el resultado
        Object.keys(funcionesTests).forEach(funcName => {
            //buscamos la funcion con la que debamos trabajar en este caso para tomar sus argumentos
            const args = funcionesTests[funcName];

            //le pasamos los parametros necesarios
            const result = funcionAEjecutar(...args);

            //dar formato a como mostramos los elemntos p
            const resultText = document.createElement('p');
            resultText.textContent = `${funcName}(${args}) => Resultado: ${result}`;

            //añadir al DOM
            ZONA_DE_TEST.appendChild(resultText);
        });
    }

});
