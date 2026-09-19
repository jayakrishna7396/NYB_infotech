// Prototype Chain
// Definition:
// Prototype Chain is the process JavaScript uses
// to search for properties and methods in objects.

// Parent Object
const person = {
    name: "Krishna"
};

// Create another object using person as prototype
const student = Object.create(person);

// Add property to student
student.age = 22;

// Access student's own property
console.log(student.age);

// Access property from prototype
console.log(student.name);

// Access a method from Object.prototype
console.log(student.toString());