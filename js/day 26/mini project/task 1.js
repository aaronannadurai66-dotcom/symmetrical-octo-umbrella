// Counter using closure
function createCounter() {
    let count = 0; // private variable

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
