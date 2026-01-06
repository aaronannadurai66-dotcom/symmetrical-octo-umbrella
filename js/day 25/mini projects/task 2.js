// Delayed Message App using JavaScript

function delayedMessage(message, delay) {
    setTimeout(function () {
        console.log(message);
    }, delay);
}

// Usage
delayedMessage("Hello! This message is delayed by 3 seconds.", 3000);
