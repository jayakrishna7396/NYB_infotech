// Prototype
// Definition:
// Prototype is an object from which other objects
// can inherit properties and methods.

// Constructor Function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to Prototype
Student.prototype.greet = function () {
    console.log("Hello, my name is " + this.name);
};

// Creating objects
const student1 = new Student("Krishna", 22);
const student2 = new Student("Rahul", 23);

// Accessing properties
console.log(student1.name);
console.log(student1.age);

console.log(student2.name);
console.log(student2.age);

// Calling prototype method
student1.greet();
student2.greet();

// Display prototype
console.log(Student.prototype);