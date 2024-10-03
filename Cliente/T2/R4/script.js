//#region Act 1
function getRandomBetween0And1() {
    return Math.random();
}
/* console.log(getRandomBetween0And1());
 */
function getRandomBetween100and200() {
    return Math.random() * (200 - 100) + 100;
}
/* console.log(getRandomBetween100and200());
 */
function getRandomBetweenTwoValues(max, min) {
    //previene que si los ponen del reves tambien lo haga correctamente
    return Math.random() * (Math.abs(max - min)) + Math.min(max, min);
}
/* console.log(getRandomBetweenTwoValues(3, 2));
 */
//#region Act 2
function calculateSinCosAndTan(angle) {
    return {
        "cos": Math.cos(angle),
        "sin": Math.sin(angle),
        "tan": Math.tan(angle)
    }
}
/* console.log(calculateSinCosAndTan(20));
 */
//#region Act 3
function calculateHypotenus(cat1, cat2) {
    return Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
}
/* console.log(calculateHypotenus(6, 8));
 */
//#region Act 4
function askValuesForTriangle() {
    do {
        const CAT1 = prompt("Primer cateto");
        const CAT2 = prompt("Segundo cateto");

        if (CAT1 === "" || CAT2 === "") {
            break;
        }

        alert(calculateHypotenus(Number(CAT1), Number(CAT2)))
    } while (true);
}

//#region Act 5
function solveSecondGradeEcuation(coeficienteCuadratico = 0, coeficienteLineal = 0, constante = 0) {
    const CUADRADO = Math.pow(coeficienteLineal, 2) - (4 * coeficienteCuadratico * constante);

    if (CUADRADO < 0) {
        return "Sin solución Real";
    }

    const raizCuadrada = Math.sqrt(CUADRADO);

    return {
        "PrimeraSolucion": (-coeficienteLineal + raizCuadrada) / (2 * coeficienteCuadratico),
        "SegundaSolucion": (-coeficienteLineal - raizCuadrada) / (2 * coeficienteCuadratico)
    }
}
/* console.log(solveSecondGradeEcuation(2, 1, 1)); //sin solucion real
console.log(solveSecondGradeEcuation(2, 3, 1)); //sin solucion real
 */
//#region Act 6
function calcularPotencias(base, potencia) {
    return Math.pow(base, potencia);
}
/* console.log(calcularPotencias(2, 3));
 */
//#region Act 7
function numeroAscendenteConSuSeno(start, finish) {
    const TABLE = [];

    while (start <= finish) {
        TABLE.push(
            { numero: start, seno: Math.sin(start) }
        );
        start++;
    }

    console.table(TABLE);
    return TABLE;
}
/* numeroAscendenteConSuSeno(1, 10);
 */
//#region Act 8
function loadRandomImg() {
    const URL_OF_IMG = [
        "./public/img1.png",
        "./public/img2.png",
        "./public/img3.png",
    ];

    const RANDOM_NUMBER = Math.floor(Math.random() * URL_OF_IMG.length);

    return URL_OF_IMG[RANDOM_NUMBER];
}
/* console.log(loadRandomImg());
 */