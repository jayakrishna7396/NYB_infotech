class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }

    displayAge() {
        console.log("My age is " + this.age);
    }
}

const student1 = new Student("Jayakrish", 25);

student1.greet();
student1.displayAge();

// Output
// Hello Jayakrish
// My age is 25


// How it works

// This is a method:

// greet() {
//     console.log("Hello " + this.name);
// }

// This is another method:

// displayAge() {
//     console.log("My age is " + this.age);
// }

// We call the methods using the object:

// student1.greet();
// student1.displayAge();
// Method vs Function

// Function:

// function greet() {
//     console.log("Hello");
// }

// Method:

// const student = {
//     greet() {
//         console.log("Hello");
//     }
// };

// student.greet();

// In one line:

// Method = A function that belongs to an object or class and performs an action.