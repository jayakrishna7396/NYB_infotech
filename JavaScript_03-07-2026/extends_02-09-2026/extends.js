class Person {
    greet() {
        console.log("Hello");
    }
}

class Student extends Person {
    study() {
        console.log("Student is studying");
    }
}

const student1 = new Student();

student1.greet();
student1.study();