import { Board } from './components/Board.js';
import { TimerClass } from './components/TimerClass.js';

document.addEventListener('DOMContentLoaded', startApp);
const myBoard = new Board(8);
const myTimer = new TimerClass();

//#region Start App
function startApp() {
    myTimer.startTimer();
    getListOfCards();
    addClickEventToEachCard();
    updateTimer();
}

//#region Update Timer
function updateTimer() {
    const timeContainer = document.querySelector('#time');
    const { minutes, seconds } = myTimer.displayTime();

    timeContainer.textContent = `${minutes}:${seconds}`;
    requestAnimationFrame(updateTimer);
}

//#region Get List Of Cards
function getListOfCards() {
    const boardContainer = document.querySelector('#boardContainer');
    const board = myBoard.getBoard();

    const boardContainerFragment = document.createDocumentFragment();

    board.forEach(card => {
        boardContainerFragment.appendChild(drawCard(card));
    });

    boardContainer.appendChild(boardContainerFragment);
}

//#region Draw Card
function drawCard(card) {
    const cardContainer = document.createElement('DIV');
    cardContainer.textContent = card.getValue();
    cardContainer.setAttribute('data-id', card.getId());
    cardContainer.classList.add(shouldBeVisible(card));

    return cardContainer;
}

//#region Should Be Visible??
const shouldBeVisible = (card) => !card.getFounded() ? 'visible' : 'not-visible';

//#region Add Click Event
function addClickEventToEachCard() {
    const listOfCards = document.querySelectorAll('#boardContainer div');
    listOfCards.forEach(card => {
        card.addEventListener('click', e => cardClicked(e));
    });
}

//#region Card Clicked
function cardClicked(e) {
    const card = e.target;
    card.classList.add('clicked');

    checkPairCard();
}

//#region Check Pair Card
function checkPairCard() {
    const cardsSelected = document.querySelectorAll('.clicked');

    if (cardsSelected.length !== 2) return;

    const areTheSameCards = myBoard.areTheyEquals(
        myBoard.getCardById(cardsSelected[0].getAttribute('data-id')),
        myBoard.getCardById(cardsSelected[1].getAttribute('data-id'))
    );

    if (areTheSameCards) {
        cardsSelected.forEach(card => {
            const cardInst = myBoard.getCardById(card.getAttribute('data-id'));
            myBoard.cardFounded(cardInst);
            card.classList.remove('visible');
            card.classList.add('not-visible');
        });
        checkIfGameIsFinished();
    }

    setTimeout(() => {
        cardsSelected.forEach(card => card.classList.remove('clicked'));
    }, 500);
}

//#region GameFinished??
function checkIfGameIsFinished() {
    if (myBoard.isGameFinished()) {
        myTimer.stopTimer();
        displayWinningMessage('Ganaste');
    }
}

//#region Winning Message
function displayWinningMessage(message) {
    alert(message);
}

