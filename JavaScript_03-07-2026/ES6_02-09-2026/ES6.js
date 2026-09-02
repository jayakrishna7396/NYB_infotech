//let and const
let age = 25;
const name = "Jayakrish";

console.log(name);
console.log(age);

//arrow function
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// Template Literal
// const name = "Jayakrish";
// const age = 25;
// console.log(`My name is ${name} and I am ${age} years old.`);



//Destructuring
// const student = {
//     name: "Jayakrish",
//     age: 25
// };

// const { name, age } = student;

// console.log(name);
// console.log(age);



// Spread Operator
const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40];

console.log(newNumbers);


// Default Parameter
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Jayakrish");


// Classes
// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log("Hello " + this.name);
//     }
// }

// const student = new Student("Jayakrish");
// student.greet();


// Optional Chaining
// const student = {
//     name: "Jayakrish"
// };

// console.log(student.address?.city);


// Nullish Coalescing
// let name = null;

// console.log(name ?? "Guest");


// Async/Await
async function getData() {
    const result = await Promise.resolve("Data received");

    console.log(result);
}

getData();