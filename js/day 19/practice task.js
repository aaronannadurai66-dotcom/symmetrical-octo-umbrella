// 1. Function that prints "Good Morning"
function greet() {
    console.log("Good Morning");
}
greet();

// 2. Function that takes two numbers and returns their sum
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// 3. Arrow function version of sum
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 15));

// 4. Callback function for setTimeout
setTimeout(function () {
    console.log("This is a callback function");
}, 2000);

// 5. IIFE that prints "Started"
(function () {
    console.log("Started");
})();
