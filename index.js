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

  //create a list of questions to be asked by the inquirer prompt


  //create an empty employeeList array that will have each of the new employees pushed into it.

  //create/set the currentEmployeeType equal to 'Manager' - to be used in intial call

  //create function that prompts inquirer with questions and loops through until the user is done adding new employee

    //create/set responses variable equal to the responses from inquirer.prompt of questions
      //use spread method on responses so I can potentially add to the new Employee in a list rather than pushing

    //psuh the responses in the employeeList 
      //based on the currentEmployeeType, use switch operator.

    //After pushing the new employee to the employeeList, currentEmployeeType can be set to the responses.nextEmployeeType

    //return a ternary operator that reruns getEmployee if the currentEmployeeType is set to the choice indicating they are complete.

  
//create function to write the generated HTML to index.html file, passes in the data from init function

