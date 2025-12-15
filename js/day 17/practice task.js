// Declare variables using var, let, and const
var name = "Aaron";
let age = 22;
const isStudent = true;

// Check types
console.log(typeof "Hello"); // string
console.log(typeof 45);      // number
console.log(typeof true);    // boolean
console.log(typeof null);    // object (JS behavior)

// Arithmetic operators
let a = 10;
let b = 5;

console.log("Sum:", a + b);         // 15
console.log("Product:", a * b);     // 50
console.log("Remainder:", a % b);   // 0

// Comparison using == and ===
let x = "10";
let y = 10;

console.log(x == y);   // true (value only)
console.log(x === y);  // false (value + type)

// if-else to check even or odd
let number = 7;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
