// Spread and Rest
// Definition:
// Spread expands values.
// Rest collects values.

// Spread Operator

const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log("Spread:", newNumbers);


// Spread with Objects

const student = {
    name: "Krishna",
    age: 25
};

const newStudent = {
    ...student,
    city: "Hyderabad"
};

console.log("Spread Object:", newStudent);


// Rest Operator

function addNumbers(...numbers) {

    console.log("Rest:", numbers);

}

addNumbers(10, 20, 30, 40);