const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const engineeringTeamList = [];

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

// ES6 object distructing with {Mannager,Engineer,Intern}. Three properties are from three subclass modules
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
    // ES6 object distructing with {menu}
    .then(({ menu }) => {
      if (menu === "Add new Employee") {
        inquirer.prompt(emplyeeQuestions).then((data) => {
          name = data.name;
          id = data.id;
          email = data.email;
          role = data.role;
          // ES6 object distructing with {extra}
          inquirer.prompt(extraQuestions[role]).then(({ extra }) => {
            // new roles[role](paremters) = new Roles(paremters)；
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

// user will
function createTeam() {
  // user can create a team name before or after adding employees
  inquirer
    .prompt({
      type: "input",
      name: "teamname",
      message: "What is your team's name?",
    })
    .then((answer) => {
      const teamname = answer.teamname.toLowerCase().trim();
      // const render = require("./lib/htmlRenderer");
      const htmlString = render(engineeringTeamList);
      // fs.writeFile(filename, data, [encoding], [callback])
      // html file will be gerenated with the team name which was created by user response input.
      fs.writeFile(`./output/${teamname}.html`, htmlString, (err) => {
        console.log(err || "Success!");
        init();
      });
    });
}
init();
// function ValidataEmail(InputEmailText) {
//   const emailValidFormat = new RegExp(/^.+@.+\.(com|net|edu)$/);
//   if (emailValidFormat.test(InputEmailText.value)) {
//     console.log("Great! This is an valid email address!");
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ValidataEmail("aprilyang@hotmail.com"));
