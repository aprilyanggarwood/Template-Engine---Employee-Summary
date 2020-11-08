// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// use the extends keyword to create a subclass with Engineer which inherits all the methods and properties from Employee class.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
