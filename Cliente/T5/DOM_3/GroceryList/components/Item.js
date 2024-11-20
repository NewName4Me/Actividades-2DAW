export class Item {

    #name;
    #itemID;

    //#region Constructor
    constructor(name) {
        this.#name = name;
        this.#itemID = Date.now();
    }

    //#region GETTER
    getName = () => this.#name;
    getItemID = () => this.#itemID;

    //#region SETTER
    setName = (newName) => this.#name = newName;
}