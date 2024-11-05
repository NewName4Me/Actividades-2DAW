//#region Imports
import { Tile } from './Tile.js';
import { Timer } from './Timer.js';
import { DirectionEnum } from '../utils/enum/DirectionEnum.js';

export class Puzzle {
    //#region Contructror
    constructor(dimension) {
        this.dimension = dimension; // debe ser >= a 1
        this.puzzleBoard = [];
        this.emptyPosition = { y: dimension - 1, x: dimension - 1 }; //empty tile at the start (bottom-right)
        this.moves = 0;
        this.timer = new Timer();
        this.solved = false;

        this.generateBoard();
    }

    //#region Generate Board
    /**
     * generates the 2D board filled with tiles inclluding for una Tile that is -1
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

        //changes the empty position to -1
        myBoard[this.emptyPosition.y][this.emptyPosition.x] = new Tile(-1, this.emptyPosition.y, this.emptyPosition.x);

        //makes the Puzzle board and unshelfed board equal to the one we just generated
        this.puzzleBoard = myBoard;
    }

    //#region Shuffle Board
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


    //#region Is Solved
    /**
     * checks if the board is perfectly solved,to do it, it flattens the 2D board and sorts it, then 
     * it checks if every value is in order, in that case is sorted
     * @returns {Boolean} true if sorted, false is not
     */
    isSolved() {
        const arr = this.puzzleBoard.flatMap(row => row.map(tile => tile.getValue()));
        arr.splice(arr.findIndex(tile => tile === -1), 1); //gets rid of the "empty" Tile
        const sortedArr = [...arr].sort((a, b) => a - b); //sort the array 

        //checks if every value of the array sorted is equal to the original (flatened)
        return arr.every((value, index) => value === sortedArr[index]);
    }


    //#region Move Tile
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

        [this.puzzleBoard[y][x], this.puzzleBoard[newY][newX]] = [this.puzzleBoard[newY][newX], this.puzzleBoard[y][x]];
        this.emptyPosition = { y: newY, x: newX };
        this.moves++;
    }

    //#region Is Valid Move
    /**
     * based on the current position of the empty Tile(-1) it tells us if the new position
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

    //#region Draw Board
    draw() {
        this.puzzleBoard.forEach(row => {
            console.log(row.map(tile => tile ? tile.toString() : '-1').join(' | '));
        });
    }

    //#region Reset
    /**
     * reset the entire board back to the start, including the timer
     */
    reset() {
        this.puzzleBoard = [];
        this.emptyPosition = { y: this.dimension - 1, x: this.dimension - 1 };
        this.moves = 0;
        this.timer.reset();
        this.solved = false;

        this.generateBoard();
    }
}

//#region TEST
console.log('\n---------------Crear tablero-----------------');
const myPuzzle = new Puzzle(3);
myPuzzle.draw();

console.log('\n--------------Mover manualmente la posicion------------------');
myPuzzle.moveTile(DirectionEnum.UP);
myPuzzle.moveTile(DirectionEnum.LEFT);
myPuzzle.draw();

console.log('\n--------------Mezclar el tablero------------------');
myPuzzle.shuffleBoard();
myPuzzle.draw();

console.log('\n-------------Ver si el tablero esta o no bien resuelto tiene que dar false-------------------');
console.log(myPuzzle.isSolved());
myPuzzle.draw();

console.log('\n-------------Reiniciar el tablero-------------------');
myPuzzle.reset();
myPuzzle.draw();

console.log('\n-------------Ver si el tablero esta o no bien resuelto tiene que dar true-------------------');
console.log(myPuzzle.isSolved());
myPuzzle.draw();
