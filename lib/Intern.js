//Intern subclass
//should include properties and methods of Employee parent class
//in addition: 
  //properties: school
  //methods: getSchool()
  //getRole() -- returns Intern


//import Employee parent class 
const Employee = require('./Employee')

//TODO: Create a `Intern` class that extends the `Employee` class
class Engineer extends Employee {
  //Create a constructor that pulls in the super class data and the unique property school attended
 constructor(id, name, email, school) {
  //bring in the properties from the super class
  super(id, name, email) ;
  
  //grab the school name
  this.school = school;
 }

  //method to grab the school name
  getSchool() {
    return this.school;
  }

  //method to grab the role 
  getRole() {
    return 'Intern';
  }
}
  