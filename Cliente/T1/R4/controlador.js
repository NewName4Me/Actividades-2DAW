import { sum } from "./script.js";

/**
 * este bloque se encarga de ejecutar el metodo necesario en funcion de que boton pulsen
 */
document.addEventListener('DOMContentLoaded', () => {
    const BUTTONS = document.querySelectorAll('BUTTON');

    BUTTONS.forEach(button => {
        button.addEventListener('click', e => {
            const BTN_ID = e.target.id;

            switch (BTN_ID) {
                case "btn1":
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

                case "btn2":
            }
        });
    });
});