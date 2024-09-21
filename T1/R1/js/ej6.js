export function replaceWhileWithFor() {
    var countdown = prompt("Introduce un numero para iniciar la cuenta atras");

    for (let i = countdown; i > 0; i--) {
        alert(i);
    }
}