// SAMPLE CODE WITH LOGICAL ERRORS
// Goal: Calculate total price with 10% discount

function calculateTotal(price, quantity) {
    let total = price + quantity; // ❌ Logical error
    let discount = total * 0.1;
    return total - discount;
}

console.log(calculateTotal(100, 2)); 
// Expected: (100 * 2) - 10% = 180
// Actual: wrong output


// 🔍 DEBUGGING & FIXING LOGICAL ERRORS

function calculateTotalFixed(price, quantity) {
    // ✔ Correct logic: multiply price and quantity
    let total = price * quantity;

    // ✔ Correct discount calculation
    let discount = total * 0.1;

    return total - discount;
}

console.log(calculateTotalFixed(100, 2)); // 180


// -------------------------------
// ANOTHER LOGICAL ERROR EXAMPLE
// Goal: Check if number is even

function isEven(num) {
    if (num % 2 = 0) { // ❌ logical mistake
        return true;
    } else {
        return false;
    }
}

// FIXED VERSION
function isEvenFixed(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEvenFixed(10)); // true
console.log(isEvenFixed(7));  // false


// -------------------------------
// HOW TO DEBUG LOGICAL ERRORS
// 1. Check expected vs actual output
// 2. Verify formulas and conditions
// 3. Use console.log() to trace values
// 4. Test with multiple inputs
