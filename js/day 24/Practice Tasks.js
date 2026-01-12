// 1️⃣ What is an Error in JavaScript?
// An error is a problem that occurs while running a program
// and stops or affects normal execution.


// 2️⃣ Types of JavaScript Errors

// a) Syntax Error – wrong JS syntax
// Example:
// console.log("Hello"   // missing closing bracket

// b) Runtime Error – occurs while the program is running
// Example:
// console.log(x); // x is not defined

// c) Logical Error – code runs, but gives wrong output
// Example:
let a = 10;
let b = 5;
console.log(a - b); // expected addition, but subtraction is done


// 3️⃣ Runtime Error vs Logical Error

// Runtime Error:
// - Occurs during execution
// - Program may stop
// Example:
let num = 10;
console.log(num / x); // x is undefined → runtime error

// Logical Error:
// - No crash
// - Wrong result
// Example:
let length = 5;
let width = 2;
console.log(length + width); // wrong formula for area


// 4️⃣ try / catch / finally

try {
    let result = x + 10; // x not defined
    console.log(result);
} catch (error) {
    console.log("Error caught:", error.message);
} finally {
    console.log("This always runs");
}


// 5️⃣ What is the use of throw?

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    return "Access granted";
}

try {
    console.log(checkAge(16));
} catch (err) {
    console.log("Custom Error:", err.message);
}
