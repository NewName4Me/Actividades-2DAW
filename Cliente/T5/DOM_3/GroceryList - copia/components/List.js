import { Item } from './Item.js';

export class List {
    //#region Constructor
    constructor() {
        this.listOfItems = [];
    }

    //#region Add Item
    /**
     * añade un objeto item a nuestra lista de Objetos
     * @param {Item} item 
     */
    addItem = (item) => {
        //si intentamos introducir un Item que no pertence a Item lanzamos error
        if (!item instanceof Item) throw new Error('Solo puedes añadir instancias de Item.js');

        this.listOfItems.push(item);
    }

    //region Edit Item By id
    /**
     * edita el contenido de un objeto basandose en su id
     * @param {Number} itemID 
     * @param {String} newName 
     */
    editItem = (itemID, newName) => {
        const item = this.listOfItems.find(item => item.getItemID() === itemID);
        if (item) item.setName(newName);
    }

    //#region Remove Item By Id
    /**
     * elimina un item solo, basandose en su ID
     * @param {Number} itemID 
     */
    removeItem = (itemID) => {
        this.listOfItems = this.listOfItems.filter(item => item.getItemID() !== itemID);
    }

    //#region Remove All Items
    /**
     * elimina todos los elementos de nuestra lista
     * @returns 
     */
    removeAllItems = () => this.listOfItems = [];

    //#region Get List of Items
    /**
     * nos devuelve el objeto principal de nuestra lista
     * @returns 
     */
    getAllItems = () => this.listOfItems;
}
