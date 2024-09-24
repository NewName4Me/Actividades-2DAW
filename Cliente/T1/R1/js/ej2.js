export function checkUnderAge() {
    const age = prompt('Cuántos años tienes?');

    //prevenimos error de alguien cuyos datos insertados no tienen sentido
    if (age < 0 || isNaN(age)) {
        alert("Eso no es posible");
        return;
    }

    alert(age >= 18 ? "Eres mayor de edad" : "Eres menor de edad");
}