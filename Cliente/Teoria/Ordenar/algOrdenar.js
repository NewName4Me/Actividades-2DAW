function ordenarListaMayorAMenor(array = []) {
    const arrayOrdenado = [];

    while (array.length > 0) {
        const maxNumber = getMaxNumber(array);
        arrayOrdenado.push(maxNumber);
        array.splice(array.indexOf(maxNumber), 1);
    }

    return arrayOrdenado;
}

function getMaxNumber(arr){
    return Math.max(...arr);
}

console.log(ordenarListaMayorAMenor([5,2,7,1,9]));
