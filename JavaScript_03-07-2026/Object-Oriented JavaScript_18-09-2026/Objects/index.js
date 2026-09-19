// JavaScript Objects
// Definition:
// An object is a collection of related data
// stored using key-value pairs.


// 1. Object Creation
// Definition:
// Creating an object using curly braces {}.

const student = {
    name: "Krishna",
    age: 25,
    city: "Hyderabad"
};

console.log("Student:", student);


// 2. Accessing Properties
// Definition:
// We can access object values using dot notation
// or bracket notation.

console.log("Name:", student.name);
console.log("Age:", student["age"]);


// 3. Updating Properties
// Definition:
// We can change the value of an existing property.

student.age = 26;

console.log("Updated Age:", student.age);


// 4. Adding Properties
// Definition:
// We can add a new property to an object.

student.course = "JavaScript";

console.log("Course:", student.course);


// 5. Deleting Properties
// Definition:
// delete is used to remove a property from an object.

delete student.city;

console.log("After Delete:", student);


// 6. Object Methods
// Definition:
// A function inside an object is called a method.

const user = {
    name: "Krishna",

    greet: function () {
        console.log("Hello", this.name);
    }
};

user.greet();


// 7. Nested Objects
// Definition:
// An object inside another object is called a nested object.

const employee = {
    name: "Krishna",

    address: {
        city: "Hyderabad",
        pincode: 500001
    }
};

console.log("Employee:", employee);
console.log("City:", employee.address.city);


// 8. Object.keys()
// Definition:
// Object.keys() returns all property names as an array.

console.log("Keys:", Object.keys(employee));


// 9. Object.values()
// Definition:
// Object.values() returns all property values as an array.

console.log("Values:", Object.values(employee));


// 10. Object.entries()
// Definition:
// Object.entries() returns keys and values
// as an array of arrays.

console.log("Entries:", Object.entries(employee));


// 11. Object Destructuring
// Definition:
// Destructuring extracts properties from an object
// and stores them in variables.

const { name, age } = {
    name: "Krishna",
    age: 25
};

console.log("Destructured Name:", name);
console.log("Destructured Age:", age);


// 12. Spread Operator
// Definition:
// Spread (...) copies properties from one object
// into another object.

const student1 = {
    name: "Krishna",
    age: 25
};

const student2 = {
    ...student1,
    city: "Hyderabad"
};

console.log("Spread Object:", student2);


// 13. Shallow Copy
// Definition:
// A shallow copy creates a new object,
// but nested objects are still shared.

const person1 = {
    name: "Krishna",
    age: 25
};

const person2 = {
    ...person1
};

person2.age = 30;

console.log("Original:", person1);
console.log("Copy:", person2);


// 14. Deep Copy
// Definition:
// A deep copy creates a completely independent copy,
// including nested objects.

const person3 = {
    name: "Krishna",

    address: {
        city: "Hyderabad"
    }
};

const person4 = JSON.parse(JSON.stringify(person3));

person4.address.city = "Chennai";

console.log("Original:", person3);
console.log("Deep Copy:", person4);


// 15. Checking Property
// Definition:
// The "in" operator checks whether a property
// exists inside an object.

console.log("name exists:", "name" in person3);
console.log("salary exists:", "salary" in person3);