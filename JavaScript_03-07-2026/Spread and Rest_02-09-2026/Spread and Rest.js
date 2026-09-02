// Array Example
const numbers1 = [10, 20, 30];

const numbers2 = [...numbers1, 40, 50];

console.log(numbers2);


// Object Example
const student = {
    name: "Jayakrish",
    age: 25
};

const studentDetails = {
    ...student,
    course: "JavaScript"
};

console.log(studentDetails);




// 2. Rest Operator
// Rest is used to collect multiple values into an array.
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40);


// Rest with Calculation
function add(...numbers) {
    let total = 0;

    numbers.forEach(function (number) {
        total += number;
    });

    console.log(total);
}

add(10, 20, 30);