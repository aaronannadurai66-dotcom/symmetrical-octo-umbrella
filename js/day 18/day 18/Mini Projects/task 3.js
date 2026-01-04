let correctPassword = "admin123";
let enteredPassword;

do {
  enteredPassword = prompt("Enter your password:");
} while (enteredPassword !== correctPassword);

console.log("Login successful!");
