// Loops in JavaScript
// Definition:
// A loop is used to repeatedly execute a block of code.

// 1. for loop
console.log("1. For Loop");

for (let i = 1; i <= 3; i++) {
    console.log(i);
}


// 2. while loop
console.log("2. While Loop");

let i = 1;

while (i <= 3) {
    console.log(i);
    i++;
}


// 3. do...while loop
console.log("3. Do...While Loop");

let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 3);


// 4. for...in loop
console.log("4. For...In Loop");

let student = {
    name: "Rahul",
    age: 20,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}


// 5. for...of loop
console.log("5. For...Of Loop");

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}