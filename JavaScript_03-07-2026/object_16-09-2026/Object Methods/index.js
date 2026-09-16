// Object Methods
// Definition: An object method is a function stored inside an object.

// Example 1: Simple Object Method
let student = {
    name: "Krishna",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

student.greet();

// Example 2: Method with calculation
let calculator = {
    num1: 10,
    num2: 20,

    add: function() {
        console.log("Sum:", this.num1 + this.num2);
    }
};

calculator.add();

// Example 3: Method with parameters
let person = {
    name: "Krishna",

    sayHello: function(city) {
        console.log("Hello " + this.name + " from " + city);
    }
};

person.sayHello("Hyderabad");

// Example 4: Updating object property using a method
let employee = {
    name: "Rahul",
    salary: 30000,

    increaseSalary: function(amount) {
        this.salary = this.salary + amount;
        console.log("Updated Salary:", this.salary);
    }
};

employee.increaseSalary(5000);