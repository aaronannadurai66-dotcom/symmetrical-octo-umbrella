class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}

// Creating 3 students
const student1 = new Student("Arun", 20, "Computer Science");
const student2 = new Student("Meena", 21, "Information Technology");
const student3 = new Student("Rahul", 22, "Electronics");

// Display student details
student1.display();
student2.display();
student3.display();
