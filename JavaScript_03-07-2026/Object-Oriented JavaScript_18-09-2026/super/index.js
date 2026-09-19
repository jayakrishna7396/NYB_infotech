// super
// Definition:
// super is used in a child class to access
// the parent class constructor and methods.

// Parent Class
class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}


// Child Class
class Student extends Person {

    constructor(name, course) {

        // Call parent constructor
        super(name);

        this.course = course;
    }

    showDetails() {

        // Call parent method
        super.greet();

        console.log("Course: " + this.course);
    }
}


// Create object
const student1 = new Student("Krishna", "JavaScript");

// Call child method
student1.showDetails();