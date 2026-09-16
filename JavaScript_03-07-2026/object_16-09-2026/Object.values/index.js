// Object.values()
// Definition: Object.values() returns an array containing all values of an object.

let student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript"
};

let values = Object.values(student);

console.log("Values:", values);

// Access individual values

console.log("First Value:", values[0]);
console.log("Second Value:", values[1]);
console.log("Third Value:", values[2]);

// Find number of values

console.log("Number of Values:", values.length);