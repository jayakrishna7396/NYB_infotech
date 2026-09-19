// Constructor Functions
// Definition:
// A constructor function is a function used to create
// multiple objects with the same properties and methods.
//
// It is normally called using the "new" keyword.


// 1. Constructor Function

function Student(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}


// 2. Create Objects using Constructor

const student1 = new Student("Krishna", 25, "Hyderabad");

const student2 = new Student("Rahul", 24, "Chennai");


// 3. Access Object Properties

console.log("Student 1:", student1);
console.log("Student 2:", student2);

console.log("Name:", student1.name);
console.log("Age:", student1.age);
console.log("City:", student1.city);


// 4. Constructor Property
// Definition:
// constructor points to the function that created the object.

console.log(student1.constructor);


// 5. Add a Method

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;

    this.display = function () {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    };
}


// 6. Create Employee Objects

const employee1 = new Employee("Krishna", 30000);

const employee2 = new Employee("John", 40000);


// 7. Call Method

employee1.display();

employee2.display();