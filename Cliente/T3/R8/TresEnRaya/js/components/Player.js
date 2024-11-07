import { PieceTypeEnum } from '../utils/PieceTypeEnum.js';

export class Player {

    #name;

    constructor(name, piece) {
        //to ensure that the player is instanciated with a piece Objets (hate weaked typed languages)
        if (![PieceTypeEnum.O, PieceTypeEnum.X].includes(piece)) {
            throw new Error('Invalid type Of Player. Use PieceType.X or PieceType.Y');
        }

        this.#name = name;
        this.piece = piece;
    }

    /* GETTER */
    getName() { return this.#name; }
    getPiece() { return this.piece; }
}