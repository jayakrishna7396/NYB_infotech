
// DESTRUCTURING, SPREAD, REST,
// OPTIONAL CHAINING, NULLISH COALESCING
// ========================================
// 1. DESTRUCTURING
// ========================================
// Definition:
// Destructuring means taking values from an
// array or object and storing them in variables.
//
// Syntax:
// let [a, b] = array;
// let { name, age } = object;


// Array Destructuring

let marks = [80, 90, 70];

let [maths, science, english] = marks;

console.log("Maths:", maths);
console.log("Science:", science);
console.log("English:", english);


// Object Destructuring

let student = {
    name: "Krishna",
    age: 21
};

let { name, age } = student;

console.log("Name:", name);
console.log("Age:", age);


// 2. SPREAD OPERATOR
// Definition:
// Spread (...) opens or expands an array/object.
//
// Syntax:
// [...array]
// {...object}


// Copy Array

let newMarks = [...marks];

console.log("Copied Marks:", newMarks);


// Combine Arrays

let extraMarks = [60, 50];

let allMarks = [...marks, ...extraMarks];

console.log("All Marks:", allMarks);


// Copy Object

let studentCopy = {
    ...student
};

console.log("Student Copy:", studentCopy);


// 3. REST OPERATOR
// Definition:
// Rest (...) collects multiple values into
// one array.
//
// Syntax:
// function example(...values) {
// }


// Rest Example

function addMarks(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(
    "Total:",
    addMarks(80, 90, 70)
);


// 4. OPTIONAL CHAINING
// Definition:
// Optional chaining (?.) safely accesses
// a property that may not exist.
//
// Syntax:
// object?.property
// object?.property?.property


let studentDetails = {

    name: "Krishna",

    address: {
        city: "Rajahmundry"
    }

};

console.log(
    "City:",
    studentDetails?.address?.city
);


// Property does not exist

console.log(
    "Phone:",
    studentDetails?.phone?.number
);

// Result: undefined
// No error



// 5. NULLISH COALESCING
// Definition:
// ?? gives a default value when the value
// is null or undefined.
//
// Syntax:
// value ?? defaultValue


let phone = null;

let phoneNumber = phone ?? "No phone number";

console.log("Phone:", phoneNumber);


// Another example

let email;

let userEmail = email ?? "No email available";

console.log("Email:", userEmail);



// FINAL OUTPUt
console.log("-------------------------");
console.log("FINAL RESULT");
console.log("-------------------------");

console.log("Marks:", marks);

console.log("All Marks:", allMarks);

console.log("Student:", student);

console.log("Total:", addMarks(...marks));

console.log(
    "City:",
    studentDetails?.address?.city
);

console.log(
    "Phone:",
    phone ?? "No phone"
);