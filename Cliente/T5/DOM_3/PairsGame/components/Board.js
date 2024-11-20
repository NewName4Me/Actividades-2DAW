import { Card } from './Card.js';

export class Board {
    constructor(numberOrCards) {
        if (numberOrCards % 2 != 0) throw new Error('We need an even number of cards');

        this.numberOrCards = numberOrCards;
        this.finished = false;
        this.board = this.generateBoardOfCards();
    }

    getNumberOfCards = () => this.numberOrCards;
    getBoard = () => this.board;

    generateBoardOfCards = () => {
        let tempBoard = [];

        for (let i = 0; i < this.getNumberOfCards() / 2; i++) {
            const firstCard = new Card();
            const secondCard = new Card();

            firstCard.setValue(i);
            secondCard.setValue(i);

            tempBoard.push(firstCard);
            tempBoard.push(secondCard);
        }

        tempBoard = this.shuffleBoard(tempBoard);

        return tempBoard;
    }

    shuffleBoard = (board = [{}]) => {
        for (let i = 0; i < board.length; i++) {
            const random = Math.floor(Math.random() * (i + 1));

            [board[i], board[random]] = [board[random], board[i]]
        }

        return board;
    }

    areTheyEquals = (firstCard, secondCard) => {
        if (!(firstCard instanceof Card) || !(secondCard instanceof Card)) throw new Error('Both cards should be an instance of Card object');
        return firstCard.getValue() == secondCard.getValue();
    }

    cardFounded = (card) => {
        if (!(card instanceof Card)) throw new Error('Card should be an instance of Card object');

        card.setFoundedToTrue();
    }

    getCardById = (cardID) => {
        return this.board.find(card => card.getId() === cardID);
    }

    isGameFinished = () => this.getBoard().every(card => card.getFounded());
}

