//normal object
// a normal assignment, both variables point to the same object in memory. Changes made through one variable are reflected in the other.

//normal object
let student1 = {
    name: "Krishna",
    age: 22
};

let student2 = student1;

student2.age = 25;

console.log(student1);
console.log(student2);


//shallow copy using spread operator
// the spread operator (...) creates a new object by copying the first level of properties.
let employee1 = {
    name: "Rahul",
    age: 30
};

let employee2 = {
    ...employee1
};

employee2.age = 35;

console.log(employee1);
console.log(employee2);

// Shallow Copy Using Object.assign()
// Object.assign() copies enumerable properties from one object to another.
let car1 = {
    brand: "BMW",
    model: "X5"
};

let car2 = Object.assign({}, car1);

car2.brand = "Audi";

console.log(car1);
console.log(car2);

//example eith nested object
let user1 = {
    name: "John",
    address: {
        city: "Delhi"
    }
};

let user2 = Object.assign({}, user1);

user2.address.city = "Mumbai";

console.log(user1.address.city);
console.log(user2.address.city);


// Deep Copy Using JSON Method
// A deep copy creates completely independent copies of nested objects.
let student1 = {
    name: "Krishna",
    address: {
        city: "Hyderabad"
    }
};

let student2 = JSON.parse(JSON.stringify(student1));

student2.address.city = "Vizag";

console.log(student1);
console.log(student2);

// Limitation of JSON Method
let obj = {
    name: "Rahul",
    age: undefined,
    greet: function () {
        console.log("Hello");
    }
};

let copy = JSON.parse(JSON.stringify(obj));

console.log(copy);

// Deep Copy Using structuredClone()
let employee1 = {
    name: "John",
    address: {
        city: "Delhi"
    }
};

let employee2 = structuredClone(employee1);

employee2.address.city = "Pune";

console.log(employee1.address.city);
console.log(employee2.address.city);

// Deep Copy Using a Custom Recursive Function
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepCopy(obj[key]);
    }

    return copy;
}

let original = {
    name: "Krishna",
    address: {
        city: "Hyderabad"
    }
};

let copied = deepCopy(original);

copied.address.city = "Chennai";

console.log(original.address.city);
console.log(copied.address.city);

// Shallow Copy vs Deep Copy
let obj1 = {
    name: "A",
    address: {
        city: "Delhi"
    }
};

let obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city);

//deep copy
let obj1 = {
    name: "A",
    address: {
        city: "Delhi"
    }
};

let obj2 = structuredClone(obj1);

obj2.address.city = "Mumbai";

console.log(obj1.address.city);

