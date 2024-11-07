import { PieceTypeEnum } from '../utils/PieceTypeEnum.js';

export class Tile {
    constructor() {
        this.piece = PieceTypeEnum.EMPTY;/* At the start every piece must be empty */
    }

    /* GETTER */

    getPiece() { return this.piece; }

    /* SETTER */

    /**
     * tries to change one tyle on the board for the one requested 
     * @param {PieceType} piece 
     * @returns {Boolean} - true of the piece could be changed: false otherwise
     */
    setPiece(piece) {
        //if the tile isnt empty you cant change the piece
        if (this.piece !== PieceTypeEnum.EMPTY) return false;

        this.piece = piece;
        return true;
    }

    /* METHODS */

    isEmpty() {
        return this.piece === PieceTypeEnum.EMPTY;
    }

}