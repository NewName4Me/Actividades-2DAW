import { listOfWordsBassedOnCategories } from '../utils/listOfWordsBassedOnCategories.js';
import { listOfLetter } from '../utils/listOfLetters.js';

export class HangMan {
    constructor() {
        this.listOfWordsBassedOnCategories = listOfWordsBassedOnCategories;
        this.listOfLetters = listOfLetter;
        this.category = this.getRandomCategory();
        this.chosenWord = this.getChosenWord();
        this.lives = 10; // Total de vidas
    }

    getRandomCategory() {
        return this.listOfWordsBassedOnCategories[Math.floor(Math.random() * this.listOfWordsBassedOnCategories.length)];
    }

    getChosenWord() {
        return this.category.words[Math.floor(Math.random() * this.category.words.length)]
            .split('')
            .map((letter, idx) => ({
                letterID: idx,
                revealed: false,
                letter
            }));
    }

    loseOneLife() {
        this.lives--;
    }

    revealLetter(letter) {
        let found = false; 
        this.chosenWord.forEach(char => {
            if (char.letter === letter) {
                char.revealed = true;
                found = true;
            }
        });

        if (!found) {
            this.loseOneLife(); 
        }
    }

    isGameOver() {
        const allRevealed = this.chosenWord.every(char => char.revealed);
        const noLivesLeft = this.lives <= 0;

        return {
            gameWon: allRevealed,
            gameLost: noLivesLeft,
        };
    }

    returnMyCategory = () => this.category.category;
    returnMyWord = () => this.chosenWord;
    returnMyRemainingLives = () => this.lives;
    returnListOfLetter = () => this.listOfLetters;
}
