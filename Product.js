//ecommerce

export class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  getProductDetails() {
    console.log(`Product Details:
    ID: ${this.id}
    Name: ${this.name}
    Price: $${this.price.toFixed(2)}`);
  }
  getProductInfo() {
    const productInfo = [this.id, this.name, this.price.toFixed(2)];
    return productInfo;
  }
}

export class PhysicalProduct extends Product {
  constructor(id, name, price, weight, quantity) {
    super(id, name, price);
    this.weight = weight;
    this.quantity = quantity;
  }
  calculateShippingCost(destinationInMeters) {
    const shippingCost = this.weight * destinationInMeters;
    return shippingCost;
  }
  calculateTotalWeigth() {
    return this.quantity * this.weight;
  }
}
export class DigitalProduct extends Product {
  constructor(id, name, price, downloadLink) {
    super(id, name, price);
    this.downloadLink = downloadLink;
  }
  getDownloadLink() {
    return this.downloadLink;
  }
}

export default Product;
