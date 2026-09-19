// JavaScript Classes
// Definition:
// A class is a blueprint for creating objects.
// It can contain properties and methods.
//
// class is used to create objects in an organized way.


// 1. Creating a Class
// Definition:
// The class keyword is used to create a class.

class Student {

    // 2. Constructor
    // Definition:
    // constructor() is a special method that runs
    // automatically when a new object is created.

    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }


    // 3. Method
    // Definition:
    // A function inside a class is called a method.

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.city);
    }
}


// 4. Creating Objects
// Definition:
// The new keyword is used to create an object
// from a class.

const student1 = new Student(
    "Krishna",
    25,
    "Hyderabad"
);

const student2 = new Student(
    "Rahul",
    24,
    "Chennai"
);


// 5. Accessing Properties

console.log("Student 1 Name:", student1.name);
console.log("Student 1 Age:", student1.age);
console.log("Student 1 City:", student1.city);


// 6. Calling Method

student1.display();

student2.display();


// 7. Another Class Example

// Definition:
// A class can contain properties and methods
// for different types of objects.

class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
    }
}


// Create Employee Objects

const employee1 = new Employee("Krishna", 30000);

const employee2 = new Employee("John", 40000);


// Call Methods

employee1.showDetails();

employee2.showDetails();