// Student class
class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }
}

// Add method dynamically using prototype
Student.prototype.introduce = function () {
  console.log(
    `Hi, I'm ${this.name}, ${this.age} years old, studying ${this.course}`
  );
};

// Example usage
const s1 = new Student("Arun", 20, "Computer Science");
const s2 = new Student("Meena", 21, "IT");

s1.introduce();
s2.introduce();
