// Sample array
const numbers = [1, 2, 3, 4, 5];

// 1️⃣ forEach – perform an action on each element
numbers.forEach(function (num) {
    console.log("forEach value:", num);
});

// 2️⃣ map – transform array and return new array
const squares = numbers.map(function (num) {
    return num * num;
});

console.log("Squared array:", squares);

// 3️⃣ Custom callback function
function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

// Using custom callback
const doubled = processArray(numbers, function (num) {
    return num * 2;
});

console.log("Doubled array:", doubled);
