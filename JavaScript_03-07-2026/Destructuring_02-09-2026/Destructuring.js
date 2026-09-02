const student = {
    name: "Jayakrish",
    age: 25,
    course: "JavaScript"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);



// 2. Array Destructuring
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);


// Skipping Values
// const numbers = [10, 20, 30];

// const [first, , third] = numbers;

// console.log(first);
// console.log(third);


// Renaming Object Properties
// const student = {
//     name: "Jayakrish",
//     age: 25
// };

const { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);