//#region Ej1
const NumeroDeEnlaces = document.querySelectorAll('a');
console.log(`Numero de enlaces ${NumeroDeEnlaces.length}`);

const penultimoEnlace = document.querySelectorAll('a');
console.log(penultimoEnlace[penultimoEnlace.length - 2].getAttribute('href'));

const enlacesAGoogle = document.querySelectorAll('a[href*="google"]');
console.log(`Numero de enlaces que enlazan a google ${enlacesAGoogle.length}`);

const enlacesTercerParrafo = document.querySelectorAll('p:nth-child(3) a');
console.log(`Numero de enlaces del tercer párrafo ${enlacesTercerParrafo.length}`);

