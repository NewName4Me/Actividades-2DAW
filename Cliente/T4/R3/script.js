//#region Global Variables
const board = document.getElementById('board');
const remainingLives = document.getElementById('remainingLives');

document.addEventListener('DOMContentLoaded', startApp);

//region Start App
/**
 * funcion que controla que funciones se deben ejecutar al momento de cargar la pagina y agregar los event listeners
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
function generateListOfRandomColors() {
    const amounOfNumbers = 6;
    const list = [];

    for (let i = 0; i < amounOfNumbers; i++) {
        list.push(generateRandomColor());
    }

    return list;
}

//#region Display Choosen Color
function displayChoosenColor(color) {
    const colorToDisplay = color.getAttribute('data-color');

    const choosenColorContainer = document.getElementById('choosenColor');
    choosenColorContainer.textContent = colorToDisplay;
}

//#region Create Color Container 
function createContainerForEachColor(list = [], container) {

    const frament = document.createDocumentFragment();
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
function chooseRandomColorAsSelected(list = []) {
    return Math.floor(Math.random() * list.length - 1);
}

//#region Check User Won
function checkIfUserWon(e) {
    if (checkColorIRightOne(e)) {
        alert('Ganaste');
    } else {
        alert('Error');
        remainingLives.textContent = Number(remainingLives.textContent) - 1
    }
}

//#region Check color Right
function checkColorIRightOne(e) {
    return e.target.getAttribute('data-choosen');
}

//#region Get Random Color
function generateRandomColor() {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);

    return `rgb(${redValue},${greenValue},${blueValue})`;
}


