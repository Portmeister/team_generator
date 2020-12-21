# team_generator

# Task

Build a software engineering team generator command line application. The application prompts user for information about the team manager and then information about the team members. The user can input one Manager and any number of team members, i.e. Engineers and Interns. The application passes all unit tests. When user completes building the team, the application creates an HTML file that displays a nicely formatted team roster based on the information provided.

# Resources

Application uses the following resources:

* [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) to prompt the user for their email, id, and specific information based on their role with the company. For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* App runs as a Node CLI to gather information about each employee.

* Below is an example of what your application may look like. Remember, the styling is completely up to you so try to make it unique.

![Employee Summary 1](assets\images\10-OOP-homework-demo-1.png)
![Employee Summary 2](assets\images\10-OOP-homework-demo-2.png)

In the `Develop` folder, there is a `package.json`

The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

There are also unit tests to help build the classes necessary.

## Requirements

* Functional application.

* GitHub repository with a unique name and a README describing the project: https://github.com/Portmeister/team_generator

* User can use the CLI to generate an HTML page that displays information about their team.

* All tests pass.

* Project generates `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member displays the following:
- Name
- Role
- ID
- Role-specific property (School, link to GitHub profile, or office number)


# Deployment

You are required to submit the following:

* The URL of the GitHub repository: https://github.com/Portmeister/team_generator

* A video demonstrating the entirety of the app's functionality: https://drive.google.com/file/d/1fYJk2wt6tBoCx_zoSnyGtDG8nkyNxPnG/view

# Contributors

- starter code provided by Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
- Carrol W Porter (Portmeister)