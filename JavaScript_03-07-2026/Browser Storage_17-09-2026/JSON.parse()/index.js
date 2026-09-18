// JSON.parse()
// Definition:
// JSON.parse() converts a JSON string into a JavaScript object.

let studentString = '{"name":"Krishna","age":22,"course":"JavaScript"}';

console.log("Before JSON.parse():");
console.log(studentString);

console.log("Type before:", typeof studentString);

// Convert JSON string into JavaScript object
let student = JSON.parse(studentString);

console.log("After JSON.parse():");
console.log(student);

console.log("Type after:", typeof student);

console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Course:", student.course);