const doble = (arr = []) => arr.map(valor => valor * 2);
console.log('Doble '+doble([1, 4, 5]));

/* ---------------------------- */

function dobleSinMap(arr = []) {
    const arrayDoble = [];

    arr.forEach(value => {
        arrayDoble.push(value * 2);
    });

    return arrayDoble;
}
console.log('Doble sin map '+dobleSinMap([1, 4, 5]));


/* ----------------------- */

const incrementa = (arr = []) => arr.map(valor => valor + 1);
console.log('Incrementa ' + incrementa([1, 2]));