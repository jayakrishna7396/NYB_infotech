// Constructor
// Definition:
// A constructor is a special method inside a class.
// It runs automatically when a new object is created.
// It is used to initialize object properties.

class Student {

    // constructor()
    // name and age are received as values

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// Creating objects using new

const student1 = new Student("Krishna", 25);
const student2 = new Student("Rahul", 24);

// Constructor runs automatically
// when these objects are created.

student1.display();
student2.display();

console.log("Student 1 Name:", student1.name);
console.log("Student 2 Name:", student2.name);