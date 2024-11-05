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
        myBoard[this.emptyPosition.y][this.emptyPosition.x] = 'null';

        //makes the Puzzle board and unshelfed board equal to the one we just generated
        this.board = myBoard;
        this.unSolvedBoard = myBoard;
    }

    /**
     * shuffles every piece of the board to make it random 
     */
    shuffleBoard() { }

    /**
     * checks if the board is perfectly solved
     * @returns {Boolean}
     */
    isSolved() { }

    /**
     * 
     * @param {String} direction 
     */
    moveTile(direction) { }

    isValidMove(direction) { }

    draw() {
        this.board.forEach(row => {
            console.log(row.map(tile => tile.toString()).join(' | '));
        });
    }


    reset() { }
}


const myPuzzle2 = new Puzzle(3);
myPuzzle2.draw();