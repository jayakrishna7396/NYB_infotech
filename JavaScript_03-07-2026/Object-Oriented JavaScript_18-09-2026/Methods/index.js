// Methods
// Definition:
// A method is a function inside an object or class.
// It is used to perform an action.

// Method inside an Object

const student = {

    name: "Krishna",
    age: 25,

    // This is a method
    greet: function () {
        console.log("Hello Krishna");
    },

    display: function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
};

// Calling methods

student.greet();

student.display();


// Method inside a Class

class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Method
    showDetails() {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
    }

    // Another method
    increaseSalary() {
        this.salary = this.salary + 5000;
        console.log("New Salary:", this.salary);
    }
}


// Create object

const employee1 = new Employee("Krishna", 30000);


// Call methods

employee1.showDetails();

employee1.increaseSalary();

employee1.showDetails();