//ecommerce

export class Product {
  constructor(public id: number, public name: string, public price: number) {}
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
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public weight: number,
    public quantity: number
  ) {
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
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public downloadLink: string
  ) {
    super(id, name, price);
  }
  getDownloadLink() {
    return this.downloadLink;
  }
}

export default Product;
