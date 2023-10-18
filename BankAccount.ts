export class BankAccount {
  constructor(public id: number, public name: string, public balance: number) {}

  deposit(amount: number) {
    this.balance += amount;
    console.log(`${amount} deposited on account`);
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn from account`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance(): string {
    return `Your balance: ${this.balance}`;
  }
}

export class SavingsAccount extends BankAccount {
  deposit(amount: number) {
    this.balance += amount;
    return `${amount} deposited on savings account`;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return `${amount} withdrawn from savings account`;
    } else {
      return "Insufficient funds";
    }
  }
  getBalance(): string {
    return `Your balance: ${this.balance}`;
  }
}

export class CheckingAccount extends BankAccount {
  constructor(
    id: number,
    name: string,
    balance: number,
    public interest: number
  ) {
    super(id, name, balance);
  }

  deposit(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} withdrawn from checking account`);
    } else {
      console.log("Insufficient funds");
    }
  }

  withdraw(amount: number) {
    console.log(`${(this.balance -= amount)} withdrawn from checking account`);
  }

  calculateInterest() {
    const monthlyInterest = (this.interest / 12) * this.balance;
    this.balance += monthlyInterest;
    console.log(`Monthly interest of $${monthlyInterest.toFixed(2)} applied.`);
  }
}

export default BankAccount;
