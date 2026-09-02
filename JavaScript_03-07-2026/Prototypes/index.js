// =====================================================
// PROTOTYPE & OOP - SINGLE PROGRAM
// =====================================================

// 1. PROTOTYPE
// Prototype = an object from which another object can inherit properties/methods.

const personPrototype = {
  greet() {
    return `Hello ${this.name}`;
  }
};


// 2. PROTOTYPE CHAIN
// JavaScript searches an object, then its prototype,
// then the prototype's prototype, and so on.

const person = Object.create(personPrototype);

person.name = "Jay";

console.log("Prototype Chain:", person.greet());


// 3. prototype
// prototype = property used by constructor functions
// to share properties and methods with objects.

function Employee(name) {
  this.name = name;
}

Employee.prototype.work = function () {
  return `${this.name} is working`;
};

const employee = new Employee("Rahul");

console.log("prototype:", employee.work());


// 4. __proto__
// __proto__ = reference to an object's prototype.

console.log("__proto__:", employee.__proto__ === Employee.prototype);


// 5. CONSTRUCTOR FUNCTION
// Constructor Function = function used with 'new' to create objects.

function Product(name, price) {
  this.name = name;
  this.price = price;
}

const product = new Product("Laptop", 50000);

console.log("Constructor Function:", product);


// =====================================================
// 6. CLASS
// Class = blueprint for creating objects.
// =====================================================


// 7. CONSTRUCTOR
// constructor() runs automatically when an object is created.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }


  // 8. METHOD
  // Method = function inside a class.

  greet() {
    return `Hello, I am ${this.name}`;
  }
}


// =====================================================
// 9. INHERITANCE
// Student inherits properties and methods from Person.
// =====================================================


// 10. extends
// extends = creates inheritance between classes.

class Student extends Person {

  constructor(name, age, course) {

    // 11. super
    // super() calls the parent class constructor.

    super(name, age);

    this.course = course;
  }


  // Method in Student class

  showDetails() {
    return `${super.greet()}, Course: ${this.course}`;
  }
}


// Create Student object

const student = new Student("Jay", 25, "React");

console.log("Class:", student);

console.log("Constructor:", student.name, student.age);

console.log("Method:", student.greet());

console.log("Inheritance:", student.greet());

console.log("extends:", student instanceof Person);

console.log("super:", student.showDetails());


// =====================================================
// 12. ENCAPSULATION
// Encapsulation = keeping data private and controlling access.
// # makes a field private.
// =====================================================

class BankAccount {

  #balance = 10000;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();

account.deposit(5000);

console.log("Encapsulation:", account.getBalance());


// account.#balance ❌
// Private property cannot be accessed directly.