//test for employee
//import in the Employee class
const Employee = require('../lib/Employee');
//Test 1

describe("Employee", () => {
  describe("Initialization", () => {
    //Positive test
    it("should create constructor called Employee that contains 3 properties: id, name and email", () => {
      //Arrange
      const employeeInfo = { id: "1", name: "Kendall", email: "fake@gmail.com"};
      const employee = new Employee(employeeInfo)

      //Assert
      //the constructor name of the employee object is Employee
      expect(employee.constructor.name).toBe("Employee");
      //the length of the employee object is equal to 3 
      expect(Object.keys(employee).length).toBe(3);
      //When running the newly created method, it should include an id with a value of 3, a name equal to Kendall and an email equal to email address. 
      expect(employee).toEqual({ id: "1", name: "Kendall", email: "fake@gmail.com"});
    });

  });

  describe("getID", () => {
    it("should return the ID key value of the newly created constructor", () => {
      //Arrange
      const employeeInfo = { id:1, name:"Kendall", email: "fake@gmail.com"};
      const employee = new Employee(employeeInfo);

      expect(employee.getId()).toEqual(employeeInfo.id);
    });
  });

  describe("getName", () => {
    it("should return the name key value of the newly created constructor", () => {
      //Arrange
      const employeeInfo = { id:1, name:"Kendall", email:"fake@gmail.com"};
      const employee = new Employee(employeeInfo);

      expect(employee.getName()).toBe(employeeInfo.name);

    });
  });

  describe("getEmail", () => {
    it("should return the email key value of the newly created constructor", () => {
      const employeeInfo = { id:1, name:"Kendall", email:"fake@gmail.com"};
      const employee = new Employee(employeeInfo);

      expect(employee.getEmail()).toBe(employeeInfo.email);
    });
  });

  describe("getRole", () => {
    it("should return the role of the new created constructor", () => {
      const employeeInfo = { id:1, name:"Kendall", email:"fake@gmail.com"};
      const employee = new Employee(employeeInfo);

      expect(employee.getRole()).toBe("Employee");
    });
  });
});
