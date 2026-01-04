let marks = 78; // change value to test

let grade;
let remark;

if (marks >= 90) {
  grade = "A";
  remark = "Excellent performance";
} else if (marks >= 75) {
  grade = "B";
  remark = "Very good";
} else if (marks >= 60) {
  grade = "C";
  remark = "Good, needs improvement";
} else if (marks >= 40) {
  grade = "D";
  remark = "Pass";
} else {
  grade = "F";
  remark = "Fail";
}

console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Remark:", remark);
