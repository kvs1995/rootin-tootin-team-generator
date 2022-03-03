//should include prompts that are asked when application is started. answers are set to the properties in the different classes and subclasses

//TODO: Include packages and files needed for this application
  //packages: inquirer, fs
  //file: generateHTML
const inquirer = require('inquirer')
const fs = require('fs')

const generateHTML = require('./src/generateHTML')

//TODO: questions array that includes objects with each question {type, name, message}
//TODO: Employee picker
const employeePicker = [
  {
    type: 'list',
    name: 'pick',
    message: 'What team member would you like to add next?',
  }
];

//TODO: manager questions 
const employeeQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your team member?',
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the team member's ID?",
  },
  {
    type: 'input',
    name: 'email',
    message: "Please provide the team member's email address.",
  }
];

//TODO: Manager specific questions
const managerQuestions = [
  {
    type: 'input',
    name: 'office_number',
    message: "Please provide the team manager's office number. ",
  }
];

//TODO: Engineer
const engineerQuestions = [
  {
    type: 'input',
    name: 'github_username',
    message: "Please provide this engineer's Github username."
  }
]
//TODO: Intern
const internQuestions = [
  {
    type: 'input',
    name: 'school',
    message: 'Where did this intern attend school?'
  }
]
//TODO: Create a function to write README file

//TODO: Create a function to initialize app


//TODO: Function call to initialize app 

