//Intern class tests

//school property should have a value and not be null


//getSchool() returns a school value

//get Role() returns 'Intern'

//test for Intern
//import in the Intern class//test for Intern
//import in the Intern class
const Intern = require('../lib/Intern');
//Test 1

describe("Intern", () => {
  describe("Initialization", () => {
    //Positive test
    it("should create constructor called Intern that contains 4 properties: id, name, email and school.", () => {
      //Arrange
      const internInfo = { id: "1", name: "Kendall", email: "fake@gmail.com", school: "University of Iowa" };
      const intern = new Intern(internInfo)

      //Assert
      //the constructor name of the intern object is Intern
      expect(intern.constructor.name).toBe("Intern");
      //the length of the intern object is equal to 3 
      expect(Object.keys(intern).length).toBe(4);
      //When running the newly created method, it should include an id with a value of 3, a name equal to Kendall and an email equal to email address. 
      expect(intern).toEqual({ id: "1", name: "Kendall", email: "fake@gmail.com", school: "University of Iowa"});
    });

  });

  describe("getID", () => {
    it("should return the ID key value of the newly created constructor", () => {
      //Arrange
      const internInfo = { id:1, name:"Kendall", email: "fake@gmail.com", school: "University of Iowa"};
      const intern = new Intern(internInfo);

      expect(intern.getId()).toEqual(internInfo.id);
    });
  });

  describe("getName", () => {
    it("should return the name key value of the newly created constructor", () => {
      //Arrange
      const internInfo = { id:1, name:"Kendall", email:"fake@gmail.com", school: "University of Iowa"};
      const intern = new Intern(internInfo);

      expect(intern.getName()).toBe(internInfo.name);

    });
  });

  describe("getEmail", () => {
    it("should return the email key value of the newly created constructor", () => {
      const internInfo = { id:1, name:"Kendall", email:"fake@gmail.com", school: "University of Iowa"};
      const intern = new Intern(internInfo);

      expect(intern.getEmail()).toBe(internInfo.email);
    });
  });

  describe("getSchool", () => {
    it("should return the school key value of the newly created constructor", () => {
      const internInfo = { id:1, name:"Kendall", email:"fake@gmail.com", school: "University of Iowa"};
      const intern = new Intern(internInfo);

      expect(intern.getSchool()).toBe(internInfo.school);
    });
  });

  describe("getRole", () => {
    it("should return the role of the new created constructor", () => {
      const internInfo = { id:1, name:"Kendall", email:"fake@gmail.com", school: "University of Iowa"};
      const intern = new Intern(internInfo);

      expect((intern).getRole()).toBe("Intern");
    });
  });
})

//Intern class test

//validate that the school has a value

//getSchool() reutnrs a school username

//getRole () returns 'Intern'