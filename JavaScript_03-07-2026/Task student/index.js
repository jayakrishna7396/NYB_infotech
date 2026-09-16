// ======================================================
// 1. VARIABLES AND DATA TYPES
// ======================================================

let appName = "Student Management App";
const maxMarks = 100;

let studentCount = 0;

let isAppRunning = true;

console.log("App Name:", appName);
console.log("Maximum Marks:", maxMarks);
console.log("App Running:", isAppRunning);


// ======================================================
// 2. ARRAY
// ======================================================

let students = JSON.parse(localStorage.getItem("students")) || [];

console.log("Students:", students);


// ======================================================
// 3. OBJECT
// ======================================================

const studentExample = {
    name: "Krishna",
    marks: 85,
    course: "JavaScript"
};

console.log("Student Object:", studentExample);


// ======================================================
// 4. CONDITIONAL STATEMENTS
// ======================================================

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "Fail";
    }
}


// ======================================================
// 5. FUNCTION
// ======================================================

function createStudent(name, marks) {

    return {
        id: Date.now(),
        name: name,
        marks: marks,
        grade: getGrade(marks)
    };
}


// ======================================================
// 6. ARRAY METHODS
// ======================================================

// map()
// Creates a new array
function showStudentNames() {

    const names = students.map(student => student.name);

    console.log("Student Names:", names);
}


// filter()
// Finds students based on condition
function showPassedStudents() {

    const passedStudents = students.filter(
        student => student.marks >= 50
    );

    console.log("Passed Students:", passedStudents);
}


// find()
// Finds one student
function findStudent() {

    const student = students.find(
        student => student.marks >= 90
    );

    console.log("Student with 90+ marks:", student);
}


// reduce()
// Calculates total marks
function calculateTotalMarks() {

    const total = students.reduce(
        (sum, student) => sum + student.marks,
        0
    );

    console.log("Total Marks:", total);
}


// ======================================================
// 7. DOM MANIPULATION
// ======================================================

const studentForm = document.getElementById("studentForm");
const studentName = document.getElementById("studentName");
const studentMarks = document.getElementById("studentMarks");

const studentList = document.getElementById("studentList");

const clearBtn = document.getElementById("clearBtn");

const apiBtn = document.getElementById("apiBtn");
const apiList = document.getElementById("apiList");

const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");


// ======================================================
// 8. DISPLAY STUDENTS
// ======================================================

function displayStudents() {

    studentList.innerHTML = "";

    // LOOP
    for (let i = 0; i < students.length; i++) {

        const student = students[i];

        const li = document.createElement("li");

        li.textContent =
            `${student.name} - Marks: ${student.marks} - Grade: ${student.grade}`;

        studentList.appendChild(li);
    }

    studentCount = students.length;

    console.log("Student Count:", studentCount);
}


// ======================================================
// 9. EVENT HANDLING
// ======================================================

studentForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    const name = studentName.value.trim();

    const marks = Number(studentMarks.value);


    // ==================================================
    // ERROR HANDLING - VALIDATION
    // ==================================================

    try {

        if (name === "") {
            throw new Error("Student name is required");
        }

        if (marks < 0 || marks > 100) {
            throw new Error("Marks must be between 0 and 100");
        }


        // Create student
        const student = createStudent(name, marks);


        // Add to array
        students.push(student);


        // Save to Local Storage
        localStorage.setItem(
            "students",
            JSON.stringify(students)
        );


        // Display students
        displayStudents();


        // Clear form
        studentForm.reset();


        console.log("Student Added:", student);

    }
    catch (error) {

        console.error(
            "Error:",
            error.message
        );
    }

});


// ======================================================
// 10. LOCAL STORAGE
// ======================================================

clearBtn.addEventListener("click", function () {

    localStorage.removeItem("students");

    students = [];

    displayStudents();

    console.log("Local Storage Cleared");

});


// ======================================================
// 11. MODERN JAVASCRIPT FEATURES
// ======================================================

// Template literals
const message = `Welcome to ${appName}`;

console.log(message);


// Destructuring
const { name, marks, course } = studentExample;

console.log("Destructuring:");
console.log(name);
console.log(marks);
console.log(course);


// Spread operator
const moreStudents = [
    ...students
];

console.log("Spread Operator:", moreStudents);


// Arrow function
const doubleMarks = marks => marks * 2;

console.log(
    "Arrow Function:",
    doubleMarks(40)
);


// Optional chaining
console.log(
    "Optional Chaining:",
    studentExample.address?.city
);


// Nullish coalescing
const studentCity =
    studentExample.city ?? "Unknown City";

console.log(
    "Nullish Coalescing:",
    studentCity
);


// ======================================================
// 12. LOOPS
// ======================================================

// For loop
for (let i = 1; i <= 3; i++) {

    console.log("For Loop:", i);
}


// For of loop
for (const student of students) {

    console.log(
        "For Of:",
        student.name
    );
}


// ======================================================
// 13. ASYNCHRONOUS JAVASCRIPT
// ======================================================

console.log("Start");

setTimeout(function () {

    console.log("This runs after 2 seconds");

}, 2000);

console.log("End");


// ======================================================
// 14. API CALL
// ======================================================

apiBtn.addEventListener("click", async function () {

    apiList.innerHTML = "";
    errorMessage.textContent = "";

    loading.textContent = "Loading...";


    try {

        // Fetch API data
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );


        // Check response
        if (!response.ok) {

            throw new Error(
                "Failed to fetch API data"
            );
        }


        // Convert response to JSON
        const users = await response.json();


        // Display only first 5 users
        users.slice(0, 5).forEach(user => {

            const li = document.createElement("li");

            li.textContent =
                `${user.name} - ${user.email}`;

            apiList.appendChild(li);

        });


        console.log(
            "API Data:",
            users
        );

    }
    catch (error) {

        errorMessage.textContent =
            `Error: ${error.message}`;

        console.error(
            "API Error:",
            error
        );

    }
    finally {

        loading.textContent = "";

        console.log(
            "API Request Completed"
        );
    }

});


// ======================================================
// 15. INITIAL DISPLAY
// ======================================================

displayStudents();

showStudentNames();
showPassedStudents();
findStudent();
calculateTotalMarks();


// ======================================================
// END
// ======================================================

console.log("==============================");
console.log("Student App Started");
console.log("==============================");