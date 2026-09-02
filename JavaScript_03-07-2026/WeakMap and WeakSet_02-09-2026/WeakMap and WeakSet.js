// WeakMap
// Definition:
// A WeakMap stores key-value pairs, where the key must be an object.
//syntax
const weakMap = new WeakMap();

weakMap.set(key, value);
weakMap.get(key);
weakMap.has(key);
weakMap.delete(key);

// Example
const student = {
    name: "Jayakrish",
    age: 25
};

// const weakMap = new WeakMap();

// weakMap.set(student, "JavaScript Student");

// console.log(weakMap.get(student));
// console.log(weakMap.has(student));

// weakMap.delete(student);

// console.log(weakMap.has(student));




// WeakSet
// Definition:
// A WeakSet stores only objects, and each object can appear only once.
// Syntax
const weakSet = new WeakSet();

weakSet.add(object);
weakSet.has(object);
weakSet.delete(object);



// Example
const student1 = {
    name: "Jayakrish"
};

const student2 = {
    name: "Rahul"
};

// const weakSet = new WeakSet();

// weakSet.add(student1);
// weakSet.add(student2);

// console.log(weakSet.has(student1));
// console.log(weakSet.has(student2));

// weakSet.delete(student1);

// console.log(weakSet.has(student1));