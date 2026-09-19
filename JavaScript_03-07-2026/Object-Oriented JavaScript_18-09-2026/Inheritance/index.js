// Inheritance
// Definition:
// Inheritance allows one class to use the
// properties and methods of another class.

// Parent Class
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, my name is " + this.name);
    }
}


// Child Class
class Student extends Person {

    study() {
        console.log(this.name + " is studying");
    }
}


// Create object
const student1 = new Student("Krishna");


// Parent class method
student1.greet();

// Child class method
student1.study();