//library

export class LibraryItem {
  constructor(
    public title: string,
    public barcode: number,
    public checkedOut: boolean
  ) {}
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
  constructor(
    public title: string,
    public barcode: number,
    public checkedOut: boolean,
    public author: string,
    public genre: string
  ) {
    super(title, barcode, checkedOut);
  }
  read() {
    console.log(`Reading ${this.title} by ${this.author}`);
  }
}

export class DVD extends LibraryItem {
  constructor(
    public title: string,
    public barcode: number,
    public checkedOut: boolean,
    public director: string,
    public duration: number,
    public available: boolean
  ) {
    super(title, barcode, checkedOut);
  }
  play() {
    console.log(`Playing ${this.title} by ${this.director}`);
  }
  isAvailable() {
    if (this.available) {
      this.available = true;
      return true;
    } else {
      this.available = false;
      return false;
    }
  }
}

export default LibraryItem;
