import { Tile } from './Tile.js';
import { Timer } from './Timer.js';
import { DirectionEnum } from '../utils/enum/DirectionEnum.js';

export class Puzzle {
    constructor(dimension) {
        this.dimension = dimension; // debe ser >= a 1
        this.board = [];//2D array of Tiles
        this.unSolvedBoard = [];
        this.emptyPosition = { y: dimension - 1, x: dimension - 1 }; //empty tile at the start (bottom-right)
        this.moves = 0;
        this.timer = new Timer();
        this.solved = false;

        this.generateBoard();
    }

    /**
     * generates the 2D board filled with tiles inclluding for una Tile that is null
     */
    generateBoard() {
        const myBoard = [];//2d array filled with Tile Objects
        let value = 1;//for counting each piece

        //create the 2D array
        for (let i = 0; i < this.dimension; i++) {
            myBoard[i] = [];

            for (let j = 0; j < this.dimension; j++) {
                //fills each Tile with a incrementing value
                const tileValue = value++;
                myBoard[i][j] = new Tile(tileValue, i, j);
            }
        }

        //changes the empty position to null
        myBoard[this.emptyPosition.y][this.emptyPosition.x] = null;

        //makes the Puzzle board and unshelfed board equal to the one we just generated
        this.board = myBoard;
        this.unSolvedBoard = myBoard;
    }

    /**
     * shuffles every piece of the board to make it random 
     */
    shuffleBoard() {
        const posibleDirectionsToMove = [DirectionEnum.DOWN, DirectionEnum.UP, DirectionEnum.LEFT, DirectionEnum.RIGHT];
        let numberOfMovesToShuffleTheBoard = Math.pow(this.dimension, 2) * 5;

        while (numberOfMovesToShuffleTheBoard > 0) {
            const currentMove = posibleDirectionsToMove[Math.floor(Math.random() * posibleDirectionsToMove.length)];

            if (this.isValidMove(currentMove)) {
                this.moveTile(currentMove);
                numberOfMovesToShuffleTheBoard--;
            }
        }

        this.moves = 0;
    }


    /**
     * checks if the board is perfectly solved
     * @returns {Boolean}
     */
    isSolved() { }

    /**
     * 
     * @param {DirectionEnum} direction 
     */
    moveTile(direction) {
        if (!this.isValidMove(direction)) throw new Error('Error: invalid move');

        const { y, x } = this.emptyPosition;
        let newY = y;
        let newX = x;

        switch (direction) {
            case DirectionEnum.DOWN: newY++; break;
            case DirectionEnum.UP: newY--; break;
            case DirectionEnum.RIGHT: newX++; break;
            case DirectionEnum.LEFT: newX--; break;
        }

        [this.unSolvedBoard[y][x], this.unSolvedBoard[newY][newX]] = [this.unSolvedBoard[newY][newX], this.unSolvedBoard[y][x]];
        this.emptyPosition = { y: newY, x: newX };
        this.moves++;
    }

    /**
     * based on the current position of the empty Tile(null) it tells us if the new position
     * is a valid position or not 
     * @param {DirectionEnum} direction 
     * @returns {Boolean} true if valid - false otherwise
     */
    isValidMove(direction) {
        const { y, x } = this.emptyPosition;

        switch (direction) {
            case DirectionEnum.UP: return y > 0;
            case DirectionEnum.DOWN: return y < this.dimension - 1;
            case DirectionEnum.LEFT: return x > 0;
            case DirectionEnum.RIGHT: return x < this.dimension - 1;
            default: return false;
        }
    }

    draw() {
        this.unSolvedBoard.forEach(row => {
            console.log(row.map(tile => tile ? tile.toString() : 'null').join(' | '));
        });
    }

    /**
     * reset the entire board back to the start, including the timer
     */
    reset() {
        this.board = [];
        this.unSolvedBoard = [];
        this.emptyPosition = { y: this.dimension - 1, x: this.dimension - 1 };
        this.moves = 0;
        this.timer.reset();
        this.solved = false;

        this.generateBoard();
    }
}

console.log('\n---------------Crear tablero-----------------');
const myPuzzle = new Puzzle(5);
myPuzzle.draw();
console.log('\n--------------Mover manualmente la posicion------------------');
myPuzzle.moveTile(DirectionEnum.UP);
myPuzzle.moveTile(DirectionEnum.LEFT);
myPuzzle.draw();
console.log('\n--------------Mezclar el tablero------------------');
myPuzzle.shuffleBoard();
myPuzzle.draw();
console.log('\n-------------Reiniciar el tablero-------------------');
myPuzzle.reset();
myPuzzle.draw();