export function showListOfHours() {
    let initialHours = 9;
    let initialMinutes = 0;
    let finalHour = 21;
    let finalMinute = 30;

    let isHalfHour = false;

    //el bucle se repetira hasta que nos pasemos de la hora, como vamos de 30 en 30 no es necesario chequear los minutos
    for (let i = initialHours; i <= finalHour; i = initialHours) {
        formatHours(initialHours, initialMinutes);

        //cambiamos los minutos entre 30 y 0 cada iteracion y solo aumentamos las horas cuando ya fueron y media
        if (!isHalfHour) {
            initialMinutes = 30;
        } else {
            initialMinutes = 0;
            initialHours++;
        }

        //invertimos el valor de si estamos a y media o no
        isHalfHour = !isHalfHour;

    }
}

//funcion que muestra la lista de horas justo debajo del boton
function formatHours(hours, minutes) {
    let salida = `${hours}:${minutes}`;

    document.write(salida + "<br>");
}