// JSON.stringify()
// Definition:
// Converts a JavaScript object or array into a JSON string.

let student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript"
};

console.log("Before stringify:", student);

let studentString = JSON.stringify(student);

console.log("After stringify:", studentString);

console.log("Type:", typeof studentString);