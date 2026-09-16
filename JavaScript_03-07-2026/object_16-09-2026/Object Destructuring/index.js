// Object Destructuring
// Definition: Object destructuring extracts values from an object into variables.

let student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript"
};

// Extract values from object
let { name, age, course } = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);

// Example 2: Extract selected properties
let person = {
    name: "Rahul",
    age: 25,
    city: "Hyderabad",
    job: "Developer"
};

let { name: personName, city } = person;

console.log("Person Name:", personName);
console.log("City:", city);

// Example 3: Default value
let employee = {
    name: "Arun",
    age: 28
};

let { name: employeeName, salary = 30000 } = employee;

console.log("Employee Name:", employeeName);
console.log("Salary:", salary);