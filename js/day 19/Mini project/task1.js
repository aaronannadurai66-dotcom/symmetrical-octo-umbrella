function calculateBMI(weight, height) {
    return weight / (height * height);
}

let weight = 68;   // in kilograms
let height = 1.7;  // in meters

let bmi = calculateBMI(weight, height);
console.log("BMI:", bmi);
