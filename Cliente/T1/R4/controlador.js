import { sum, sumOfAll, countTheArgs } from "./script.js";

/**
 * este bloque se encarga de ejecutar el metodo necesario en funcion de que boton pulsen
 */
document.addEventListener('DOMContentLoaded', () => {
    const BUTTONS = document.querySelectorAll('BUTTON');

    BUTTONS.forEach(button => {
        button.addEventListener('click', e => {
            const BTN_ID = e.target.id;

            switch (BTN_ID) {
                case "btn1": {
                    //#region Ej 1
                    //CALCULAR LA SUMA DE UN CONJUNTO DE NUMEROS
                    let numeroPedidoAlUsuario;
                    let listaDeDatosDelUsuario = [];

                    //pedimos datos hasta que el usuario diga stop
                    while (numeroPedidoAlUsuario != "stop") {
                        numeroPedidoAlUsuario = prompt("Dame un numero o escribe 'stop' para terminar");
                        listaDeDatosDelUsuario.push(parseInt(numeroPedidoAlUsuario));
                    }

                    //eliminamos el ultimo dato introducido dado que este sera "stop"
                    listaDeDatosDelUsuario.pop();
                    alert(`La suma total de los numeros dados es: ${sum(...listaDeDatosDelUsuario)}`);

                    break;
                }

                case "btn2": {
                    //#region Ej 2
                    //CALCULAR LA SUMA DE UN CONJUNTO DE NUMEROS ADMITIENDO PERO EVITANDO LOS STRINGS
                    let datosPedidosAlUsuario;
                    let listaDeDatosDelUsuario = [];

                    //pedimos datos hasta que el usuario diga stop
                    while (datosPedidosAlUsuario != "stop") {
                        datosPedidosAlUsuario = prompt("Dame un numero o escribe 'stop' para terminar");
                        listaDeDatosDelUsuario.push(datosPedidosAlUsuario);
                    }

                    //eliminamos el ultimo dato introducido dado que este sera "stop"
                    listaDeDatosDelUsuario.pop();
                    console.log(listaDeDatosDelUsuario);
                    alert(`La suma total de los numeros dados es: ${sumOfAll(...listaDeDatosDelUsuario)}`);

                    break;
                }

                case "btn3": {
                    //#region Ej 3
                    //DEVOLVER EL NUMERO DE PARAMETROS QUE HA INTRODUCIDO EL USUARIO
                    let parametrosDelUsuario;
                    let listaDeDatosDelUsuario = [];

                    while (parametrosDelUsuario != "stop") {
                        parametrosDelUsuario = prompt("Dame un numero o escribe 'stop' para terminar");
                        listaDeDatosDelUsuario.push(parametrosDelUsuario);
                    }

                    //eliminamos el ultimo dato introducido dado que este sera "stop"
                    listaDeDatosDelUsuario.pop();
                    alert(`En total has introducido ${countTheArgs(...listaDeDatosDelUsuario)} argumentos`);
                    break;
                }

            }
        });
    });
});