class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discountPercent) {
    const discountAmount = (this.price * discountPercent) / 100;
    return this.price - discountAmount;
  }
}


const product = new Product("Laptop", 50000);
console.log("Discounted Price:", product.discountedPrice(10));
