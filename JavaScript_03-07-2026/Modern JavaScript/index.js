// =====================================================
// ES6+ FEATURES - SINGLE PROGRAM
// =====================================================


// 1. ES6+ FEATURES - REVISION
// ES6+ = modern JavaScript features that make code
// shorter, cleaner, and easier to write.


// let and const

let age = 25;
const name = "Jay";

console.log("let:", age);
console.log("const:", name);


// Arrow Function

const add = (a, b) => a + b;

console.log("Arrow Function:", add(10, 20));


// Default Parameter

function greet(user = "Guest") {
  return `Hello ${user}`;
}

console.log("Default Parameter:", greet());


// =====================================================
// 2. JAVASCRIPT MODULES
// =====================================================

// Modules allow JavaScript code to be divided into
// separate files using export and import.
//
// Export:
// export const name = "Jay";
//
// Import:
// import { name } from "./user.js";
//
// Example:
//
// user.js
// export const username = "Jay";
//
// app.js
// import { username } from "./user.js";


// =====================================================
// 3. OPTIONAL CHAINING (?.)
// =====================================================

// Optional Chaining safely accesses properties
// when a value may be null or undefined.

const student = {
  name: "Jay",
  address: {
    city: "Rajahmundry"
  }
};

console.log("Optional Chaining:", student?.name);

console.log(
  "Optional Nested Property:",
  student?.address?.city
);

console.log(
  "Missing Property:",
  student?.phone?.number
);


// =====================================================
// 4. NULLISH COALESCING (??)
// =====================================================

// ?? provides a default value only when the
// left side is null or undefined.

const phone = null;

const phoneNumber = phone ?? "Not Available";

console.log("Nullish Coalescing:", phoneNumber);


// 0, false and "" are NOT replaced by ??

const marks = 0;

console.log("Zero Value:", marks ?? 100);


// =====================================================
// 5. SPREAD AND REST
// =====================================================


// SPREAD
// Spread (...) expands/copies values.

const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log("Spread:", newNumbers);


// REST
// Rest (...) collects remaining values.

const [first, ...remaining] = newNumbers;

console.log("First:", first);
console.log("Rest:", remaining);


// Rest in function

function calculateTotal(...values) {
  return values.reduce((total, value) => total + value, 0);
}

console.log(
  "Rest Function:",
  calculateTotal(10, 20, 30)
);


// =====================================================
// 6. DESTRUCTURING
// =====================================================


// Object Destructuring

const employee = {
  employeeName: "Rahul",
  salary: 30000,
  department: "IT"
};

const {
  employeeName,
  salary,
  department
} = employee;

console.log(
  "Object Destructuring:",
  employeeName,
  salary,
  department
);


// Array Destructuring

const colors = ["Red", "Green", "Blue"];

const [color1, color2, color3] = colors;

console.log(
  "Array Destructuring:",
  color1,
  color2,
  color3
);


// =====================================================
// 7. TEMPLATE LITERALS
// =====================================================

// Template literals use backticks (` `).
// ${} is used to insert variables.

const userName = "Jay";
const course = "React";

const message = `Hello ${userName}, you are learning ${course}.`;

console.log("Template Literal:", message);


// =====================================================
// 8. MAP
// =====================================================

// Map stores key-value pairs.
// Keys can be any type.

const userMap = new Map();

userMap.set("name", "Jay");
userMap.set("age", 25);

console.log("Map:", userMap);

console.log("Map Name:", userMap.get("name"));

console.log("Map Has Age:", userMap.has("age"));


// =====================================================
// 9. SET
// =====================================================

// Set stores unique values.
// Duplicate values are automatically removed.

const uniqueNumbers = new Set([
  10,
  20,
  20,
  30,
  30
]);

console.log("Set:", uniqueNumbers);


// =====================================================
// 10. WEAKMAP - INTRODUCTION
// =====================================================

// WeakMap stores key-value pairs.
// Keys must be objects.
// It does not prevent unused object keys
// from being garbage collected.

const weakMap = new WeakMap();

const user = {
  name: "Jay"
};

weakMap.set(user, "User Data");

console.log("WeakMap:", weakMap.get(user));


// =====================================================
// 11. WEAKSET - INTRODUCTION
// =====================================================

// WeakSet stores objects only.
// Objects are stored weakly.

const weakSet = new WeakSet();

const studentObject = {
  name: "Rahul"
};

weakSet.add(studentObject);

console.log(
  "WeakSet:",
  weakSet.has(studentObject)
);