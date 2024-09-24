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

            //esto deberia haberlo movido a un JSON y hacer un fetch
            //pero no queria darle más vueltas
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
                },
                "btn4": {
                    "name": "combineTwoArrays",
                    "tests": [
                        { input: [[1, 1, 1, 1], [2, 2, 2, 2]] },
                        { input: [[1, 1, 1, "b"], ["a", 2, 2]] }
                    ]
                },
                "btn5": {
                    "name": "sumEveryOther",
                    "tests": [
                        { input: [1, 4, 2, 4] },
                        { input: [1, 4, 2, 4, 4] }
                    ]
                },
                "btn6": {
                    "name": "divisible",
                    "tests": [
                        { input: [6] },
                        { input: [7] }
                    ]
                },
                "btn7": {
                    "name": "divisibleEntre",
                    "tests": [
                        { input: [6, 2] },
                        { input: [7, 3] }
                    ]
                },
                "btn8": {
                    "name": "rango",
                    "tests": [
                        { input: [6, 2, 9] },
                        { input: [2, 0, 1] }
                    ]
                },
                "btn9": {
                    "name": "tieneTresDigitos",
                    "tests": [
                        { input: [620] },
                        { input: [2] }
                    ]
                },
                "btn10": {
                    "name": "areaRectangulo",
                    "tests": [
                        { input: [20, 2] },
                        { input: [5, 1] }
                    ]
                },
                "btn11": {
                    "name": "imc",
                    "tests": [
                        { input: [70, 1.82] },
                        { input: [45, 1.54] }
                    ]
                },
                "btn12": {
                    "name": "precioFinal",
                    "tests": [
                        { input: [100, 20] },
                        { input: [50, 50] }
                    ]
                },
                "btn13": {
                    "name": "calularFactorial",
                    "tests": [
                        { input: [5] },
                        { input: [170] },
                        { input: [171] }
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
                console.log(result);
                alert(result);
            };

            H3.append(BUTTON);
        });

    }

});