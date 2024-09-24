export function messageBassedOnAge() {
    const age = prompt("Cuántos años tienes?");

    //Un objeto que contiene todas las condiciones dadas para evitar usar un switch
    const messageBassedOnAge = {
        "absoluto": age > 18,
        "juvenil": age >= 16 && age <= 18,
        "cadete": age >= 14 && age <= 15,
        "infantil": age >= 12 && age <= 13,
        "alevin": age >= 10 && age <= 11,
        "benjamin": age >= 8 && age <= 9,
        "Demasiado pequeño": age < 8
    }

    //comprobamos que los datos introducidos son validos
    if (isNaN(age)) {
        alert("Parámetro introducido no valido");
        return;
    };

    console.log(Object.entries(messageBassedOnAge));

    /**
     * recorremos nuestra lista de edades junto con sus condiciones y comprobamos cuando se cumple
     * nuestra condicion
     * cuando llegue dicho momento detenemos el programa
     */
    for (const [key, value] of Object.entries(messageBassedOnAge)) {
        if (value) {
            alert(key);
            return;
        }
    }
}