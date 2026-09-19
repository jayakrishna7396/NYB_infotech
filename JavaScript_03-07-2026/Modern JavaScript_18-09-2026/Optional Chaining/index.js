// Optional Chaining
// Definition:
// Optional chaining (?.) is used to safely
// access properties that may not exist.

const student = {
    name: "Krishna",
    age: 25
};

console.log(student.name);
console.log(student.city?.name);