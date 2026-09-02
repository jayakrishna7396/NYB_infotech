const student = {
    name: "Jayakrish"
};

console.log(student.__proto__);

// Output will show the object's prototype, usually:
Object.prototype

//example
const person = {
    name: "Jayakrish"
};

console.log(person.__proto__ === Object.prototype);

// Output:
true