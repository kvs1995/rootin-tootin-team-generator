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

//create an empty employeeList array that will have each of the new employees pushed into it.
let employeeList = [];
//create/set the currentEmployeeType equal to 'Manager' - to be used in intial call
let employeeType = 'Manager';


//create function that prompts inquirer with questions and loops through until the user is done adding new employee

const getEmployees = async(employeeType) => {
  //create a list of questions to be asked by the inquirer prompt
// let newEmployeeType;

/*
TO DO (questions):
  --figure out way to insert template literals so populates what employee you want to add rather than 'employee'
  --Need to add in validation
*/

  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the employee\'s name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee\'s id?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee\'s email address?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please provide the manager\'s office number.',
      when: employeeType === 'Manager',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide the new Engineer\'s github username.',
      when: employeeType === 'Engineer',
    },
    {
      type: 'input',
      name: 'school',
      message: 'Where did the intern attend school?',
      when: employeeType === 'Intern',
    },
    {
      type: 'list',
      name: 'nextEmployeeType',
      message: 'What team member would you like to add next?',
      choices: [
        'Engineer',
        'Intern',
        'The perfect team is complete.'
      ],
    }
  ]
  currentEmployeeType = employeeType
  //create/set responses variable equal to the responses from inquirer.prompt of questions
    //use spread method on responses so I can potentially add to the new Employee in a list rather than pushing
  const responses  = await inquirer.prompt(questions)
  //call the new Employee function to add the puhs the new employee to the list
  newEmployee(responses)
  //return a ternary operator that reruns getEmployee if the currentEmployeeType is set to the choice indicating they are complete.
  return (responses.nextEmployeeType !== 'The perfect team is complete.') ? getEmployees(responses.nextEmployeeType) : employeeList;
}

//Must add a middle function can be used to call the get Employee again. 
const newEmployee = (responses) => {
    //psuh the responses in the employeeList 
    //based on the currentEmployeeType, use switch operator.
    switch(currentEmployeeType) {
      case 'Manager': 
        employeeList.push(new Manager(responses,))
        break;
      case 'Engineer':
        employeeList.push(new Engineer(responses));
        break;
      case 'Intern': 
        employeeList.push(new Intern(responses));
    }
}

//create function to write the generated HTML to index.html file, passes in the data from init function
function writeToFile(fileName, data) {
  const generateHTMLString = generateHTML(data);
  fs.writeFile(`${fileName}.html`,generateHTMLString, (err) =>
  err ? console.log(err) : console.log('Your HTML has been generated.'))
}
//create init function - should be async await so that it waits for the employeeList from the get Employees
const init = async() => {
  const data = await getEmployees(employeeType)
  writeToFile('index', data);
}

//call init function to initliaze the application. 
init();
