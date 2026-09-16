
// 1. Array Manipulation
let numbers = [10, 5, 20, 5, 30, 10, 40];

console.log("Original Array:", numbers);

// map()
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter()
let greaterThan10 = numbers.filter(num => num > 10);
console.log("Greater than 10:", greaterThan10);

// reduce()
let total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total:", total);

// find()
let found = numbers.find(num => num > 25);
console.log("First number greater than 25:", found);


// 2. Sorting With Built-in Method
let builtInSort = [...numbers];

builtInSort.sort((a, b) => a - b);

console.log("Sorted using sort():", builtInSort);


// 3. Sorting Without Built-in Method
let manualSort = [...numbers];

for (let i = 0; i < manualSort.length; i++) {

    for (let j = 0; j < manualSort.length - 1; j++) {

        if (manualSort[j] > manualSort[j + 1]) {

            let temp = manualSort[j];

            manualSort[j] = manualSort[j + 1];

            manualSort[j + 1] = temp;
        }
    }
}

console.log("Sorted without sort():", manualSort);


// 4. Remove Duplicate Values
let uniqueNumbers = [...new Set(numbers)];

console.log("Without Duplicates:", uniqueNumbers);

// 5. Find Highest and Lowest Values
let highest = Math.max(...numbers);
let lowest = Math.min(...numbers);

console.log("Highest:", highest);
console.log("Lowest:", lowest);


// 6. Objects
let students = [
    {
        name: "Krishna",
        age: 22,
        marks: 85,
        department: "IT",
        address: {
            city: "Rajahmundry",
            state: "Andhra Pradesh"
        }
    },

    {
        name: "Rahul",
        age: 21,
        marks: 65,
        department: "CSE",
        address: {
            city: "Hyderabad",
            state: "Telangana"
        }
    },

    {
        name: "Anil",
        age: 23,
        marks: 90,
        department: "IT",
        address: {
            city: "Vijayawada",
            state: "Andhra Pradesh"
        }
    }
];

console.log("Students:", students);


// 7. Filter Objects Based on Condition
let passedStudents = students.filter(student => student.marks >= 70);

console.log("Students with marks >= 70:", passedStudents);

// 8. Group Objects Based on Condition
let itStudents = students.filter(
    student => student.department === "IT"
);

console.log("IT Students:", itStudents);


// 9. Manipulate Nested Objects
console.log("Before City Change:", students[0].address.city);

students[0].address.city = "Kakinada";

console.log("After City Change:", students[0].address.city);


// 10. Object Destructuring
let student = students[0];

let {
    name,
    age,
    marks,
    address
} = student;

console.log("Name:", name);
console.log("Age:", age);
console.log("Marks:", marks);
console.log("City:", address.city);



// 11. Shallow Copy
let shallowCopy = { ...student };

shallowCopy.name = "Krishna Updated";

console.log("Original Student:", student);
console.log("Shallow Copy:", shallowCopy);



// 12. Deep Copy
let deepCopy = JSON.parse(JSON.stringify(student));

deepCopy.address.city = "Visakhapatnam";

console.log("Original City:", student.address.city);
console.log("Deep Copy City:", deepCopy.address.city);



// 13. Object to Array
let studentObject = {
    name: "Krishna",
    age: 22,
    marks: 85
};

let objectArray = Object.entries(studentObject);

console.log("Object to Array:", objectArray);


// 14. Array to Object
let studentArray = [
    ["name", "Krishna"],
    ["age", 22],
    ["marks", 85]
];

let arrayObject = Object.fromEntries(studentArray);

console.log("Array to Object:", arrayObject);



// 15. Combine Multiple Methods
// Find students who scored >= 70
// Get their names
// Convert names to uppercase

let result = students
    .filter(student => student.marks >= 70)
    .map(student => student.name.toUpperCase());

console.log("Passed Student Names:", result);


// 16. Real-World Example
// Calculate Total and Average Marks
let marksArray = students.map(student => student.marks);

let totalMarks = marksArray.reduce(
    (sum, mark) => sum + mark,
    0
);

let averageMarks = totalMarks / marksArray.length;

console.log("Marks:", marksArray);
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);



// Final Result
console.log("----- FINAL RESULT -----");

console.log("Unique Numbers:", uniqueNumbers);
console.log("Highest Number:", highest);
console.log("Lowest Number:", lowest);
console.log("Passed Students:", passedStudents);
console.log("IT Students:", itStudents);
console.log("Average Marks:", averageMarks);