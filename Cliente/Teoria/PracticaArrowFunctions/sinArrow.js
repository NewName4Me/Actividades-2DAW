function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    return a / b;
}

function operacion(a, b, opFunction) {
    return opFunction(a, b);
}

console.log(operacion(2, 3, sumar));
console.log(operacion(2, 3, restar));
console.log(operacion(2, 3, multiplicar));
console.log(operacion(2, 3, dividir));