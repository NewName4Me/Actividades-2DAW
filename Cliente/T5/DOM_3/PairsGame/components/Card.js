export class Card {

    #value; #founded; #id;

    constructor() {
        this.#id = (Math.floor(Math.random() * 1000000) + Date.now()).toString(32);
        this.#value = undefined;
        this.#founded = false;
    }

    getId = () => this.#id;
    getFounded = () => this.#founded;
    getValue = () => this.#value;

    setValue = (value) => this.#value = value;
    setFoundedToTrue = () => this.#founded = true;
}
