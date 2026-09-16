
// 1. ARRAY
const students = [
    { id: 1, name: "John", marks: 80, city: "Hyderabad" },
    { id: 2, name: "Ravi", marks: 90, city: "Chennai" },
    { id: 3, name: "Priya", marks: 70, city: "Bangalore" },
    { id: 4, name: "Anu", marks: 85, city: "Mumbai" }
]
console.log("Students:", students);



// 2. map() - Create new array
const studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);



// 3. filter() - Get students with marks >= 80
const passedStudents = students.filter(student => student.marks >= 80);
console.log("Students with 80+ marks:", passedStudents);


// 4. reduce() - Calculate total marks
const totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);
console.log("Total Marks:", totalMarks);



// 5. find() - Find one student
const student = students.find(student => student.name === "Ravi");
console.log("Found Student:", student);


// 6. Object Destructuring
const { name, marks, city } = student;
console.log("Name:", name);
console.log("Marks:", marks);
console.log("City:", city);



// 7. Array Destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);


// 8. Spread Operator

// Copy an array
const newNumbers = [...numbers, 40, 50];

console.log("New Numbers:", newNumbers);


// Copy an object and update property
const updatedStudent = {
    ...student,
    marks: 95
};

console.log("Updated Student:", updatedStudent);


// 9. Rest Operator
function calculateTotal(...marks) {
    return marks.reduce((total, mark) => total + mark, 0);
}

console.log("Total:", calculateTotal(80, 90, 70));

// 10. Object Manipulation

const employee = {
    name: "Arun",
    age: 25,
    role: "Developer"
};

// Access property
console.log("Employee Name:", employee.name);

// Add property
employee.salary = 30000;

// Update property
employee.age = 26;

// Delete property
delete employee.role;

console.log("Updated Employee:", employee);



// 11. Object.keys()
console.log("Keys:", Object.keys(employee));


// 12. Object.values()

console.log("Values:", Object.values(employee));


// 13. Object.entries()
console.log("Entries:", Object.entries(employee));


// 14. Optional Chaining


console.log("Employee City:", employee.address?.city);



// 15. Template Literal
console.log(
    `Student ${name} scored ${marks} marks and lives in ${city}.`
);