// var → Used to declare a variable. It is function-scoped and can be redeclared and reassigned.
// let → Used to declare a variable. It is block-scoped and can be reassigned but cannot be redeclared in the same scope.
// const → Used to declare a variable that cannot be reassigned. It is also block-scoped.



// var, let, and const

// 1. var

var name = "Krishna";

console.log("var:", name);

// Reassign
name = "Rahul";

console.log("var after reassignment:", name);


// 2. let

let age = 22;

console.log("let:", age);

// Reassign
age = 23;

console.log("let after reassignment:", age);


// 3. const

const city = "Rajahmundry";

console.log("const:", city);

// Cannot reassign
// city = "Hyderabad"; // Error