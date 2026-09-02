// Object Methods

const student = {
    name: "Jayakrish",
    age: 25,

    greet: function () {
        console.log("Hello " + this.name);
    },

    displayAge: function () {
        console.log("My age is " + this.age);
    }
};

student.greet();
student.displayAge();