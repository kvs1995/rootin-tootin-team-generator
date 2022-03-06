//Manager subclass 
//should have all properties and methods of the Employee parent class
//additionally:
  //properties: officeNumber
  //method: getRole() returns Manager


//import Employee parent class 
const Employee = require('./Employee')

//TODO: Create a `Manager` class that extends the `Employee` class
class Manager extends Employee {
  //Create a constructor that pulls in the super class data and the unique property phone number
 constructor(responses) {
  //bring in the properties from the super class
  super(responses) ;
  
  // //grab the office number
  // this.officeNumber = officeNumber;
  this.officeNumber = responses.officeNumber
}
//  getOfficeNumber() {
//    return this.officeNumber
//  }


  //method to grab the role 
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;