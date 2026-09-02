// Prototype

function Student(name, age) {
    this.name = name;
    this.age = age;
}

Student.prototype.greet = function () {
    console.log("Hello " + this.name);
};

const student1 = new Student("Jayakrish", 25);
const student2 = new Student("Rahul", 22);

student1.greet();
student2.greet();




// How it works
// We create a constructor function:
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Then we add a method to its prototype:
Student.prototype.greet = function () {
    console.log("Hello " + this.name);
};

// Now all Student objects can use greet():
student1.greet();
student2.greet();