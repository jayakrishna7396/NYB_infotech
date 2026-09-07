// =====================================
// JavaScript Fundamentals Practice
// =====================================

// Variables
let studentName = "Jay";
let age = 25;
let course = "JavaScript";
let isStudent = true;

// Different Data Types
let marks = 85;                 // Number
let name = "Jay";               // String
let passed = true;              // Boolean
let result = null;              // Null
let grade;                      // Undefined

// Arithmetic Operators
let subject1 = 80;
let subject2 = 90;
let subject3 = 85;

let total = subject1 + subject2 + subject3;
let average = total / 3;

// Comparison Operator
let hasPassed = average >= 40;

// Logical Operator
let eligible = age >= 18 && isStudent === true;

// Assignment Operator
let bonus = 5;
bonus += 10;

// typeof Operator
console.log("Name Type:", typeof name);
console.log("Marks Type:", typeof marks);
console.log("Passed Type:", typeof passed);

// Display Information using Template Literals
let message = `
=================================
       STUDENT DETAILS
=================================

Name       : ${studentName}
Age        : ${age}
Course     : ${course}
Student    : ${isStudent}

Subject 1  : ${subject1}
Subject 2  : ${subject2}
Subject 3  : ${subject3}

Total Marks: ${total}
Average    : ${average}
Passed     : ${hasPassed}
Eligible   : ${eligible}
Bonus      : ${bonus}
`;

console.log(message);