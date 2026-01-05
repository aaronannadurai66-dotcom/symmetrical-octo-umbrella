// Base class
class Shape {
  constructor(name) {
    this.name = name;
  }
}

// Subclass
class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// Example usage
const circle = new Circle(5);
console.log("Shape:", circle.name);
console.log("Area:", circle.calculateArea());
