//Engineer subclass 
//include all Employee parent class properties and methods
//in addition:
  //properties: github
  //methods: getGithub()
    //getRole() -- return Engineer

//import Employee parent class 
const Employee = require('./Employee')

//TODO: Create a `Engineer` class that extends the `Employee` class
class Engineer extends Employee {
  //Create a constructor that pulls in the super class data and the unique property Github
 constructor(responses) {
  //bring in the properties from the super class
  super(responses) ;
  
  //grab the github username
  this.github = responses.github;
 }

  //method to grab the gtihub username
  getGithub() {
    return this.github;
  }

  //method to grab the role 
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;