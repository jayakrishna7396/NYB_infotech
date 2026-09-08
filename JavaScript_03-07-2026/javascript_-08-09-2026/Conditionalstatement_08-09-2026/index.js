// Conditional Statements
// Definition:
// Conditional statements are used to execute different
// blocks of code based on conditions.

// 1. if
let age = 20;

if (age >= 18) {
    console.log("1. You are an Adult");
}


// 2. if...else
let number = 10;

if (number > 0) {
    console.log("2. Number is Positive");
} else {
    console.log("2. Number is Negative");
}


// 3. else if
let marks = 75;

if (marks >= 90) {
    console.log("3. Grade A");
} else if (marks >= 60) {
    console.log("3. Grade B");
} else {
    console.log("3. Grade C");
}


// 4. Nested Conditions
let studentAge = 20;
let hasID = true;

if (studentAge >= 18) {
    if (hasID) {
        console.log("4. Entry Allowed");
    }
}


// 5. switch
let day = 2;

switch (day) {
    case 1:
        console.log("5. Monday");
        break;

    case 2:
        console.log("5. Tuesday");
        break;

    case 3:
        console.log("5. Wednesday");
        break;

    default:
        console.log("5. Invalid Day");
}