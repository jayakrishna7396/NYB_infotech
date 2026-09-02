// =====================================================
// OBJECTS - SINGLE PROGRAM
// =====================================================


// 1. CREATING AND ACCESSING OBJECTS
// Object = collection of data stored as key-value pairs.

const student = {
  name: "Jay",
  age: 25,
  course: "React"
};

// Access using dot notation
console.log("Name:", student.name);
console.log("Age:", student.age);

// Access using bracket notation
console.log("Course:", student["course"]);


// =====================================================
// 2. NESTED OBJECTS
// Object inside another object is called a nested object.
// =====================================================

const employee = {
  name: "Rahul",
  age: 28,

  address: {
    city: "Rajahmundry",
    state: "Andhra Pradesh"
  }
};

console.log("City:", employee.address.city);
console.log("State:", employee.address.state);


// =====================================================
// 3. OBJECT DESTRUCTURING
// Destructuring = extracting properties into variables.
//
// Syntax:
// const { property1, property2 } = object;
// =====================================================

const {
  name,
  age,
  course
} = student;

console.log("Destructuring:", name, age, course);


// Nested destructuring

const {
  address: { city }
} = employee;

console.log("Nested Destructuring:", city);


// =====================================================
// 4. SPREAD OPERATOR
// Spread (...) copies or expands object properties.
//
// Syntax:
// const newObject = { ...oldObject };
// =====================================================

const updatedStudent = {
  ...student,
  city: "Rajahmundry"
};

console.log("Spread:", updatedStudent);


// =====================================================
// 5. REST OPERATOR
// Rest (...) collects the remaining properties.
//
// Syntax:
// const { first, ...remaining } = object;
// =====================================================

const {
  name: studentName,
  ...remainingDetails
} = student;

console.log("Rest Name:", studentName);
console.log("Rest Properties:", remainingDetails);


// =====================================================
// 6. Object.keys()
// Returns an array containing object keys.
// =====================================================

const keys = Object.keys(student);

console.log("Object.keys():", keys);


// =====================================================
// 7. Object.values()
// Returns an array containing object values.
// =====================================================

const values = Object.values(student);

console.log("Object.values():", values);


// =====================================================
// 8. Object.entries()
// Returns an array containing [key, value] pairs.
// =====================================================

const entries = Object.entries(student);

console.log("Object.entries():", entries);


// =====================================================
// 9. OPTIONAL CHAINING (?.)
// Safely accesses a property when it may be
// null or undefined.
//
// Syntax:
// object?.property
// =====================================================

console.log("Optional Chaining:", employee?.name);

console.log(
  "Nested Optional Chaining:",
  employee?.address?.city
);

// Property does not exist → undefined instead of error

console.log(
  "Missing Property:",
  employee?.phone?.number
);


// =====================================================
// 10. NULLISH COALESCING (??)
// Provides a default value only when the value
// is null or undefined.
//
// Syntax:
// value ?? defaultValue
// =====================================================

const phone = null;

const phoneNumber = phone ?? "Not Available";

console.log("Nullish Coalescing:", phoneNumber);


// 0, false and "" are valid values.
// They are NOT replaced by ??

const marks = 0;

console.log(
  "Marks:",
  marks ?? 100
);