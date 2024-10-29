const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const operacion = (a, b, opFunction) => opFunction(a, b);

console.log(operacion(2, 3, sumar));
console.log(operacion(2, 3, restar));
console.log(operacion(2, 3, multiplicar));
console.log(operacion(2, 3, dividir));

const operacion2 = (a, b, mult = (a, b) => a * b) => mult(a, b);
console.log(operacion2(2, 3));