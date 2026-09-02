class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    display() {
        super.greet();
        console.log("Course: " + this.course);
    }
}

const student1 = new Student("Jayakrish", "JavaScript");

student1.display();