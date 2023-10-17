//bank
class BankAccount {
  constructor(id, name, balance) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited on account`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn from account`);
    } else {
      console.log("Insufficient funds");
    }
  }
  getBalance() {
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  deposit(amount) {
    this.balance += amount;
    console.log(`${amount} deposited on savings account`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn from savings account`);
    } else {
      console.log("Insufficient funds");
    }
  }
  getBalance() {
    return this.balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(id, name, balance, interest) {
    super(id, name, balance);
    this.interest = interest;
  }
  deposit(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn from checking account`);
    } else {
      console.log("Insufficient funds");
    }
  }
  withdraw(amount) {
    console.log(`${(this.balance -= amount)} withdrawn from checking account`);
  }
  calculateInterest() {
    const monthlyInterest = (this.interest / 12) * this.balance;
    this.balance += monthlyInterest;
    console.log(`Monthly interest of $${monthlyInterest.toFixed(2)} applied.`);
  }
}

//ecommerce

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  getProductDetails() {
    console.log(
      `Product id ${this.id}
         Product name ${this.name}
         Product price ${this.price}`
    );
  }
}

class PhysicalProduct extends Product {
  constructor(id, name, price, weight) {
    super(id, name, price);
    this.weight = weight;
  }
  calculateShippingCost(destinationInMeters) {
    const shippingCost = this.weight * destinationInMeters;
    return shippingCost;
  }
}
class DigitalProduct extends Product {
  constructor(id, name, price, downloadLink) {
    super(id, name, price);
    this.downloadLink = downloadLink;
  }
  getDownloadLink() {
    return this.downloadLink;
  }
}
