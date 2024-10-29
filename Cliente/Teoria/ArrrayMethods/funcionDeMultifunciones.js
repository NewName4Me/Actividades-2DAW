function modificarValores(arrayValores = [], functionOp) {
    return functionOp(arrayValores);
}

const doble = (arr = []) => arr.map(valor => valor * 2);
const incrementa = (arr = []) => arr.map(valor => valor + 1);
const resta = (arr = []) => arr.map(valor => valor - 1);

/* console.log(modificarValores([1, 2, 3], doble));
console.log(modificarValores([1, 2, 3], incrementa));
console.log(modificarValores([1, 2, 3], resta)); */

function modificarValoresFuncionUnica(arrayValores = [], functionOp) {
    const arrayDeVuelta = [];

    arrayValores.forEach(value => {
        arrayDeVuelta.push(functionOp(value));
    });

    return arrayDeVuelta;
}

const multiplicarPorDos = (v) => v * 2;
const sumarUno = (v) => v + 1;
/* console.log(modificarValoresFuncionUnica([1, 2, 3], multiplicarPorDos));
console.log(modificarValoresFuncionUnica([1, 2, 3], sumarUno));
 */


function creandoMiPropioFilter(arrayValores = [], fCondicionDeFiltrado) {
    const arrayDeVuelta = [];

    arrayValores.forEach(value => {
        if (fCondicionDeFiltrado(value)) {
            arrayDeVuelta.push(value);
        }
    });

    return arrayDeVuelta;
}

const getNumerosPares = (v) => v % 2 == 0;
const getNumbers = (v) => typeof v === 'number';

/* console.log(creandoMiPropioFilter([1, 3, 5, 6, 2], getNumerosPares));
console.log(creandoMiPropioFilter([1, null, true, "hola", 2], getNumbers)); */

const arrAlumnos = {
    nombre: 'Erik',
    grupo: "7",
    age: 25,
    notas: [4, 6],
    filtraNotasForEach: function (condicionDeFiltrado) {
        const arrVuelta = [];

        this.notas.forEach(nota => {
            if (condicionDeFiltrado(nota)) {
                arrVuelta.push(nota)
            }
        });

        return arrVuelta;
    }
};

console.log(arrAlumnos.filtraNotasForEach((v) => v > 5));
console.log(arrAlumnos.filtraNotasForEach((v) => v < 5));


