console.log("ARRAY AND OBJECT CODING PROBLEMS");

// 1. Find Sum
let numbers = [10, 20, 30, 40, 50];

let sum = 0;

for (let num of numbers) {
    sum = sum + num;
}

console.log("1. Sum:", sum);


// 2. Find Highest Number
let highest = numbers[0];

for (let num of numbers) {
    if (num > highest) {
        highest = num;
    }
}

console.log("2. Highest:", highest);


// 3. Find Lowest Number
let lowest = numbers[0];

for (let num of numbers) {
    if (num < lowest) {
        lowest = num;
    }
}

console.log("3. Lowest:", lowest);


// 4. Remove Duplicate Values
let values = [10, 20, 10, 30, 20, 40];

let unique = [];

for (let value of values) {
    if (!unique.includes(value)) {
        unique.push(value);
    }
}

console.log("4. Unique Values:", unique);


// 5. Find Even Numbers
let evenNumbers = numbers.filter(function(num) {
    return num % 2 == 0;
});

console.log("5. Even Numbers:", evenNumbers);


// 6. Find Numbers Greater Than 25
let greaterNumbers = numbers.filter(function(num) {
    return num > 25;
});

console.log("6. Greater Than 25:", greaterNumbers);


// 7. Double Every Number
let doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log("7. Doubled Numbers:", doubledNumbers);


// 8. Sort Array
let marks = [80, 45, 90, 60, 75];

marks.sort(function(a, b) {
    return a - b;
});

console.log("8. Sorted Marks:", marks);


// 9. Find Student
let students = [
    {
        name: "Krishna",
        age: 22,
        marks: 85
    },
    {
        name: "Rahul",
        age: 21,
        marks: 65
    },
    {
        name: "Anil",
        age: 23,
        marks: 90
    }
];

let student = students.find(function(student) {
    return student.name == "Krishna";
});

console.log("9. Student:", student);


// 10. Find Passed Students
let passedStudents = students.filter(function(student) {
    return student.marks >= 70;
});

console.log("10. Passed Students:", passedStudents);


// 11. Get Student Names
let studentNames = students.map(function(student) {
    return student.name;
});

console.log("11. Student Names:", studentNames);


// 12. Calculate Average Marks
let totalMarks = 0;

for (let student of students) {
    totalMarks = totalMarks + student.marks;
}

let average = totalMarks / students.length;

console.log("12. Average Marks:", average);


// 13. Student With Highest Marks
let topStudent = students[0];

for (let student of students) {
    if (student.marks > topStudent.marks) {
        topStudent = student;
    }
}

console.log("13. Top Student:", topStudent);


// 14. Object Destructuring
let person = {
    name: "Krishna",
    age: 22,
    role: "Developer"
};

let { name, age, role } = person;

console.log("14. Name:", name);
console.log("14. Age:", age);
console.log("14. Role:", role);


// 15. Object to Array
let employee = {
    name: "Krishna",
    age: 22,
    role: "Developer"
};

let employeeArray = Object.entries(employee);

console.log("15. Object to Array:", employeeArray);