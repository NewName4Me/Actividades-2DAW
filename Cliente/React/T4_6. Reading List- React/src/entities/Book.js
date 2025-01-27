export class Book {
   #title;
   #genre;
   #author;
   #read;
   #readDate;
   #id;

   constructor(title, genre, author) {
      this.#id = (Math.random() * Date.now()).toString(32);
      this.#title = title;
      this.#genre = genre;
      this.#author = author;
      this.#read = false;
      this.#readDate = "Not Read";
   }

   //GETTER
   getId = () => this.#id;
   getTitle = () => this.#title;
   getGenre = () => this.#genre;
   getAuthor = () => this.#author;
   getIsRead = () => this.#read;
   getReadDate = () => this.#readDate;

   //SETTER
   setTitle = (newTitle) => (this.#title = newTitle);
   setGenre = (newGenre) => (this.#genre = newGenre);
   setAuthor = (newAuthor) => (this.#author = newAuthor);
   setRead = (read) => (this.#read = read);
   setReadDate = () => (this.#readDate = new Date().toISOString());
}
