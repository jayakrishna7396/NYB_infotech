// Create and Use JavaScript Modules
// A JavaScript module allows you to split your code into multiple files, making it easier to organize and reuse.

//utils.js
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// app.js
import { add, sub } from "./utils.js";

console.log(add(10, 5));
console.log(sub(10, 5));


// Export Variables
// config.js
export const company = "OpenAI";
export const version = "1.0";

//app.js
import { company, version } from "./config.js";

console.log(company);
console.log(version);


// Default Export
// math.js
export default function multiply(a, b) {
    return a * b;
}


//app.js
import multiply from "./math.js";

console.log(multiply(4, 5));


// Import Everything
// utils.js
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export const pi = 3.14;

// app.js
import * as calc from "./utils.js";

console.log(calc.add(5, 3));
console.log(calc.sub(10, 4));
console.log(calc.pi);

//local storage
// Local Storage
// Local Storage stores data permanently until it is removed manually.
// Store Data
localStorage.setItem("username", "Krishna");


//retrieve data
const user = localStorage.getItem("username");

console.log(user);

//remove data
localStorage.removeItem("username");

//clear all data
localStorage.clear();

// Store Objects in Local Storage
const student = {
    id: 101,
    name: "Krishna",
    course: "JavaScript"
};

localStorage.setItem("student", JSON.stringify(student));

//retrieve
const data = JSON.parse(localStorage.getItem("student"));

console.log(data);
console.log(data.name);

// Session Storage
// Session Storage stores data only while the browser tab is open.
// Store
sessionStorage.setItem("city", "Hyderabad");

//retrieve
console.log(sessionStorage.getItem("city"));

//remove
sessionStorage.removeItem("city");

//clear
sessionStorage.clear();

// Store Object in Session Storage
const employee = {
    id: 1,
    name: "Rahul"
};

sessionStorage.setItem("employee", JSON.stringify(employee));
//retrieve
const emp = JSON.parse(sessionStorage.getItem("employee"));

console.log(emp);


// try...catch Example
try {

    console.log(a);

}

catch(error) {

    console.log(error.message);

}


//try...catch...finally
try {

    console.log("Program Started");

    let x = 10;

    console.log(x);

}

catch(error) {

    console.log(error.message);

}

finally {

    console.log("Program Finished");

}

//throw statment
let age = 15;

try {

    if(age < 18) {

        throw "You are not eligible.";

    }

    console.log("Welcome");

}

catch(error) {

    console.log(error);

}

//Throw Using Error Object
let marks = 30;

try {

    if(marks < 35) {

        throw new Error("You have failed.");

    }

    console.log("Passed");

}

catch(error) {

    console.log(error.message);

}


//Custom Error Handling
function withdraw(balance, amount) {

    try {

        if(amount > balance) {

            throw new Error("Insufficient Balance");

        }

        console.log("Withdrawal Successful");

    }

    catch(error) {

        console.log(error.message);

    }

}

withdraw(1000, 1500);