import { Book } from './components/Book.js';
import { BookList } from './components/BookList.js';

document.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    const myReadingList = document.getElementById('myReadingList');
    const formAddBook = document.forms.formAddBook;
    const myBookList = new BookList();

    formAddBook.addEventListener('submit', e => handleFormSubmit(e, formAddBook, myBookList));
    loadListOfBooks(myReadingList, myBookList);
}

/**
 * 
 * @param {HTMLElement} HTMLContainer 
 * @param {BookList} bookList
 */
function loadListOfBooks(HTMLContainer, bookList) {
    cleanHTMLElement(HTMLContainer);

    const listOfBooks = bookList.getBookList();
    const fragment = document.createDocumentFragment();

    listOfBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        const title = document.createElement('H3');
        title.classList.add('title');
        title.textContent = book.getTitle();

        const genre = document.createElement('H3');
        genre.classList.add('genre');
        genre.textContent = book.getGenre();

        const author = document.createElement('H3');
        author.classList.add('author');
        author.textContent = book.getAuthor();

        const read = document.createElement('H3');
        read.classList.add('readDate');
        read.textContent = book.getReadDate();

        if (book.getIsRead()) {
            bookElement.classList.remove('not-read');
            bookElement.classList.add('read');
        } else {
            bookElement.classList.add('not-read');
        }

        bookElement.appendChild(title);
        bookElement.appendChild(genre);
        bookElement.appendChild(author);
        bookElement.appendChild(read);

        bookElement.addEventListener('click', e => setBookAsRead(e, book, bookList));

        fragment.appendChild(bookElement);
    });

    updateAmountOfBooksToRead(bookList);
    HTMLContainer.appendChild(fragment);
}
/**
 * 
 * @param {Event} e 
 */
function handleFormSubmit(e, form, bookList) {
    e.preventDefault();
    const title = form.elements.title.value;
    const author = form.elements.author.value;
    const genre = form.elements.genre.value;

    const newBook = new Book(title, genre, author);
    bookList.add(newBook);

    const myReadingList = document.getElementById('myReadingList');
    loadListOfBooks(myReadingList, bookList);

    form.reset();
}

/**
 * 
 * @param {Event} e 
 * @param {Book} book
 * @param {BookList} list
 */
function setBookAsRead(e, book, list) {
    const myReadingList = document.getElementById('myReadingList');

    e.preventDefault();
    list.finishBook(book);
    loadListOfBooks(myReadingList, list);
}

/**
 * 
 * @param {HTMLElement} element 
 */
function cleanHTMLElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function updateAmountOfBooksToRead(list) {
    const remainingBooksToRead = document.getElementById('remainingBooksToRead');

    remainingBooksToRead.textContent = 'Books Read: ' + list.getPendingBooks() + ' of ' + list.getBookList().length;
}
