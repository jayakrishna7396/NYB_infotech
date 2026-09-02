// ==========================================
// 1. Callback Function
// ==========================================

// Definition:
// A callback function is a function passed to another
// function and executed later.

// Syntax:
// function mainFunction(callback) {
//   callback();
// }

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Jay");
}

processUser(greet);


// ==========================================
// 2. Higher Order Function
// ==========================================

// Definition:
// A Higher Order Function is a function that takes
// another function as an argument OR returns a function.

// Syntax:
// function higherOrderFunction(callback) {
//   callback();
// }

function calculate(number, operation) {
  return operation(number);
}

const double = (number) => number * 2;

console.log("Higher Order Function:", calculate(10, double));


// ==========================================
// 3. First-Class Functions
// ==========================================

// Definition:
// JavaScript treats functions like normal values.
// A function can be stored, passed, or returned.

// Syntax:
// const variable = function() {};

const sayHello = () => {
  return "Hello JavaScript";
};

const myFunction = sayHello;

console.log("First-Class Function:", myFunction());


// ==========================================
// 4. Closures
// ==========================================

// Definition:
// A closure allows an inner function to remember
// variables from its outer function.

// Syntax:
// function outer() {
//   let value = ...;
//
//   function inner() {
//     // uses value
//   }
//
//   return inner;
// }

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const count = counter();

console.log("Closure:", count());
console.log("Closure:", count());
console.log("Closure:", count());


// ==========================================
// 5. IIFE
// ==========================================

// Definition:
// IIFE means Immediately Invoked Function Expression.
// It executes immediately after it is created.

// Syntax:
// (function() {
//   // code
// })();

(function () {
  console.log("IIFE: Function executed immediately");
})();


// ==========================================
// 6. Pure and Impure Functions
// ==========================================

// Pure Function Definition:
// A pure function gives the same output for the same input
// and does not change outside data.

// Syntax:
// function add(a, b) {
//   return a + b;
// }

function add(a, b) {
  return a + b;
}

console.log("Pure Function:", add(10, 20));


// Impure Function Definition:
// An impure function can change outside data or
// produce different results for the same input.

let total = 0;

function addToTotal(number) {
  total += number;
  return total;
}

console.log("Impure Function:", addToTotal(10));
console.log("Impure Function:", addToTotal(10));


// ==========================================
// 7. Function Composition
// ==========================================

// Definition:
// Function Composition means combining multiple functions
// where the output of one function becomes the input
// of another function.

// Syntax:
// const result = function2(function1(value));

function multiplyByTwo(number) {
  return number * 2;
}

function addFive(number) {
  return number + 5;
}

const result = addFive(multiplyByTwo(10));

console.log("Function Composition:", result);