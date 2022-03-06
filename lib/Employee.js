// Employee parent class
//properties: name, id, email
//methods: getName(), getId(), getEmail()
  //getRole() -- returns Employee

//TODO: import in the responses from the inquirer
class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
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