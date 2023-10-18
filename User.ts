export class User {
  constructor(public id: number, public name: string) {}
  getInfo() {
    return `User info :
    ID : ${this.id}
    NAME : ${this.name}`;
  }
}
