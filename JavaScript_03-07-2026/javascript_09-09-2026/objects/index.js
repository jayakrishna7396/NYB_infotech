
// 1. CREATING OBJECT
// Definition:
// An object stores data using key and value.
//
// Syntax:
// let objectName = {
//     key: value
// };


let student = {

    name: "Krishna",
    age: 21,
    marks: 85,

    address: {
        city: "Rajahmundry",
        state: "Andhra Pradesh"
    },

    // Object Method
    display: function() {
        console.log("Student:", this.name);
    }

};


// 2. ACCESSING PROPERTIES
// Definition:
// Accessing means getting a value from an object.
//
// Syntax:
// object.key
// object["key"]


console.log("Name:", student.name);

console.log("Age:", student["age"]);



// 3. UPDATING PROPERTIES
// Definition:
// Updating means changing an existing value.
//
// Syntax:
// object.key = newValue;


student.marks = 90;

student.age = 22;

console.log("Updated Marks:", student.marks);

console.log("Updated Age:", student.age);


// 4. NESTED OBJECT
// Definition:
// An object inside another object is called
// a nested object.
//
// Syntax:
// object.outerKey.innerKey


console.log("City:", student.address.city);

console.log("State:", student.address.state);


// Update nested property

student.address.city = "Vijayawada";

console.log("Updated City:",
    student.address.city
);

// 5. OBJECT METHOD
// Definition:
// A function inside an object is called a method.
//
// Syntax:
// object = {
//     method: function() {
//         // code
//     }
// };


student.display();


// 6. Object.keys()
// Definition:
// Returns all object property names.
//
// Syntax:
// Object.keys(object);


let keys = Object.keys(student);

console.log("Keys:", keys);

// 7. Object.values()
// Definition:
// Returns all property values.
//
// Syntax:
// Object.values(object);


let values = Object.values(student);

console.log("Values:", values);



// 8. Object.entries()
// Definition:
// Returns key and value pairs.
//
// Syntax:
// Object.entries(object);


let entries = Object.entries(student);

console.log("Entries:", entries);


// 9. OBJECT COPYING

// Shallow Copy
// Definition:
// Shallow copy copies the first level of an object.
//
// Syntax:
// let copy = { ...object };


let shallowCopy = {
    ...student
};

console.log("Shallow Copy:",
    shallowCopy
);


// Change shallow copy

shallowCopy.name = "Rahul";

console.log("Original Name:",
    student.name
);

console.log("Copy Name:",
    shallowCopy.name
);



// Deep Copy
// Definition:
// Deep copy copies the complete object,
// including nested objects.
//
// Syntax:
// let copy = JSON.parse(
//     JSON.stringify(object)
// );


let deepCopy = JSON.parse(
    JSON.stringify(student)
);


// Change nested value in deep copy

deepCopy.address.city = "Hyderabad";


console.log("Original City:",
    student.address.city
);

console.log("Deep Copy City:",
    deepCopy.address.city
);


// FINAL OUTPUT

console.log("-------------------------");
console.log("FINAL STUDENT OBJECT");
console.log("-------------------------");

console.log(student);

console.log("Keys:", Object.keys(student));

console.log("Values:", Object.values(student));

console.log("Entries:", Object.entries(student));