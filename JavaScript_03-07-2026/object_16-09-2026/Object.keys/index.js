// Object.keys()
// Definition: Object.keys() returns an array containing all keys of an object.

let student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript"
};

let keys = Object.keys(student);

console.log("Keys:", keys);

// Access individual keys

console.log("First Key:", keys[0]);
console.log("Second Key:", keys[1]);
console.log("Third Key:", keys[2]);

// Find number of properties
console.log("Number of Properties:", keys.length);