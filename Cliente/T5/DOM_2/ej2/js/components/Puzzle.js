//#region Imports
import { Tile } from './Tile.js';
import { Timer } from './Timer.js';
import { DirectionEnum } from '../utils/enum/DirectionEnum.js';

export class Puzzle {
    //#region Constructor
    constructor(dimension) {
        if (dimension <= 1) throw new Error('El puzzle debe ser mayor a 1');

        this.dimension = dimension;
        this.emptyPosition = { y: dimension - 1, x: dimension - 1 }; // empty tile at the start (bottom-right)
        this.moves = 0;
        this.timer = new Timer();
        this.solved = false;

        this.solvedBoard = this.generateBoard();
        this.puzzleBoard = this.generateBoard();
    }

    //#region Generate Board
    /**
     * Generates the 2D board filled with tiles, including a Tile that is -1 for the empty position.
     * @returns {Array<Array<Tile>>} The generated board.
     */
    generateBoard() {
        const board = []; // 2D array filled with Tile objects
        let value = 1; // For counting each piece

        for (let i = 0; i < this.dimension; i++) {
            board[i] = [];
            for (let j = 0; j < this.dimension; j++) {
                const tileValue = value++;
                board[i][j] = new Tile(tileValue, i, j);
            }
        }

        // Set the empty position to -1
        board[this.emptyPosition.y][this.emptyPosition.x] = new Tile(-1, this.emptyPosition.y, this.emptyPosition.x);

        return board;
    }


    //#region Shuffle Board
    /**
     * Shuffles every piece of the board to make it random.
     */
    shuffleBoard() {
        const posibleDirectionsToMove = [DirectionEnum.DOWN, DirectionEnum.UP, DirectionEnum.LEFT, DirectionEnum.RIGHT];
        let numberOfMovesToShuffleTheBoard = Math.pow(this.dimension, 3) * 2;

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
     * Checks if the puzzle is solved by comparing puzzleBoard with solvedBoard.
     * @returns {Boolean} true if solved, false otherwise.
     */
    isSolved() {
        for (let i = 0; i < this.dimension; i++) {
            for (let j = 0; j < this.dimension; j++) {
                if (this.puzzleBoard[i][j].getValue() !== this.solvedBoard[i][j].getValue()) {
                    return false;
                }
            }
        }
        return true;
    }

    //#region Move Tile
    /**
     * Moves a tile in the specified direction.
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
     * Checks if the new position is valid based on the current empty Tile position.
     * @param {DirectionEnum} direction
     * @returns {Boolean} true if valid, false otherwise.
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
    draw(placeToDraw) {
        const board = document.createElement('table');
        board.classList.add('board');
        placeToDraw.appendChild(board);

        this.puzzleBoard.forEach((row, indexTile) => {
            const rowElement = document.createElement('tr');
            board.appendChild(rowElement);

            row.forEach(tile => {
                const tileElement = document.createElement('td');
                tileElement.classList.add('tile');
                if (tile.getValue() === -1) tileElement.classList.add('last');
                tileElement.textContent = tile ? tile.toString() : '-1';
                rowElement.appendChild(tileElement);
            });
        });
    }

    //#region Reset
    /**
     * Resets the entire board back to the start, including the timer.
     */
    reset() {
        this.puzzleBoard = this.solvedBoard.map(row => row.map(tile => tile));
        this.emptyPosition = { y: this.dimension - 1, x: this.dimension - 1 };
        this.moves = 0;
        this.timer.reset();
        this.solved = false;
    }
}


//#region TEST
/* console.log('\n---------------Crear tablero-----------------');
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
myPuzzle.draw(); */
