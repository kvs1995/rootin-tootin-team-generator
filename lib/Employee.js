// Employee parent class
//properties: name, id, email
//methods: getName(), getId(), getEmail()
  //getRole() -- returns Employee

//TODO: import in the responses from the inquirer
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer.prompt(employeeQuestions)
    //TODO: bring in the answers and set the this.name = to getName() and it will grab the name returned
    .then((data) => {
      return data.name;
    })
  }

  
}

module.exports = Employee;