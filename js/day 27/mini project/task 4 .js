// Original JavaScript object
const user = {
    name: "Arun",
    age: 22,
    city: "Chennai"
};

// Convert object to JSON string
const jsonData = JSON.stringify(user);
console.log("JSON String:", jsonData);

// Convert JSON string back to object
const parsedData = JSON.parse(jsonData);
console.log("Back to Object:", parsedData);

// Access values
console.log(parsedData.name);   // Arun
console.log(parsedData.city);   // Chennai
