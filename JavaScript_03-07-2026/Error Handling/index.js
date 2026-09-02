// =====================================================
// ERROR HANDLING + WEB STORAGE - SINGLE PROGRAM
// =====================================================


// 1. try
// try contains code that may produce an error.


// 2. catch
// catch handles the error if an error occurs.

try {
  const result = 10 / 2;

  console.log("Result:", result);

  // Uncomment to create an error
  // throw new Error("Something went wrong");

} catch (error) {
  console.log("Error:", error.message);
}


// =====================================================
// 3. finally
// finally always executes whether an error occurs or not.
// =====================================================

try {
  console.log("Try block executed");
} catch (error) {
  console.log("Catch block executed");
} finally {
  console.log("Finally block executed");
}


// =====================================================
// 4. throw
// throw is used to manually create an error.
// =====================================================

function checkAge(age) {

  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }

  return "Eligible";
}

try {
  console.log(checkAge(20));
} catch (error) {
  console.log("Throw Error:", error.message);
}


// =====================================================
// 5. CUSTOM ERRORS
// A custom error is a user-defined error class.
// =====================================================

class InvalidAgeError extends Error {

  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function validateAge(age) {

  if (age < 18) {
    throw new InvalidAgeError(
      "Invalid age: Must be 18 or above"
    );
  }

  return "Age is valid";
}

try {

  console.log(validateAge(15));

} catch (error) {

  console.log(
    "Custom Error:",
    error.name,
    error.message
  );

} finally {

  console.log("Age validation completed");

}


// =====================================================
// 6. LOCAL STORAGE
// localStorage stores data in the browser.
// Data remains even after closing the browser.
//
// Syntax:
// localStorage.setItem("key", "value");
// localStorage.getItem("key");
// localStorage.removeItem("key");
// localStorage.clear();
// =====================================================

localStorage.setItem("username", "Jay");

const username = localStorage.getItem("username");

console.log("Local Storage:", username);


// =====================================================
// 7. SESSION STORAGE
// sessionStorage stores data for the current browser tab/session.
//
// Syntax:
// sessionStorage.setItem("key", "value");
// sessionStorage.getItem("key");
// sessionStorage.removeItem("key");
// =====================================================

sessionStorage.setItem("course", "React");

const course = sessionStorage.getItem("course");

console.log("Session Storage:", course);


// =====================================================
// 8. JSON.stringify()
// Converts JavaScript object → JSON string.
// Useful when storing objects in Web Storage.
// =====================================================

const student = {
  name: "Jay",
  age: 25,
  course: "React"
};

const studentJSON = JSON.stringify(student);

console.log("JSON.stringify():", studentJSON);


// Store object in localStorage

localStorage.setItem("student", studentJSON);


// =====================================================
// 9. JSON.parse()
// Converts JSON string → JavaScript object.
// =====================================================

const storedStudent = localStorage.getItem("student");

const studentObject = JSON.parse(storedStudent);

console.log("JSON.parse():", studentObject);

console.log("Student Name:", studentObject.name);