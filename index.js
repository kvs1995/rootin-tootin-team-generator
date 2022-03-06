//should include prompts that are asked when application is started. answers are set to the properties in the different classes and subclasses

//TODO: Include packages and files needed for this application
  //packages: inquirer, fs
  //file: generateHTML
  const inquirer = require('inquirer');
  const fs = require('fs');
  
  //import generate HTML that will generate the html for index.html
  const generateHTML = require('./src/generateHTML');
  
  //import class of employees so we can create new ones - Employee is not needed since Manager, Engineer and Intern are extensions of Employee
  const Manager = require('./lib/Manager');
  const Engineer = require('./lib/Engineer');
  const Intern = require('./lib/Intern');