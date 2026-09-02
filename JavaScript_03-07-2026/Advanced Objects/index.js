// ==========================================
// 1. Object Destructuring
// ==========================================

// Definition:
// Object destructuring extracts properties from an object
// and stores them in variables.

// Syntax:
// const { property1, property2 } = object;

const student = {
  name: "Jay",
  age: 25,
  course: "React"
};

const { name, age, course } = student;

console.log("Destructuring:", name, age, course);


// ==========================================
// 2. Object Methods
// ==========================================

// Definition:
// An object method is a function stored inside an object.

// Syntax:
// const object = {
//   method() {
//     // code
//   }
// };

const person = {
  name: "Jay",

  greet() {
    return `Hello ${this.name}`;
  }
};

console.log("Object Method:", person.greet());


// ==========================================
// 3. Object.keys()
// ==========================================

// Definition:
// Object.keys() returns an array containing all
// property names (keys) of an object.

// Syntax:
// Object.keys(object);

const keys = Object.keys(student);

console.log("Object.keys():", keys);


// ==========================================
// 4. Object.values()
// ==========================================

// Definition:
// Object.values() returns an array containing all
// property values of an object.

// Syntax:
// Object.values(object);

const values = Object.values(student);

console.log("Object.values():", values);


// ==========================================
// 5. Object.entries()
// ==========================================

// Definition:
// Object.entries() returns an array containing
// key-value pairs.

// Syntax:
// Object.entries(object);

const entries = Object.entries(student);

console.log("Object.entries():", entries);


// ==========================================
// 6. Object.assign()
// ==========================================

// Definition:
// Object.assign() copies properties from one or more
// source objects into a target object.

// Syntax:
// Object.assign(target, source);

const additionalDetails = {
  city: "Rajahmundry"
};

const updatedStudent = Object.assign(
  {},
  student,
  additionalDetails
);

console.log("Object.assign():", updatedStudent);


// ==========================================
// 7. Optional Chaining (?.)
// ==========================================

// Definition:
// Optional chaining safely accesses a property.
// If the property does not exist, it returns undefined
// instead of causing an error.

// Syntax:
// object?.property

console.log("Optional Chaining:", student?.name);
console.log("Missing Property:", student?.phone?.number);


// ==========================================
// 8. Nullish Coalescing (??)
// ==========================================

// Definition:
// ?? provides a default value when the value is
// null or undefined.

// Syntax:
// value ?? defaultValue;

const phone = null;

const phoneNumber = phone ?? "Not Available";

console.log("Nullish Coalescing:", phoneNumber);


// ==========================================
// 9. Spread and Rest Operators (...)
// ==========================================

// Spread Definition:
// Spread expands/copies elements or properties.

// Syntax:
// const newObject = { ...object };

const newStudent = {
  ...student,
  city: "Rajahmundry"
};

console.log("Spread:", newStudent);


// Rest Definition:
// Rest collects multiple values into one object/array.

// Syntax:
// const { property, ...rest } = object;

const { name: studentName, ...remainingDetails } = student;

console.log("Rest:", remainingDetails);