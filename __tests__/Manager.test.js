//Manager class tests

//value for office Number

//getRole() returns Manager


const Manager = require('../lib/Manager');
//Test 1

describe("Manager", () => {
  describe("Initialization", () => {
    //Positive test
    it("should create constructor called Manager that contains 4 properties: id, name, email and officeNumber.", () => {
      //Arrange
      const managerInfo = { id: 1, name: "Kendall", email: "fake@gmail.com", officeNumber: 1 };
      const manager = new Manager(managerInfo)

      //Assert
      //the constructor name of the manager object is Manager
      expect(manager.constructor.name).toBe("Manager");
      //the length of the manager object is equal to 3 
      expect(Object.keys(manager).length).toBe(4);
      //When running the newly created method, it should include an id with a value of 3, a name equal to Kendall and an email equal to email address. 
      expect(manager).toEqual({ id: 1, name: "Kendall", email: "fake@gmail.com", officeNumber: 1});
    });

  });

  describe("getID", () => {
    it("should return the ID key value of the newly created constructor", () => {
      //Arrange
      const managerInfo = { id:1, name:"Kendall", email: "fake@gmail.com", officeNumber: 1};
      const manager = new Manager(managerInfo);

      expect(manager.getId()).toEqual(managerInfo.id);
    });
  });

  describe("getName", () => {
    it("should return the name key value of the newly created constructor", () => {
      //Arrange
      const managerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", officeNumber: 1};
      const manager = new Manager(managerInfo);

      expect(manager.getName()).toBe(managerInfo.name);

    });
  });

  describe("getEmail", () => {
    it("should return the email key value of the newly created constructor", () => {
      const managerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", officeNumber: 1};
      const manager = new Manager(managerInfo);

      expect(manager.getEmail()).toBe(managerInfo.email);
    });
  });

  describe("officeNumber", () => {
    it("should return the office number key value of the newly created constructor", () => {
      const managerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", officeNumber: 1};
      const manager = new Manager(managerInfo);

      expect(manager.officeNumber).toBe(managerInfo.officeNumber);
    });
  });

  describe("getRole", () => {
    it("should return the role of the new created constructor", () => {
      const managerInfo = { id:1, name:"Kendall", email:"fake@gmail.com", officeNumber: 1};
      const manager = new Manager(managerInfo);

      expect((manager).getRole()).toBe("Manager");
    });
  });
})