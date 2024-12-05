import { Book } from './Book.js';

export class BookList {
    constructor() {
        this.bookList = [];
        this.numberOfBooksRead = 0;
        this.numberOfBooksNotRead = 0;
    }

    getBookList = () => this.bookList;

    //getBookById = (id) => this.bookList.find(b => b.getId() == id);

    add = (book) => {
        if (!(book instanceof Book)) throw new Error('The attribute passed should be an instance of the Book Object');

        this.bookList.push(book);
        this.numberOfBooksNotRead++;
    }

    finishBook = (book) => {
        if (!(book instanceof Book)) throw new Error('The attribute passed should be an instance of the Book Object');

        const bookIndex = this.bookList.indexOf(book);
        if (bookIndex === -1) throw new Error('The book passed does not exist in the list');

        this.bookList[bookIndex].setRead(true);
        this.bookList[bookIndex].setReadDate();
        this.numberOfBooksNotRead--;
        this.numberOfBooksRead++;
    }

    getPendingBooks = () => this.bookList.filter(b => b.getIsRead() == false).length;
}
