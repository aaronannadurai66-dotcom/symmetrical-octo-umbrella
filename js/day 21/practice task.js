// Array of colors
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

// Print first and last color
console.log("First color:", colors[0]);
console.log("Last color:", colors[colors.length - 1]);

// Add and remove items
colors.push("Orange");      // add to end
colors.pop();               // remove from end
colors.unshift("Black");    // add to beginning
colors.shift();             // remove from beginning

console.log("Updated colors:", colors);

// Array of numbers
const numbers = [10, 25, 60, 80, 45, 100];

// Print all numbers using forEach
numbers.forEach(function (num) {
  console.log(num);
});

// Square all numbers using map
const squaredNumbers = numbers.map(function (num) {
  return num * num;
});
console.log("Squared numbers:", squaredNumbers);

// Find numbers greater than 50 using filter
const greaterThan50 = numbers.filter(function (num) {
  return num > 50;
});
console.log("Numbers > 50:", greaterThan50);
// Sum of all numbers using reduce
const sum = numbers.reduce(function (accumulator, current) {
  return accumulator + current;
}, 0);