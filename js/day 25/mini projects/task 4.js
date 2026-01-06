// Data fetch using async/await (fake API)

function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({
                id: 1,
                name: "Sample User",
                role: "Developer"
            });
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Call function
getData();
