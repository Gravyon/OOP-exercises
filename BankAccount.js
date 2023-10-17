//bank
export class BankAccount {
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

export class SavingsAccount extends BankAccount {
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
    return console.log(`Your balance : ${this.balance}`);
  }
}

export class CheckingAccount extends BankAccount {
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

export default BankAccount;
