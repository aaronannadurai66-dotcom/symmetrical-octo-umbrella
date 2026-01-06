// Fake API call using Promise

function fakeApiCall() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                status: 200,
                data: "Fake API data received"
            });
        }, 2000);
    });
}

// Usage
fakeApiCall()
    .then(function (response) {
        console.log("Success:", response);
    })
    .catch(function (error) {
        console.log("Error:", error);
    });
