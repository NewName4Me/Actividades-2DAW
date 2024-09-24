export function testCodeOriginal() {
    var countdown = prompt("Introduce un numero para iniciar la cuenta atras");

    while (countdown > 0) {
        alert(countdown + "...");
        countdown--;
    }
}

export function testCodeNotOriginal() {
    var countdown = prompt("Introduce un numero para iniciar la cuenta atras");

    while (countdown > 0) {
        alert(countdown + "...");
        countdown++;
    }
}