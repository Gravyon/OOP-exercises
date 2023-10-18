import { Product } from "./Product";
import { User } from "./User";

export class Cart {
  constructor(public user: User, public products: Product[] = []) {}
  addToCart(prod: Product) {
    this.products.push(prod);
  }
  removeFromCart(prod: Product) {
    this.products = this.products.filter((item) => item !== prod);
  }

  getCartTotal() {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    return total;
  }
  placeOrder() {
    const orderDate = new Date();
    const totalAmount = this.getCartTotal();
    const order = new Order(this.user, this.products, orderDate, totalAmount);
    this.products = [];
    return order;
  }
}

export class Order {
  constructor(
    public user: User,
    public products: Array<Product> = [],
    public orderDate: Date,
    public totalAmount: number
  ) {}
  orderInfo() {
    const formattedProducts = this.products.map(
      (product) => `${product.name} ${product.price}`
    );
    const productsInfo = formattedProducts.join("\n");
    const formattedDate = this.orderDate.toDateString();
    return `Order placed by ${this.user.getInfo()}
    DATE: ${formattedDate}
    ITEMS: ${productsInfo}`;
  }
}
