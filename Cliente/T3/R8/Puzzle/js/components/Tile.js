export class Tile {
    #value;
    #xPosition;
    #yPosition;

    constructor(value, yPosition, xPosition) {
        this.#value = value; // if value is null, that means it's an empty tile
        this.#yPosition = yPosition;
        this.#xPosition = xPosition;
    }

    /* GETTER */
    getValue() { return this.#value; }
    getYPosition() { return this.#yPosition; }
    getXPosition() { return this.#xPosition; }

    toString() {
        return this.getValue() !== null ? this.getValue().toString() : 'null';
    }
}
