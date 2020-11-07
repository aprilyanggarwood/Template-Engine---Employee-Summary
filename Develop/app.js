const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var engineeringTeamList = [];

const emplyeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "employee's name:",
  },
  {
    type: "input",
    name: "id",
    message: "emlopyee's id:",
  },
  {
    type: "input",
    name: "email",
    message: "emlopyee's email:",
  },
  {
    type: "list",
    name: "role",
    message: "What is your role in the team?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const extraQuestions = {
  Manager: {
    type: "input",
    message: "What is the manager's office number?",
    name: "extra",
  },
  Engineer: {
    type: "input",
    message: "What is the engineer's github name?",
    name: "extra",
  },
  Intern: {
    type: "input",
    message: "What is the intern's school?",
    name: "extra",
  },
};

const roles = {
  Manager,
  Engineer,
  Intern,
};

function init() {
  inquirer
    .prompt({
      message: "What would you like to do?",
      type: "list",
      choices: ["Add new Employee", "Create Team Profile"],
      name: "menu",
    })
    .then(({ menu }) => {
      if (menu === "Add new Employee") {
        inquirer.prompt(emplyeeQuestions).then((data) => {
          name = data.name;
          id = data.id;
          email = data.email;
          role = data.role;
          inquirer.prompt(extraQuestions[role]).then(({ extra }) => {
            const newEmp = new roles[role](name, id, email, extra);
            engineeringTeamList.push(newEmp);
            console.log(`New ${role} added to team!`);
            init();
          });
        });
      } else {
        createTeam();
      }
    });
}

function createTeam() {
  const htmlString = render(engineeringTeamList);
  fs.writeFile(outputPath, htmlString, (err) => console.log(err || "Success!"));
}

init();

// function ValidateEmail(InputEmailText) {
//   const emailValidFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if (InputEmailText.value == emailValidFormat) {

//     return true;
//   } else {
//     alert("Great! This is an invalid email address!");

//     return false;
//   }
// }

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
