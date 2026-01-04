// 1. Check if a number is positive
let number = 5;

if (number > 0) {
  console.log("The number is positive");
} else {
  console.log("The number is not positive");
}

// 2. else-if to print grades
let marks = 72;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: Fail");
}

// 3. for loop to print 1–10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 4. while loop to print even numbers up to 20
let even = 2;

while (even <= 20) {
  console.log(even);
  even += 2;
}

// 5. for…in loop to print object keys & values
let student = {
  name: "Aaron",
  age: 22,
  course: "Front End Development"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}
