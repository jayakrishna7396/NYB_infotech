// Shallow Copy
// Definition: Shallow copy creates a new object, but nested objects are shared.

// Example 1: Shallow copy using spread operator
let student = {
    name: "Krishna",
    age: 22
};

let copy = { ...student };

copy.name = "Rahul";

console.log("Original:", student);
console.log("Copy:", copy);

// Example 2: Shallow copy with nested object
let person = {
    name: "Krishna",

    address: {
        city: "Hyderabad"
    }
};

let personCopy = { ...person };

// Change nested property
personCopy.address.city = "Chennai";

console.log("Original Person:", person);
console.log("Copied Person:", personCopy);