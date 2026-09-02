// Spread Operator

const numbers1 = [10, 20, 30];

const numbers2 = [...numbers1, 40, 50];

console.log(numbers2);

//example
const student = {
    name: "Jayakrish",
    age: 25
};

const studentDetails = {
    ...student,
    course: "JavaScript"
};

console.log(studentDetails);


// Rest Operator

function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40);


// example
function add(...numbers) {
    let total = 0;

    numbers.forEach(function (number) {
        total += number;
    });

    console.log(total);
}

add(10, 20, 30);