//library

export class LibraryItem {
  constructor(title, barcode, checkedOut) {
    this.title = title;
    this.barcode = barcode;
    this.checkedOut = checkedOut;
  }
  checkOut() {
    this.checkedOut = true;
    return true;
  }
  checkIn() {
    this.checkedOut = false;
    return false;
  }
}

export class Book extends LibraryItem {
  constructor(title, barcode, checkedOut, author, genre) {
    super(title, barcode, checkedOut);
    this.author = author;
    this.genre = genre;
  }
  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  }
}

export class DVD extends LibraryItem {
  constructor(title, barcode, checkedOut, director, duration) {
    super(title, barcode, checkedOut);
    this.director = director;
    this.duration = duration;
  }
  play() {
    console.log(`Playing ${this.title} by ${this.director}`);
  }
}

export default LibraryItem;
