//library

import { User } from "./User";

export class Library {
  catalog: Array<Book> = [];
  constructor(public title: string, public id: number) {}

  getCatalog() {
    return this.catalog;
  }

  addBook(data: Book) {
    this.catalog.push(data);
  }

  removeBook(data: Book) {
    this.catalog = this.catalog.filter((item) => item !== data);
  }

  getBooksByPatron(patron: Patron) {
    return this.catalog.filter(
      (book) => !book.available && book.checkedOutBy === patron
    );
  }

  checkOut(book: Book, patron: Patron) {
    if (book.available) {
      book.available = false;
      book.checkedOutBy = patron;
      patron.checkedOutBooks.push(book);
      return `${book.title} checkout by ${patron.name}`;
    }
  }

  checkIn(book: Book) {
    if (!book.available) {
      book.available = true;
      book.checkedOutBy = null;
      this.catalog = this.catalog.filter((item) => item !== book);
      return `${book.title} returned`;
    }
  }
}

export class Book {
  checkedOutBy: Patron | null;
  constructor(
    public title: string,
    public id: number,
    public author: string,
    public genre: string,
    public available: boolean
  ) {}
  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  }
}

export class Patron extends User {
  checkedOutBooks: Book[] = [];

  constructor(public id: number, public name: string) {
    super(id, name);
  }
}

// Create a Library
const myLibrary = new Library("My Library", 1);

// Create Books
const book1 = new Book("Book 1", 101, "Author A", "Fiction", true);
const book2 = new Book("Book 2", 102, "Author B", "Mystery", true);
const book3 = new Book("Book 3", 103, "Author C", "Science", true);
const book4 = new Book("Book 4", 103, "Author D", "Drama", true);

// Add Books to the Catalog
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

console.log("Library Catalog:");
myLibrary.getCatalog().forEach((book) => {
  console.log(`Title: ${book.title}, Author: ${book.author}`);
});

// Create Patrons
const patron1 = new Patron(1, "Patron X");
const patron2 = new Patron(2, "Patron Y");

// Check Out Books
const checkout1 = myLibrary.checkOut(book1, patron1);
const checkout2 = myLibrary.checkOut(book2, patron2);
const checkout3 = myLibrary.checkOut(book3, patron1);

console.log(checkout1, checkout2, checkout3);

console.log(patron1, patron2);

// Display Books Checked Out by Patrons
console.log("Books checked out by Patron 1:");
const booksByPatron1 = myLibrary.getBooksByPatron(patron1);
booksByPatron1.forEach((book) => {
  console.log(`Title: ${book.title}, Author: ${book.author}`);
});

console.log("Books checked out by Patron 2:");
const booksByPatron2 = myLibrary.getBooksByPatron(patron2);
booksByPatron2.forEach((book) => {
  console.log(`Title: ${book.title}, Author: ${book.author}`);
});
