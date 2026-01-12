// Validate number input using try / catch

function validateNumber(input) {
    try {
        // Check if input is empty
        if (input === "") {
            throw new Error("Input cannot be empty");
        }

        // Convert input to number
        const num = Number(input);

        // Check if input is not a number
        if (isNaN(num)) {
            throw new Error("Input is not a valid number");
        }

        // Check if number is negative
        if (num < 0) {
            throw new Error("Number must be positive");
        }

        console.log("Valid number:", num);

    } catch (error) {
        console.log("Validation Error:", error.message);
    }
}

// Test cases
validateNumber("25");     // valid
validateNumber("abc");    // not a number
validateNumber("-10");    // negative number
validateNumber("");       // empty input
