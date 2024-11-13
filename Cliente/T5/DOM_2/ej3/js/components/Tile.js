export class Tile {
    #value;
    #xPosition;
    #yPosition;
    #imageURL;

    constructor(value, yPosition, xPosition, imageURL = null) {
        this.#value = value; // if value is null, that means it's an empty tile
        this.#yPosition = yPosition;
        this.#xPosition = xPosition;
        this.#imageURL = imageURL;
    }

    /* GETTER */
    getValue() { return this.#value; }
    getYPosition() { return this.#yPosition; }
    getXPosition() { return this.#xPosition; }
    getImageURL() { return this.#imageURL; }

    toString() {
        return this.getValue() !== -1 ? this.getValue().toString() : '-1';
    }
}
