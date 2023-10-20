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
    } else {
      return `Book not available`;
    }
  }

  checkIn(book: Book, patron: Patron) {
    if (!book.available) {
      book.available = true;
      book.checkedOutBy = null;
      patron.checkedOutBooks.filter((item) => item !== book);
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
