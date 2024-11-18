//#region Importaciones
import { HangMan } from './components/HangMan.js';

document.addEventListener('DOMContentLoaded', startApp);
const myHangMan = new HangMan();

//#region Start App
function startApp() {
    rederHangManBasicContent();
}

//#region Render Hangman
function rederHangManBasicContent() {
    const listOfLetter = document.querySelector('#listOfLetter');
    const category = document.querySelector('#category');
    const choosenWord = document.querySelector('#choosenWord');
    const numberOfLives = document.querySelector('#numberOfLives');

    //limpio los contenedores antes de agregar contenido
    cleanHTML(listOfLetter);
    cleanHTML(choosenWord);

    //agrego el contenido a cada contenedor
    listOfLetter.appendChild(displayListOfLetter());
    category.textContent = myHangMan.returnMyCategory();
    choosenWord.appendChild(displayChoosenWord());
    numberOfLives.textContent = myHangMan.returnMyRemainingLives();
}

//#region Display List Of Letter
function displayListOfLetter() {
    const listOfLetters = myHangMan.returnListOfLetter();
    const lettersContainer = document.createDocumentFragment();

    listOfLetters.map(letter => {
        const div = document.createElement('DIV');
        div.textContent = letter;

        lettersContainer.appendChild(div);

        //si hacen click en la letra le añado un event listener para intentar mostrarla
        div.addEventListener('click', e => changeLetterStatus(e));
    });

    return lettersContainer;
}

//#region Display Choosen Word
function displayChoosenWord() {
    const choosenWord = myHangMan.returnMyWord();
    const wordContainer = document.createDocumentFragment();

    choosenWord.map(char => {
        const { letter, letterID, revealed } = char;

        const div = document.createElement('DIV');
        div.textContent = revealed ? letter : ' ';
        div.setAttribute('data-letterID', letterID);

        //si es visible o no muestro un css distinto
        div.classList.add(revealed ? 'revealed' : 'not-revealed');

        wordContainer.appendChild(div);
    });

    return wordContainer;
}

//#region Change Letter Status
function changeLetterStatus(e) {
    const selectedLetter = e.target.textContent;
    myHangMan.revealLetter(selectedLetter);

    //extraigo los metodos que me dicen si gane o perdi
    const { gameWon, gameLost } = myHangMan.isGameOver();

    if (gameWon) {
        alert('💃 Fiera lo Lograste 🕺');
        return restartGame();
    }

    if (gameLost) {
        alert('💀 Malito 😞');
        return restartGame();
    }

    //vuelvo a a cargar todo
    rederHangManBasicContent();
}

//#region Restart Game
function restartGame() {
    window.location.reload();
}

//#region Clean HTML
function cleanHTML(father) {
    while (father.firstChild) {
        father.removeChild(father.firstChild);
    }
}

