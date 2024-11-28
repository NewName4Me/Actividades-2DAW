//#region Global Variables
const board = document.getElementById('board');
const remainingLives = document.getElementById('remainingLives');

document.addEventListener('DOMContentLoaded', startApp);

//region Start App
/**
 * @description funcion que controla que funciones se deben ejecutar al momento de cargar la pagina y agregar los event listeners
 * necesarios
 */
function startApp() {
    let listOfRandomColors = generateListOfRandomColors();
    createContainerForEachColor(listOfRandomColors, board);

    board.addEventListener('click', e => {
        if (e.target.classList.contains('color')) {
            checkIfUserWon(e);
        }
    });
}

//#region Generate List 
/**
 * @description funcion que genera un array con colores aleatorios
 * @param {number} amounOfNumbers - Cantidad de colores a generar
 */
function generateListOfRandomColors(amounOfNumbers = 6) {
    const list = [];

    // iterar hasta que el array tenga la cantidad de colores pedidos
    for (let i = 0; i < amounOfNumbers; i++) {
        list.push(generateRandomColor());
    }

    return list;
}

//#region Display Choosen Color
/**
 * @description funcion que muestra el color seleccionado en el span con el id choosenColor
 * @param {HTMLElement} color - elemento que contiene el color 
 */
function displayChoosenColor(color) {
    const colorToDisplay = color.getAttribute('data-color');

    const choosenColorContainer = document.getElementById('choosenColor');
    choosenColorContainer.textContent = colorToDisplay;
}

//#region Create Color Container 
/**
 * @description funcion que crea un contenedor para cada color del array y lo agrega al contenedor
 * @param {array} list - array con los colores a crear
 * @param {HTMLElement} container - contenedor donde se van a agregar los elementos
 */
function createContainerForEachColor(list = [], container) {

    const frament = document.createDocumentFragment();

    // iterar sobre cada color del array y crear un contenedor para cada uno
    list.forEach(color => {
        const div = document.createElement('DIV');
        div.style.background = color;
        div.classList.add('color');
        div.setAttribute('data-color', color);

        frament.appendChild(div);
    });

    const choosenColor = chooseRandomColorAsSelected(list);
    frament.children[choosenColor].setAttribute('data-choosen', true);
    displayChoosenColor(frament.childNodes[choosenColor]);

    container.appendChild(frament);
}

//#region Get Choosen Color
/**
 * @description funcion que elige un color del array como el seleccionado
 * @param {array} list - array con los colores a elegir
 */
function chooseRandomColorAsSelected(list = []) {
    return Math.floor(Math.random() * list.length - 1);
}

//#region Check User Won
/**
 * @description funcion que chequea si el usuario gano o no
 * @param {Event} e - evento que se lanzo al hacer click en algun color
 */
function checkIfUserWon(e) {
    const messageResult = document.getElementById('messageResult');

    if (checkColorIRightOne(e)) {
        // si el usuario gano
        messageResult.textContent = 'Ganaste';
        messageResult.style.color = 'green';
        setTimeout(() => {
            location.reload();
        }, 1000);

    } else {

        // si el usuario perdi o
        messageResult.textContent = 'Error';
        messageResult.style.color = 'red';
        setTimeout(() => {
            messageResult.textContent = '';
        }, 500);
        remainingLives.textContent = Number(remainingLives.textContent) - 1;

        // chequear si el usuario se quedo sin vidas
        checkNumberOfLives(Number(remainingLives.textContent));
    }
}

/**
 * @description funcion que chequea si el usuario ya no tiene vidas
 * @param {number} lives - numero de vidas restantes
 */
function checkNumberOfLives(lives) {
    if (lives <= 0) {
        // si el usuario ya no tiene vidas, terminar el juego
        alert('Se termino');

        location.reload();
    }
}

//#region Check color Right
/**
 * @description funcion que chequea si el usuario gano o no
 * @param {Event} e - evento que se lanzo al hacer click en algun color
 */
function checkColorIRightOne(e) {
    return e.target.getAttribute('data-choosen');
}

//#region Get Random Color
/**
 * @description funcion que devuelve un color aleatorio
 */
function generateRandomColor() {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);

    return `rgb(${redValue},${greenValue},${blueValue})`;
}


