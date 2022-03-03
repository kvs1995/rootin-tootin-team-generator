// Employee parent class
//properties: name, id, email
//methods: getName(), getId(), getEmail()
  //getRole() -- returns Employee

//import in the responses from the inquirer
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

}

module.exports = Employee;