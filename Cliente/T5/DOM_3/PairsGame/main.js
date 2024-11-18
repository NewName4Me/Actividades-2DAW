//#region Imports
import { List } from './components/List.js';
import { Item } from './components/Item.js';

//#region Global Vars
const addItemForm = document.forms.addItem;
const myList = new List();
const clearListBtn = document.querySelector('button');

//#region DOMContentLoaded
/**
 * Se va a ejecutar el metodo startApp cuando
 * el DOM haya cargado
 */
document.addEventListener('DOMContentLoaded', startApp);

//#region Start App
/**
 * Inicializa el programa
 * y agrega los event listeners a los botones
 */
function startApp() {
    addItemForm.addEventListener('submit', (e) => addItemToList(e));
    clearListBtn.addEventListener('click', cleanList);
    loadListOfItems();
}

//#region Load List Of Items
/**
 * Carga la lista de items y la renderiza
 * en el html
 */
function loadListOfItems() {
    const listOfItemsContainer = document.getElementById('listOfItems');
    const list = myList.getAllItems();

    cleanHTML(listOfItemsContainer);

    list.forEach(item => {
        const $itemContainerDiv = document.createElement('DIV');
        $itemContainerDiv.setAttribute('data-Idx', item.getItemID());
        $itemContainerDiv.textContent = item.getName();

        const $editIcon = document.createElement('IMG');
        $editIcon.setAttribute('src', './assets/edit.svg');
        $editIcon.addEventListener('click', e => editItemContent(e));

        const $trashIcon = document.createElement('IMG');
        $trashIcon.setAttribute('src', './assets/trash.svg');
        $trashIcon.addEventListener('click', e => deleteItem(e));

        $itemContainerDiv.appendChild($editIcon);
        $itemContainerDiv.appendChild($trashIcon);
        listOfItemsContainer.appendChild($itemContainerDiv);
    });
}

//#region Add Item To List
/**
 * Agrega un item a la lista
 * y lo renderiza en el html
 */
function addItemToList(e) {
    e.preventDefault();

    const itemName = addItemForm.itemName.value;
    const newItem = new Item(itemName);
    myList.addItem(newItem);
    loadListOfItems();

    addItemForm.reset();
}

//#region Clean List
/**
 * Limpia la lista de items
 * y la renderiza en el html
 */
function cleanList() {
    myList.removeAllItems();
    loadListOfItems();
}

//#region Edit By Id
/**
 * Edita el item con el id especificado
 * y lo renderiza en el html
 */
function editItemContent(e) {
    const itemId = Number(e.target.parentElement.getAttribute('data-Idx'));
    const newName = prompt('Enter the new name for the item:');

    if (newName) {
        myList.editItem(itemId, newName);
        loadListOfItems();
    }
}

//#region Delete By Id
/**
 * Elimina el item con el id especificado
 * y lo renderiza en el html
 */
function deleteItem(e) {
    const itemId = Number(e.target.parentElement.getAttribute('data-Idx'));
    console.log(itemId);
    myList.removeItem(itemId);
    loadListOfItems();
}

//#region Clean HTML
/**
 * Limpia el html de un contenedor
 */
function cleanHTML(father) {
    while (father.firstChild) {
        father.removeChild(father.firstChild);
    }
}

