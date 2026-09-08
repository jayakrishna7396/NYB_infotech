// ========================================
// STUDENT GRADE CALCULATOR
// ========================================

// Student details
let studentName = "krishna";
let marks = [85, 72, 90, 65, 78];


// ========================================
// 1. Truthy / Falsy
// ========================================

if (studentName) {
    console.log("Student name is available");
} else {
    console.log("Student name is not available");
}


// ========================================
// 2. Function Declaration
// ========================================

function calculateTotal(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}


// ========================================
// 3. Function Expression
// ========================================

const calculateAverage = function(total, count) {
    return total / count;
};


// ========================================
// 4. Arrow Function
// ========================================

const getGrade = (average) => {

    if (average >= 90) {
        return "A";
    } else if (average >= 75) {
        return "B";
    } else if (average >= 50) {
        return "C";
    } else {
        return "Fail";
    }

};


// ========================================
// 5. Default Parameter
// ========================================

function studentMessage(name = "Guest") {
    return `Welcome ${name}`;
}


// ========================================
// 6. Rest Parameter
// ========================================

function findHighest(...numbers) {
    return Math.max(...numbers);
}


// ========================================
// 7. Callback Function
// ========================================

function displayResult(callback) {

    let total = calculateTotal(marks);
    let average = calculateAverage(total, marks.length);
    let grade = getGrade(average);

    callback(total, average, grade);
}


// Callback function
displayResult(function(total, average, grade) {

    console.log("Total:", total);
    console.log("Average:", average);
    console.log("Grade:", grade);

});


// ========================================
// 8. Nested Condition
// ========================================

let attendance = 85;

if (marks.length > 0) {

    if (attendance >= 75) {
        console.log("Student is eligible");
    } else {
        console.log("Attendance is low");
    }

}


// ========================================
// 9. Ternary Operator
// ========================================

let result = marks.length > 0
    ? "Marks are available"
    : "No marks available";

console.log(result);


// ========================================
// 10. Switch Statement
// ========================================

let grade = getGrade(
    calculateAverage(
        calculateTotal(marks),
        marks.length
    )
);

switch (grade) {

    case "A":
        console.log("Excellent");
        break;

    case "B":
        console.log("Very Good");
        break;

    case "C":
        console.log("Good");
        break;

    case "Fail":
        console.log("Need Improvement");
        break;

    default:
        console.log("Invalid Grade");
}


// ========================================
// 11. for Loop
// ========================================

console.log("Student Marks:");

for (let i = 0; i < marks.length; i++) {
    console.log(`Subject ${i + 1}: ${marks[i]}`);
}


// ========================================
// 12. for...of Loop
// ========================================

console.log("Marks using for...of:");

for (let mark of marks) {
    console.log(mark);
}


// ========================================
// 13. Recursive Function
// ========================================

function countdown(number) {

    if (number === 0) {
        return;
    }

    console.log(number);

    countdown(number - 1);
}

console.log("Countdown:");

countdown(5);


// ========================================
// 14. Highest Mark using Rest Parameter
// ========================================

let highest = findHighest(...marks);

console.log("Highest Mark:", highest);


// ========================================
// 15. Display on Web Page
// ========================================

let total = calculateTotal(marks);
let average = calculateAverage(total, marks.length);
let finalGrade = getGrade(average);

document.getElementById("result").innerHTML = `
    <h2>${studentMessage(studentName)}</h2>

    <p><strong>Student:</strong> ${studentName}</p>

    <p><strong>Marks:</strong> ${marks.join(", ")}</p>

    <p><strong>Total:</strong> ${total}</p>

    <p><strong>Average:</strong> ${average.toFixed(2)}</p>

    <p><strong>Grade:</strong> ${finalGrade}</p>

    <p><strong>Highest Mark:</strong> ${highest}</p>

    <p><strong>Attendance:</strong> ${attendance}%</p>

    <p>
        <strong>Status:</strong>
        ${
            attendance >= 75 && average >= 40
                ? "Pass"
                : "Fail"
        }
    </p>
`;