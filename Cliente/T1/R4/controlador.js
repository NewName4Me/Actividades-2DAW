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

            const testDeCadaFuncion = {
                "btn1": {
                    "name": "sum",
                    "tests": [
                        { input: [2, 6, 7] },
                        { input: [2, 6, -1] }
                    ]
                },
                "btn2": {
                    "name": "sumOfAll",
                    "tests": [
                        { input: [2, 6, 7, "hola"] },
                        { input: [2, 6, "testin", -1] }
                    ]
                },
                "btn3": {
                    "name": "countTheArgs",
                    "tests": [
                        { input: [2, 6, 7, "holiwi", "5"] },
                        { input: ["0", true, 5] }
                    ]
                }
            }

            //ejecutamos la funcion correspondiente
            PRE.textContent = funcionesQueDebeMostrarCadaBoton[BTN_ID].toString();

            addButtonsFOrTest(testDeCadaFuncion[BTN_ID], funcionesQueDebeMostrarCadaBoton[BTN_ID]);

        });
    });

    /**
     * funcion que ejecuta añade los botones al DOM con las propiedades necesarias para poder ejecutar dichos metodos
     * @param {*} funcionesTests 
     * @param {*} funcionAEjecutar le pasamos una funcion para asi poderle dar el atributo al boton para ejecutarla
     */
    function addButtonsFOrTest(funcionesTests, funcionAEjecutar) {
        const H3 = document.querySelector('h3');

        const { name, tests } = funcionesTests;

        //recorremos todos los tests que tenemos almacenados
        tests.forEach(test => {
            const { input } = test;
            const BUTTON = document.createElement('BUTTON');

            BUTTON.textContent = `${name}(${input})`;

            //añadimos a cada boton un evento que ejecute la funcion necesaria
            BUTTON.onclick = () => {
                const result = funcionAEjecutar(...input);
                alert(result);
            };

            H3.append(BUTTON);
        });

    }

});