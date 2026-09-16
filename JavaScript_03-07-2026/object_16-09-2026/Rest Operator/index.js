// Rest Operator
// Definition: The rest operator (...) collects remaining values into an array or object.

// Example 1: Rest in Function
function showNumbers(...numbers) {
    console.log("Numbers:", numbers);
}

showNumbers(10, 20, 30, 40);

// Example 2: Rest with Array
let numbers = [10, 20, 30, 40];

let [first, ...remaining] = numbers;

console.log("First:", first);
console.log("Remaining:", remaining);

// Example 3: Rest with Object
let student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript",
    city: "Hyderabad"
};

let { name, ...details } = student;

console.log("Name:", name);
console.log("Other Details:", details);

// Example 4: Rest in Function with Calculation
function addNumbers(...numbers) {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    console.log("Total:", total);
}

addNumbers(10, 20, 30);