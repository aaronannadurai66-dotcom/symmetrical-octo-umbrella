// 1. Identify scope in given code
var x = 10; // Global scope

function testScope() {
    let y = 20; // Function (local) scope
    if (true) {
        const z = 30; // Block scope
        console.log(x, y, z); // 10 20 30
    }
    // console.log(z); // ❌ Error: z is block scoped
}
testScope();


// 2. Create a simple closure
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter(); // 1
counter(); // 2


// 3. Write a callback using setTimeout
setTimeout(function () {
    console.log("Callback executed after 2 seconds");
}, 2000);


// 4. Create a promise that resolves
const myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved successfully");
    }, 1000);
});

myPromise.then(function (result) {
    console.log(result);
});


// 5. Convert promise to async/await
async function handlePromise() {
    const result = await myPromise;
    console.log(result);
}
handlePromise();



