/**
 * una funcion que toma un numero indefinido de parametros y nos devuelve los valores unicos
 * @param  {...any} values 
 * @returns 
 */
function onlyUniques(...values) {
    return [...new Set(values)];
}

/**
 * funcion que elimina duplicados y nos devuelve un array usando filter e indexOf
 * @param  {...any} values 
 * @returns 
 */
function onlyUniquesUsingFilter(...values) {
    return values.filter((value, index) => values.indexOf(value) == index);
}

/**
 * funcion que nos dado un numero indefinido de parametros nos devuelve los valores unicos de este
 * @param  {...any} values 
 * @returns 
 */
function onlyUniquesUsingArray(...values) {
    let uniqueValues = [];

    values.forEach(value => {
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
        }
    });

    return uniqueValues;
}

/**
 * una funcion que toma un numero indefinido de parametros y nos devuelve la suma de todos estos al cuadrado
 * @param  {...any} values 
 * @returns 
 */
function squareAndSum(...values) {
    return values.reduce((acumulator, value) => acumulator + Math.pow(value, 2), 0);
}

console.log(onlyUniques(5, 3, 6, 5, 3));
console.log(onlyUniquesUsingFilter(5, 3, 6, 5, 3));
console.log(onlyUniquesUsingArray(5, 3, 6, 5, 3));
console.log(squareAndSum(2, 4, 3));