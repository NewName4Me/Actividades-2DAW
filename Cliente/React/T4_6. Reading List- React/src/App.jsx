import { useEffect, useState } from "react";
import "./App.css";
import { Book } from "./entities/Book";
import { BookList } from "./entities/BookList";

function App() {
   const [title, setTitle] = useState("");
   const [author, setAuthor] = useState("");
   const [genre, setGenre] = useState("");
   const [booklist, setBookList] = useState(new BookList());
   const [remainingBooks, setRemainingBooks] = useState(0);

   /**
    *
    * @param {Event} event
    */
   function handleAddBook(event) {
      event.preventDefault();

      const myBook = new Book(title, genre, author);
      booklist.add(myBook);

      setTitle("");
      setAuthor("");
      setGenre("");
   }

   /**
    * funncion encargada de actualizar el estado de un libro de leido a no leido
    * @param {Event} event
    */
   function setBookAsRead(event) {
      const bookId = event.currentTarget.id;
      const book = booklist.getBookList().find((b) => b.getId() === bookId);
      book.setRead(true);
      book.setReadDate();

      //modifico el objeto pulsado dentro de la lista usando el spread operator
      setBookList({ ...booklist, book });
   }

   useEffect(() => {
      setRemainingBooks(displayRemainingBooksToRead());
   }, [booklist]);

   function displayRemainingBooksToRead() {
      return booklist.getBookList().filter((book) => !book.getIsRead()).length;
   }

   return (
      <>
         <h1>The Reading List</h1>

         <main>
            <form name="formAddBook" onSubmit={handleAddBook}>
               <h2>Book</h2>

               {/* TITULO */}
               <label htmlFor="title">Title</label>
               <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               ></input>

               {/* AUTOR */}
               <label htmlFor="author">Author</label>
               <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
               ></input>

               {/* GENERO */}
               <label htmlFor="genre">Genre</label>
               <input
                  type="text"
                  name="genre"
                  placeholder="Genre"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
               ></input>

               <input type="submit"></input>
            </form>

            <div>
               <h2>My Reading List</h2>
               <section id="myReadingList">
                  {booklist.getBookList().map((book) => (
                     <div
                        key={book.getId()}
                        id={book.getId()}
                        className={book.getIsRead() ? "read" : "not-read"}
                        onClick={setBookAsRead}
                     >
                        <h3>{book.getTitle()}</h3>
                        <h3>{book.getAuthor()}</h3>
                        <h3>{book.getGenre()}</h3>
                        {book.getIsRead() ? (
                           <span>{book.getReadDate()}</span>
                        ) : (
                           <span>Pendiente</span>
                        )}
                     </div>
                  ))}
               </section>
               <h4 id="remainingBooksToRead">
                  Books remaining to read: {remainingBooks}
               </h4>
            </div>
         </main>
      </>
   );
}

export default App;
