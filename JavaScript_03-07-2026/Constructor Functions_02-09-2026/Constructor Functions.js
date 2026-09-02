function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

const student1 = new Student("Jayakrish", 25, "JavaScript");
const student2 = new Student("Rahul", 22, "React");

console.log(student1);
console.log(student2);


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



// How it works
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}

// Student is the constructor function.
// const student1 = new Student("Jayakrish", 25, "JavaScript")