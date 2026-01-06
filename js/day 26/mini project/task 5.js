// Login simulation with async/await flow

function loginApi(username, password) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (username === "admin" && password === "1234") {
                resolve("Login successful");
            } else {
                reject("Invalid credentials");
            }
        }, 1500);
    });
}

async function login(username, password) {
    try {
        console.log("Logging in...");
        const result = await loginApi(username, password);
        console.log(result);
    } catch (error) {
        console.log("Login failed:", error);
    }
}

// Usage
login("admin", "1234");   // success
login("user", "0000");    // failure
login("admin", "wrong");  // failure