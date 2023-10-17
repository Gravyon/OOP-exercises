import Passenger, { Flight, Reservation } from "./AirlineBooking";
import BankAccount, { CheckingAccount, SavingsAccount } from "./BankAccount";
import LibraryItem, { DVD } from "./LibraryItem";
import Product from "./Product";

const myBankAccount = new BankAccount();
myBankAccount.deposit(122);
const mySavingsAccount = new SavingsAccount(1, "es", 1344);
const myCheckingAccount = new CheckingAccount(1, "323", 5555, 14);
mySavingsAccount.deposit(300);
console.log(mySavingsAccount.balance);
myCheckingAccount.calculateInterest();

const myProd = new Product(12, "add", 1);
myProd.getProductDetails();
const myDVD = new DVD("sadad", 123131, true, "asda", 123);
myDVD.play();

const myLib = new LibraryItem("aa", 123131, true);
console.log(myLib.title);

const p1 = new Passenger("un", 123);
const date = new Date().getDate();
const f1 = new Flight(22, "city", "tocity", date, 34);
const r1 = new Reservation(p1, f1, 23);
r1.getReservationInfo();
