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
    this.avaiable = this.avaiable;
  }
  play() {
    console.log(`Playing ${this.title} by ${this.director}`);
  }
  isAvailable() {
    this.avaiable = true;
    return true;
  }
}

export default LibraryItem;
