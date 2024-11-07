import { Player } from './Player.js';
import { Tile } from './Tile.js';
import { PieceTypeEnum } from '../utils/PieceTypeEnum.js';

export class Board {
    //#region Constructor
    constructor(player1, player2) {

        if (!(player1 instanceof Player) || !(player2 instanceof Player)) {
            throw new Error('Both players must be an instance of the Player.js class');
        }

        if (player1.getPiece() === player2.getPiece()) {
            throw new Error('Both players can"t use the same type of Piece object');
        }

        this.board = this.createThreeByThreeBoard();
        this.currentPlayer = player1;
        this.player1 = player1;
        this.player2 = player2;
    }

    //#region Create Board
    /**
     * creates a 3x3 bidimensional arrray filled with Tiles (PieceTypeEnum.EMPTY)
     * @returns {Array<Array<Tile>>} - 3x3 array filled with empty tile objects 
     */
    createThreeByThreeBoard() {
        const board = [];
        const boardDimensions = 3;

        //create the 2D array
        for (let i = 0; i < boardDimensions; i++) {
            board[i] = [];
            for (let j = 0; j < boardDimensions; j++) {
                board[i][j] = new Tile();
            }
        }

        return board;
    }

    //#region Display Board
    /**
     * display the 3x3 board in the console getting each Tile Type
     */
    displayBoard() {
        console.log(
            this.board
                .map(row => row.map(tile => tile.getPiece()).join(' | '))
                .join('\n----------\n')
        );
    }

    //#region Place Piece
    /**
     * changes an empty piece for X or O depending on wich player is moving
     * @param {Number} row 
     * @param {Number} col 
     * @returns 
     * @throws {Error} In case we place en invalid position out of the board limist (0,1,2)
     * @see switchPlayer
     */
    placePiece(row, col) {
        try {
            const tile = this.board[row][col];
            const succes = tile.setPiece(this.currentPlayer.getPiece());
            if (succes) this.switchPlayer();
            return succes;
        } catch (e) {
            throw new Error(`Position invalid for the Piece placed at [${row}][${col}]`);
        }

    }

    /**
     * switches the current player from 1 to 2 and viceversa depending on who played
     * the last
     */
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }

    checkWinCondition() { }


    isBoardFull() {
        return this.board.every(row => row.every(tile => !tile.isEmpty()));
    }

    //#region Reset Board
    /**
     * turns all tiles to empty and sets the first player as player1 
     * @returns {void} - emptyes the entire board
     */
    resetBoard() {
        this.board.forEach(row => row.forEach(tile => tile.setPiece(PieceTypeEnum.EMPTY)));
        this.currentPlayer = this.player1; // Reset to player1's turn
    }
}

const playerX = new Player("erik", PieceTypeEnum.X);
const playerO = new Player("eliseo", PieceTypeEnum.O);
const myBoard = new Board(playerX, playerO);

console.log('al comienzo');
myBoard.displayBoard();

console.log('tras poner una pieza');
myBoard.placePiece(0, 0);
myBoard.placePiece(0, 1);
myBoard.placePiece(0, 2);
myBoard.placePiece(0, 2); //si el jugador intenta poner una piece en un lugar que ya esta no peta, simplemente lo ignora
myBoard.placePiece(1, 0);
myBoard.placePiece(1, 1);
myBoard.placePiece(1, 2);
console.log(myBoard.isBoardFull());
myBoard.placePiece(2, 0);
myBoard.placePiece(2, 1);
myBoard.placePiece(2, 2);
myBoard.displayBoard();
console.log(myBoard.isBoardFull());

