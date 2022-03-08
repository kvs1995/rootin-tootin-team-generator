//test for Engineer
//import in the Engineer class
const Engineer = require('../lib/Engineer');
//Test 1

describe("Engineer", () => {
  describe("Initialization", () => {
    //Positive test
    it("should create constructor called Engineer that contains 4 properties: id, name, email and github.", () => {
      //Arrange
      const engineerInfo = { id: "1", name: "Kendall", email: "fake@gmail.com", github: "kvs1995" };
      const engineer = new Engineer(engineerInfo)

      //Assert
      //the constructor name of the engineer object is Engineer
      expect(engineer.constructor.name).toBe("Engineer");
      //the length of the engineer object is equal to 3 
      expect(Object.keys(engineer).length).toBe(4);
      //When running the newly created method, it should include an id with a value of 3, a name equal to Kendall and an email equal to email address. 
      expect(engineer).toEqual({ id: "1", name: "Kendall", email: "fake@gmail.com", github: "kvs1995"});
    });

  });

  describe("getID", () => {
    it("should return the ID key value of the newly created constructor", () => {
      //Arrange
      const engineerInfo = { id:1, name:"Kendall", email: "fake@gmail.com", github: "kvs1995"};
      const engineer = new Engineer(engineerInfo);

      expect(engineer.getId()).toEqual(engineerInfo.id);
    });
  });

  describe("getName", () => {
    it("should return the name key value of the newly created constructor", () => {
      //Arrange
      const engineerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", github: "kvs1995"};
      const engineer = new Engineer(engineerInfo);

      expect(engineer.getName()).toBe(engineerInfo.name);

    });
  });

  describe("getEmail", () => {
    it("should return the email key value of the newly created constructor", () => {
      const engineerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", github: "kvs1995"};
      const engineer = new Engineer(engineerInfo);

      expect(engineer.getEmail()).toBe(engineerInfo.email);
    });
  });

  describe("getGithub", () => {
    it("should return the github key value of the newly created constructor", () => {
      const engineerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", github: "kvs1995"};
      const engineer = new Engineer(engineerInfo);

      expect(engineer.getGithub()).toBe(engineerInfo.github);
    });
  });

  describe("getRole", () => {
    it("should return the role of the new created constructor", () => {
      const engineerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", github: "kvs1995"};
      const engineer = new Engineer(engineerInfo);

      expect((engineer).getRole()).toBe("Engineer");
    });
  });
})

//Engineer class test

//validate that the github has a value

//getGithub() reutnrs a github username

//getRole () returns 'Engineer'