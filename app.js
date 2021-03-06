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

const team = [];

function mgrInfo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'mgrName',
            message: "What is your Manager's name?",
        },
        {
            type: 'input',
            name: 'mgrId',
            message: "What is your Manager's id?",
        },
        {
            type: 'input',
            name: 'mgrEmail',
            message: "What is your Manager's email?",
        },
        {
            type: 'input',
            name: 'mgrOfficeNum',
            message: "What is your Manager's office number?",
        },
    ]).then(mgrAnswers => {
        let manager = new Manager(mgrAnswers.mgrName, mgrAnswers.mgrId, mgrAnswers.mgrEmail, mgrAnswers.mgrOfficeNum);
        team.push(manager);
        teamSupport();
    })
}

function teamSupport() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'supportRole',
            message: 'Type of employee support role to be added?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is your Employee's name?",
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "What is your Employee's id?",
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is your Employee's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub Username?',
            when: (userInput) => userInput.supportRole === "Engineer"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Intern's School?",
            when: (userInput) => userInput.supportRole === "Intern"
        },
        {
            type: 'confirm',
            name: 'newRole',
            message: "Do you wish to add another support role to the team?"
        }
    ]).then(answers => {
        if (answers.supportRole === "Engineer") {
            const teamMember = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github);
            team.push(teamMember);
        } else if (answers.supportRole === "Intern") {
            const teamMember = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.internSchool);
            team.push(teamMember);
        }
        if (answers.newRole === true) {
            teamSupport();
        } else {
            //console.log(team)
            //render(team);
            //console.log(render(team));
            fs.writeFile(outputPath, render(team), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
              })
        };
    })

}

mgrInfo();

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
