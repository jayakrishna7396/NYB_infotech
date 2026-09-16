const output = document.getElementById("output");

function print(message) {
    output.innerHTML += `<p>${message}</p>`;
}


// ==========================================
// 1. JAVASCRIPT MODULES
// ==========================================

// A module is used to organize and reuse code.
// In a real project, we use export and import.

// Module-like function
function add(a, b) {
    return a + b;
}

print("1. JavaScript Module:");
print("10 + 20 = " + add(10, 20));


// ==========================================
// 2. ITERATORS
// ==========================================

const numbers = [10, 20, 30];

const iterator = numbers[Symbol.iterator]();

print("2. Iterator:");

print(iterator.next().value);
print(iterator.next().value);
print(iterator.next().value);


// ==========================================
// 3. GENERATORS
// ==========================================

function* generateNumbers() {

    yield 100;
    yield 200;
    yield 300;

}

const generator = generateNumbers();

print("3. Generator:");

print(generator.next().value);
print(generator.next().value);
print(generator.next().value);


// ==========================================
// 4. CLASSES AND OBJECTS
// ==========================================

class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    display() {

        return `Name: ${this.name}, Age: ${this.age}`;

    }

}


// Create object
const student = new Student("Krishna", 25);

print("4. Class and Object:");

print(student.display());


// ==========================================
// 5. PROTOTYPE
// ==========================================

// Add a method to Student prototype

Student.prototype.greet = function () {

    return "Hello " + this.name;

};

print("5. Prototype:");

print(student.greet());


// ==========================================
// BUTTON
// ==========================================

document.getElementById("startBtn").addEventListener("click", function () {

    alert("All JavaScript concepts are completed!");

});