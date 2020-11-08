// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
// use the extends keyword to create a subclass with Intern which inherits all the methods and properties from Employee class.
// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
