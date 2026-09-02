class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }
}

const student1 = new Student("Jayakrish");

student1.greet();
student1.study();