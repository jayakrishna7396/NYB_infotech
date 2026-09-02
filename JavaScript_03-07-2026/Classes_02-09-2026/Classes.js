class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

const student1 = new Student("Jayakrish", 25, "JavaScript");
const student2 = new Student("Rahul", 22, "React");

console.log(student1);
console.log(student2);

student1.greet();
student2.greet();



// Output
// {
//     name: "Jayakrish",
//     age: 25,
//     course: "JavaScript"
// }

// {
//     name: "Rahul",
//     age: 22,
//     course: "React"
// }

// Hello Jayakrish
// Hello Rahul