import Product from "./Product";
import { User } from "./User";

export class Cart {
  constructor(public user: User, public products: Product[] = []) {}
  addToCart(prod: Product) {
    this.products.push(prod);
  }
  removeFromCart(prod: Product) {
    this.products = this.products.filter((item) => {
      item !== prod;
    });
  }

  getCartTotal() {
    let total = 0;
    for (const product of this.products) {
      total += product.price;
    }
    return total;
  }
  placeOrder() {
    const orderDate = Date.now();
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
    public orderDate: number,
    public totalAmount: number
  ) {}
  orderInfo() {
    const formattedProducts = this.products.map(
      (product) => `${product.name} ${product.price}`
    );
    const productsInfo = formattedProducts.join("\n");
    return `Order placed by ${this.user.getInfo()}
    DATE: ${this.orderDate.toLocaleString()}
    ITEMS: ${productsInfo}`;
  }
}
