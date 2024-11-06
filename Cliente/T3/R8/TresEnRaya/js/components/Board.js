import { Player } from './Player.js';
import { Tile } from './Tile.js';
import { PieceType } from '../utils/PieceType.js';

class Board {
    constructor(player1, player2) {

        if (!(player1 instanceof Player) || !(player2 instanceof Player)) {
            throw new Error('Both players must be an instance of the Player.js class');
        }

        if (player1.getPiece === player2.getPiece) {
            throw new Error('Both players can"t use the same type of Piece object');
        }

        this.board = [];
        this.currentPlayer = player1;
        this.player1 = player1;
        this.player2 = player2;
    }

    placePiece() { }
    switchPlayer() { }
    checkWinCondition() { }
    isBoardFull() { }
    resetBoard() { }
}