# Template Engine - Employee Summary

## Description

This project is to build a software engineering team generator command line application that is able to gather each employee information by prompting questions as well as generates an HTML webpage that displays summaries for each person in one development team.

## Table of Contents

- [Instructions](#Instructions)
- [Installation](#Installation)
- [Class](#Class)
- [Demo](#Demo)
- [License](#license)
- [Questions](#questions)

## Instructions

### User input:

- When user run `npm app.js` in command line application, user will be prompted questions about adding employees’ information before creating a team.

- The team will include three type of roles: managers, engineers and inters. They will be prompted for the same questions: name, id , and email , and a specific question for each role of employees in the prompted question. ( For example, a manager may provide with an office number, an engineer may provide with a GitHub username and an intern may provide with his/her school name. )
- Validation object is used to ensure that information provided is in the proper expected format.

### Roster output:

- When user is done with adding employees, he can select the option of create a team, then the application will generate a team.html page in the output folder, that displays a nicely formatted team roster along with the input of each team member’s information.

## Installation

Run `npm install` in in command line in order to install the following npm package dependencies as specified in the `package.json`:

- `inquirer` : for collecting input from the user with `npm app.js`.
- `jest` : for running the provided tests with `npm test`.

## Class: Object-Oriented Programming

One supper class: Employee, and three sub classes: Manager, Engineer, Intern to extend Employee were applied to build the object constructions. The tests for these classes in the tests directory are all passed.

## Demo

![ProfessionalREADMEGenerator](./Develop/demo/ProfessionalREADMEGenerator.gif)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Questions

If you have any questions about this this application, please feel free to reach me via the link of my [GitHub](https://github.com/aprilyanggarwood) and my Email: <aprilyanggarwood@gmail.com>
