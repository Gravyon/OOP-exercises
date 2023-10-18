import Passenger, { Flight, Reservation } from "./AirlineBooking";
import BankAccount, { CheckingAccount, SavingsAccount } from "./BankAccount";
import LibraryItem, { DVD } from "./LibraryItem";
import Product from "./Product";
import Task, { Project, User } from "./TaskManagement";

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

const t1 = new Task(1, "crear", "creacion de asda");
const u1 = new User(1, "user");
const pro1 = new Project(1, "proyecto");
t1.assignTo(u1);
console.log(u1.getInfo());
pro1.addTask(t1);
console.log(pro1.getProjectInfo());

// Airline Booking

const passenger1 = new Passenger("John Doe", "ABC123");
const flight1 = new Flight(
  "FA123",
  "New York",
  "Los Angeles",
  "2023-10-15",
  150
);
const reservation1 = new Reservation(passenger1, flight1);

reservation1.bookSeat("A3");
reservation1.changeStatus(true);
console.log(reservation1.getReservationInfo());

// Bank Account

const savingsAccount1 = new SavingsAccount("SA001", "John Doe", 1000);
const checkingAccount1 = new CheckingAccount("CA101", "Alice Smith", 500, 0.02);

savingsAccount1.deposit(500);
savingsAccount1.withdraw(200);
console.log(savingsAccount1.getBalance());

checkingAccount1.deposit(1000);
checkingAccount1.calculateInterest();
console.log(checkingAccount1.getBalance());

// Library Item

const book1 = new LibraryItem("Book001", "The Great Gatsby", false);
const dvd1 = new DVD("DVD001", "Inception", true);

book1.checkOut();
console.log(book1.title);

dvd1.checkIn();
console.log(dvd1.isAvailable());

// Product

const product1 = new Product(1, "Widget A", 19.99);
console.log(product1.getProductInfo());

// Task Management

const user1 = new User(1, "Alice");
const user2 = new User(2, "Bob");

const task1 = new Task(1, "Task 1", "Complete this task");
task1.assignTo(user1);
task1.changeStatus("In Progress");

const task2 = new Task(2, "Task 2", "Review documentation");
task2.assignTo(user2);
task2.changeStatus("Completed");

const project1 = new Project(1, "Project Alpha");
project1.addTask(task1);
project1.addTask(task2);

console.log(user1.getInfo());
console.log(project1.getProjectInfo());
