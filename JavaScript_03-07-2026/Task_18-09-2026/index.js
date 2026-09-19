// =====================================================
// 1. TIMERS AND EXECUTION ORDER
// =====================================================

console.log("1. Start");

setTimeout(function () {
    console.log("3. setTimeout");
}, 0);

console.log("2. End");


// =====================================================
// 2. CREATE AND CONSUME PROMISE
// =====================================================

const myPromise = new Promise(function (resolve, reject) {

    let success = true;

    if (success) {
        resolve("Promise completed successfully");
    } else {
        reject("Promise failed");
    }

});

myPromise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });


// =====================================================
// 3. PROMISE CHAINING
// =====================================================

Promise.resolve(10)
    .then(function (value) {
        console.log("First:", value);
        return value + 10;
    })
    .then(function (value) {
        console.log("Second:", value);
        return value + 10;
    })
    .then(function (value) {
        console.log("Third:", value);
    });


// =====================================================
// 4. PROMISE COMBINATORS
// =====================================================

const promise1 = Promise.resolve("One");

const promise2 = Promise.resolve("Two");

const promise3 = Promise.resolve("Three");


// Promise.all()
Promise.all([promise1, promise2, promise3])
    .then(function (result) {
        console.log("Promise.all:", result);
    });


// Promise.race()
Promise.race([
    Promise.resolve("Fast"),
    new Promise(resolve => setTimeout(() => resolve("Slow"), 1000))
])
    .then(function (result) {
        console.log("Promise.race:", result);
    });


// Promise.allSettled()
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Error")
])
    .then(function (result) {
        console.log("Promise.allSettled:", result);
    });


// Promise.any()
Promise.any([
    Promise.reject("Error 1"),
    Promise.resolve("First success")
])
    .then(function (result) {
        console.log("Promise.any:", result);
    });


// =====================================================
// 5. ASYNC / AWAIT
// =====================================================

function getData() {

    return Promise.resolve("Data received");
}

async function showData() {

    try {

        const result = await getData();

        console.log("Async/Await:", result);

    } catch (error) {

        console.log("Error:", error);

    }
}

showData();


// =====================================================
// 6. FETCH API - GET
// =====================================================

async function getUsers() {

    try {

        console.log("Loading users...");

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        if (users.length === 0) {
            console.log("No users found");
        } else {
            console.log("Users:", users);
        }

    } catch (error) {

        console.log("Error:", error);

    }
}

getUsers();


// =====================================================
// 7. POST
// =====================================================

async function createUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Krishna",
                    email: "krishna@example.com"
                })
            }
        );

        const data = await response.json();

        console.log("POST:", data);

    } catch (error) {

        console.log("POST Error:", error);

    }
}

createUser();


// =====================================================
// 8. PUT
// =====================================================

async function updateUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Krishna Updated",
                    email: "updated@example.com"
                })
            }
        );

        const data = await response.json();

        console.log("PUT:", data);

    } catch (error) {

        console.log("PUT Error:", error);

    }
}

updateUser();


// =====================================================
// 9. PATCH
// =====================================================

async function patchUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: "Krishna"
                })
            }
        );

        const data = await response.json();

        console.log("PATCH:", data);

    } catch (error) {

        console.log("PATCH Error:", error);

    }
}

patchUser();


// =====================================================
// 10. DELETE
// =====================================================

async function deleteUser() {

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
            {
                method: "DELETE"
            }
        );

        console.log("DELETE Status:", response.status);

    } catch (error) {

        console.log("DELETE Error:", error);

    }
}

deleteUser();


// =====================================================
// 11. MAP
// =====================================================

const students = new Map();

students.set(1, "Krishna");
students.set(2, "Rahul");
students.set(3, "Arun");

console.log("Map:", students);

console.log("Student 1:", students.get(1));


// =====================================================
// 12. SET
// =====================================================

const numbers = new Set([10, 20, 20, 30, 30, 40]);

console.log("Set:", numbers);


// =====================================================
// 13. CLASS AND OBJECT
// =====================================================

class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    introduce() {

        console.log(
            `My name is ${this.name} and I am ${this.age} years old.`
        );

    }

}

const student1 = new Student("Krishna", 22);

student1.introduce();


// =====================================================
// 14. INHERITANCE - extends AND super
// =====================================================

class Person {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(`Hello ${this.name}`);

    }

}

class Employee extends Person {

    constructor(name, company) {

        super(name);

        this.company = company;

    }

    work() {

        console.log(
            `${this.name} works at ${this.company}`
        );

    }

}

const employee1 = new Employee(
    "Krishna",
    "NYB Infotech"
);

employee1.greet();

employee1.work();


// =====================================================
// 15. PROTOTYPE
// =====================================================

function Car(brand) {

    this.brand = brand;

}

Car.prototype.start = function () {

    console.log(`${this.brand} car started`);

};

const car1 = new Car("Toyota");

car1.start();


// =====================================================
// 16. CUSTOM ITERATOR
// =====================================================

const customIterator = {

    values: [10, 20, 30],

    index: 0,

    next() {

        if (this.index < this.values.length) {

            return {
                value: this.values[this.index++],
                done: false
            };

        }

        return {
            value: undefined,
            done: true
        };

    }

};

console.log(customIterator.next());

console.log(customIterator.next());

console.log(customIterator.next());

console.log(customIterator.next());


// =====================================================
// 17. GENERATOR
// =====================================================

function* generateNumbers() {

    yield 100;
    yield 200;
    yield 300;

}

const generator = generateNumbers();

console.log("Generator:", generator.next());

console.log("Generator:", generator.next());

console.log("Generator:", generator.next());

console.log("Generator:", generator.next());


// =====================================================
// 18. OPTIONAL CHAINING
// =====================================================

const user = {

    name: "Krishna",

    address: {

        city: "Rajahmundry"

    }

};

console.log(user.address?.city);

console.log(user.contact?.phone);


// =====================================================
// 19. NULLISH COALESCING
// =====================================================

const username = null;

const displayName = username ?? "Guest";

console.log("Name:", displayName);


// =====================================================
// 20. DESTRUCTURING
// =====================================================

const person = {

    name: "Krishna",
    age: 22

};

const { name, age } = person;

console.log("Name:", name);

console.log("Age:", age);


// =====================================================
// 21. SPREAD OPERATOR
// =====================================================

const numbers1 = [10, 20, 30];

const numbers2 = [...numbers1, 40, 50];

console.log("Spread:", numbers2);


// =====================================================
// 22. REST OPERATOR
// =====================================================

function addNumbers(...numbers) {

    let total = 0;

    for (const number of numbers) {

        total += number;

    }

    return total;

}

console.log("Rest:", addNumbers(10, 20, 30, 40));


// =====================================================
// 23. TEMPLATE LITERALS
// =====================================================

const firstName = "Krishna";

const course = "JavaScript";

console.log(
    `My name is ${firstName} and I am learning ${course}.`
);