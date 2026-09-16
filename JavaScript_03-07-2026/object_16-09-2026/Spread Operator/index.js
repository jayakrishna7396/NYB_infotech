// Spread Operator
// Definition: The spread operator (...) expands elements of an array or properties of an object.

// Example 1: Copy an array
let numbers = [10, 20, 30];

let copy = [...numbers];

console.log("Original Array:", numbers);
console.log("Copied Array:", copy);

// Example 2: Add new value to an array
let fruits = ["Apple", "Banana"];

let newFruits = [...fruits, "Mango"];

console.log("New Fruits:", newFruits);

// Example 3: Combine two arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combined = [...array1, ...array2];

console.log("Combined Array:", combined);

// Example 4: Copy an object
let student = {
    name: "Krishna",
    age: 22
};

let studentCopy = {
    ...student
};

console.log("Student Copy:", studentCopy);

// Example 5: Add property to copied object
let newStudent = {
    ...student,
    course: "JavaScript"
};

console.log("New Student:", newStudent);

// Example 6: Combine two objects
let personal = {
    name: "Krishna",
    age: 22
};

let education = {
    course: "JavaScript",
    duration: "3 Months"
};

let details = {
    ...personal,
    ...education
};

console.log("Combined Object:", details);