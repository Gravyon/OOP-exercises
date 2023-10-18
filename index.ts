import Passenger, { Flight, Reservation } from "./AirlineBooking";
import BankAccount, { CheckingAccount, SavingsAccount } from "./BankAccount";
import LibraryItem, { DVD } from "./LibraryItem";
import Product from "./Product";
import Task, { Project } from "./TaskManagement";
import { Cart, Order } from "./ECommerce";
import { User } from "./User";

const myBankAccount = new BankAccount(1, "myname", 1414);
myBankAccount.deposit(122);
const mySavingsAccount = new SavingsAccount(1, "es", 1344);
const myCheckingAccount = new CheckingAccount(1, "323", 5555, 14);
mySavingsAccount.deposit(300);
console.log(mySavingsAccount.balance);
myCheckingAccount.calculateInterest();

const myProd = new Product(12, "add", 1);
myProd.getProductInfo();
const myDVD = new DVD("sadad", 123131, true, "asda", 123, true);
myDVD.play();

const myLib = new LibraryItem("aa", 123131, true);
console.log(myLib.title);

const p1 = new Passenger("un", 123);
const f1 = new Flight(22, "city", "tocity", "12/12/23", 34);
const r1 = new Reservation(p1, f1, 23);
r1.getReservationInfo();

const u1 = new User(1, "user");
const pro1 = new Project(1, "proyecto");
const t1 = new Task(1, "crear", "creacion de asda", false, null);
t1.assignTo(u1);
console.log(u1.getInfo());
pro1.addTask(t1);
console.log(pro1.getProjectInfo());

// Airline Booking

const passenger1 = new Passenger("John Doe", 123);
const flight1 = new Flight(123, "New York", "Los Angeles", "2023-10-15", 150);
const reservation1 = new Reservation(passenger1, flight1, 12);

reservation1.bookSeat(3);
reservation1.changeStatus(true);
console.log(reservation1.getReservationInfo());

// Bank Account

const savingsAccount1 = new SavingsAccount(111, "John Doe", 1000);
const checkingAccount1 = new CheckingAccount(101, "Alice Smith", 500, 0.02);

savingsAccount1.deposit(500);
savingsAccount1.withdraw(200);
console.log(savingsAccount1.getBalance());

checkingAccount1.deposit(1000);
checkingAccount1.calculateInterest();
console.log(checkingAccount1.getBalance());

// Library Item

const book1 = new LibraryItem("Book001", 5464841, false);
const dvd1 = new DVD("DVD001", 124556, true, "John", 145, true);

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

// Create users
const user4 = new User(1, "Alice");
const user5 = new User(2, "Bob");

// Create products
const product5 = new Product(101, "Product A", 10.99);
const product2 = new Product(102, "Product B", 19.99);
const product3 = new Product(103, "Product C", 5.99);

// Create shopping carts for users
const cart1 = new Cart(user1);
const cart2 = new Cart(user2);

// Add products to the carts
cart1.addToCart(product5);
cart1.addToCart(product2);
cart1.addToCart(product2);

cart2.addToCart(product2);
cart2.addToCart(product3);

// Calculate and display cart totals
console.log(`Cart Total for User 1: $${cart1.getCartTotal().toFixed(2)}`);
console.log(`Cart Total for User 2: $${cart2.getCartTotal().toFixed(2)}`);

// Create orders
const order1 = cart1.placeOrder();
const order2 = cart2.placeOrder();

// Place orders
const order1Details = order1.orderInfo();
const order2Details = order2.orderInfo();

console.log("Order 1 Details:");
console.log(order1Details);

console.log("Order 2 Details:");
console.log(order2Details);

// Remove a product from the cart
cart1.removeFromCart(product2);

// Calculate and display updated cart total
console.log(
  `Updated Cart Total for User 1: $${cart1.getCartTotal().toFixed(2)}`
);
