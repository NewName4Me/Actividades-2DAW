export function guessNumber() {

    const NUMBER_TO_GUESS = parseInt(prompt("Jugador 1 introduce el numero secreto"));

    let GUESSED_NUMBER;

    do {
        GUESSED_NUMBER = parseInt(prompt("Intenta adivinar el numero"));

        if (NUMBER_TO_GUESS < GUESSED_NUMBER) {
            alert("Más abajo");
        } else if (NUMBER_TO_GUESS > GUESSED_NUMBER) {
            alert("Más alto");
        } else {
            alert("Bien hecho acertaste");
        }

    } while (NUMBER_TO_GUESS !== GUESSED_NUMBER);
}