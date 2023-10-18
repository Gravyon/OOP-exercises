// Import classes
import { Passenger, Flight, Reservation } from "./AirlineBooking";
import { BankAccount, CheckingAccount, SavingsAccount } from "./BankAccount";
import { LibraryItem, DVD } from "./LibraryItem";
import { Product } from "./Product";
import { Task, Project } from "./TaskManagement";
import { Cart, Order } from "./ECommerce";
import { User } from "./User";

// Bank Account
const myBankAccount = new BankAccount(1, "myname", 1414);
myBankAccount.deposit(122);

const mySavingsAccount = new SavingsAccount(1, "es", 1344);
mySavingsAccount.deposit(300);

const myCheckingAccount = new CheckingAccount(1, "323", 5555, 14);
myCheckingAccount.calculateInterest();

// Product
const myProd = new Product(12, "add", 1);
myProd.getProductInfo();

// Library Item
const myLib = new LibraryItem("aa", 123131, true);
console.log(myLib.title);

// Airline Booking
const passenger1 = new Passenger("John Doe", 123);
const flight1 = new Flight(123, "New York", "Los Angeles", "2023-10-15", 150);
const reservation1 = new Reservation(passenger1, flight1, 12);

reservation1.bookSeat(3);
reservation1.changeStatus(true);
console.log(reservation1.getReservationInfo());

// Bank Account
const savingsAccount1 = new SavingsAccount(111, "John Doe", 1000);
savingsAccount1.deposit(500);
savingsAccount1.withdraw(200);
console.log(savingsAccount1.getBalance());

const checkingAccount1 = new CheckingAccount(101, "Alice Smith", 500, 0.02);
checkingAccount1.deposit(1000);
checkingAccount1.calculateInterest();
console.log(checkingAccount1.getBalance());

// Library Item
const book1 = new LibraryItem("Book001", 5464841, false);
book1.checkOut();
console.log(book1.title);

const dvd1 = new DVD("DVD001", 124556, true, "John", 145, true);
dvd1.checkIn();
console.log(dvd1.isAvailable());

// Product
const product1 = new Product(1, "Widget A", 19.99);
console.log(product1.getProductInfo());

// Task Management
const user1 = new User(1, "Alice");
const user2 = new User(2, "Bob");

const task1 = new Task(1, "Task 1", "Complete this task", false, null);
task1.assignTo(user1);
task1.changeStatus(false);

const task2 = new Task(2, "Task 2", "Review documentation", false, null);
task2.assignTo(user2);
task2.changeStatus(true);

const project1 = new Project(1, "Project Alpha");
project1.addTask(task1);
project1.addTask(task2);

console.log(user1.getInfo());
console.log(project1.getProjectInfo());

// E-commerce
const user4 = new User(1, "Alice");
const user5 = new User(2, "Bob");

const product5 = new Product(101, "Product A", 10.99);
const product2 = new Product(102, "Product B", 19.99);
const product3 = new Product(103, "Product C", 5.99);

const cart1 = new Cart(user1);
const cart2 = new Cart(user2);

cart1.addToCart(product5);
cart1.addToCart(product2);
cart1.addToCart(product2);

cart2.addToCart(product2);
cart2.addToCart(product3);

console.log(`Cart Total for User 1: $${cart1.getCartTotal().toFixed(2)}`);
console.log(`Cart Total for User 2: $${cart2.getCartTotal().toFixed(2)}`);

const order1 = cart1.placeOrder();
const order2 = cart2.placeOrder();

const order1Details = order1.orderInfo();
const order2Details = order2.orderInfo();

console.log("Order 1 Details:");
console.log(order1Details);

console.log("Order 2 Details:");
console.log(order2Details);

cart1.removeFromCart(product2);

cart1.addToCart(product2);
console.log("User 1 Updated Cart Total:", cart1.getCartTotal().toFixed(2));

console.log(
  `Updated Cart Total for User 1: $${cart1.getCartTotal().toFixed(2)}`
);
