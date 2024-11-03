//#region Ej1
const sum = (num1, num2) => num1 + num2;
const stringLenght = str => console.log(`The length of "${str}" is: ${str.length} `);
const stringLenghtV2 = (str = '') => {
    const { length } = str;
    console.log(`The length of "${str}" is: ${length} `);
    return length;
}
let alerts = ["Hey, you are awesome",
    "You are so wonderful",
    "What a marvel you are",
    "You're so lovely",
    "You're so sweet that I'd think you're a sweet potato-- and I LOOOOVE POTATOES"];
const showAlert = (name) => alert(alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`);

//#region Ej2
const saludarNombreEdad = (name = '', age) => `Hello, I am ${name}, and I am ${age} years old`;

//#region Ej3
const sumOfIntegers = (arr = []) => arr.reduce((acumulator, valor) => acumulator + valor, 0);

//region Ej4
let eye = "eye";
const fire = () => `bulls-`;

//region Ej9
const fibonacci = (n) => n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);