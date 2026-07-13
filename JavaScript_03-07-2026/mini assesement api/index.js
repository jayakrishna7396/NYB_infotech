// API Integration
export async function getStudents() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("API Error");
        }

        return await response.json();

    } catch (error) {
        console.log(error.message);
    }
}


// Modules (utils.js)
export function greet(name) {
    return `Welcome ${name}`;
}

// Import:
import { greet } from "./utils.js";

console.log(greet("Jaya"));

// Local Storage (storage.js)
export function saveStudents(data) {
    localStorage.setItem("students", JSON.stringify(data));
}

export function loadStudents() {
    return JSON.parse(localStorage.getItem("students")) || [];
}

//Session Storage
sessionStorage.setItem("username", "Jaya");

console.log(sessionStorage.getItem("username"));

//Async/Await
async function loadData() {
    const users = await getStudents();

    console.log(users);
}

loadData();

//Destructuring
const student = {
    name: "Jaya",
    age: 22,
    city: "Hyderabad"
};

const { name, age } = student;

console.log(name);
console.log(age);


// Iterator
const students = ["Ram", "Ravi", "Kiran"];

const iterator = students[Symbol.iterator]();

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

// Generator
function* idGenerator() {

    let id = 1;

    while (true) {
        yield id++;
    }

}

const gen = idGenerator();

console.log(gen.next().value);

console.log(gen.next().value);

console.log(gen.next().value);

// Error Handling
try {

    let age = -5;

    if (age < 0) {
        throw new Error("Invalid Age");
    }

}
catch(error) {

    console.log(error.message);

}
finally {

    console.log("Completed");

}

// Main File (app.js)
import { getStudents } from "./api.js";
import { saveStudents } from "./storage.js";

async function start() {

    const users = await getStudents();

    saveStudents(users);

    console.log(users);

}

start();

// Git Commands
// Initialize Git
// git init

//Add files
// git add .

// Commit
// git commit -m "Initial commit"

//Connect to GitHub
// git remote add origin https://github.com/username/StudentDashboard.git

//Push
// git push -u origin main


// git init
// git add .
// git commit -m "Initial Task Manager Project"
// git branch -M main
// git remote add origin 
// git push -u origin main