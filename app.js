const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


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


let employee = [];

ear
const managerInfo= [
  {
    type: "input",
    name: "name",
    message: "Enter your manager's name?",
  },

  {
    type: "input",
    name: "id",
    message: "Enter your manager's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your manager's email address?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your manager's office number?",
  },
  {
    type: "list",
    name: "employees",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];
const engineerInfo = [
  {
    type: "input",
    name: "name",
    message: "Enter your engineer's name?",
  },

  {
    type: "input",
    name: "id",
    message: "Enter your engineer's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your engineer's github username?",
  },

  {
    type: "list",
    name: "employees",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];
const internInfo = [
  {
    type: "input",
    name: "name",
    message: "Enter your intern's name?",
  },

  {
    type: "input",
    name: "id",
    message: "Enter your intern's ID number?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "Enter your intern's school?",
  },
  {
    type: "list",
    name: "employees",
    message: "Which type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];

inquirer.prompt(managerInfo).then((data) => {
  const manObj = new Manager(data.name, data.id, data.email, data.officeNumber);
  employee.push(manObj);
  
    let newEmployee = data.employees;
 
       function getData(newEmployee) {
             if (newEmployee === "Engineer") {
             inquirer.prompt(engineerInfo).then((data) => {
             let newEmployee = data.employees;
             let engObj = new Engineer(data.name, data.id, data.email, data.github);
             employee.push(engObj);
             getData(newEmployee);
      });
    } else if (newEmployee === "Intern") {
        inquirer.prompt(internInfo).then((data) => {
        let newEmployee = data.employees;
        let intObj = new Intern(data.name, data.id, data.email, data.school);
        employee.push(intObj);
        getData(newEmployee);
      });
    } else {
      console.log(employee);
      fs.writeFile(outputPath, render(employee), (err) => {
        if (err) {
          return console.log(err);
        }
      });
    }
  }

  getData(newEmployee);
});
