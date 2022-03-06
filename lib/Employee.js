// Employee parent class
//properties: name, id, email
//methods: getName(), getId(), getEmail()
  //getRole() -- returns Employee

//TODO: import in the responses from the inquirer
class Employee {
  constructor(responses) {
    this.id = responses.id;
    this.name = responses.name;
    this.email = responses.email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee'
  }
  
}

module.exports = Employee;