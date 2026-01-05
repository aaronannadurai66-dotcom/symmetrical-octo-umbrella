// Book object
const book = {
  title: "JavaScript Basics",
  author: "Aaron",
  pages: 250,
  describe: function () {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
  }
};

// Call method
book.describe();

// Object Destructuring
const { title, author } = book;
console.log("Title:", title);
console.log("Author:", author);

// Employee class
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Salary: ${this.salary}`);
  }
}

// Manager class inheriting Employee
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayInfo() {
    console.log(
      `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.department}`
    );
  }
}

// Example usage
const emp = new Employee("Alice", 40000);
emp.displayInfo();

const mgr = new Manager("Bob", 60000, "IT");
mgr.displayInfo();
