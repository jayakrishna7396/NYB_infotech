// Object.entries()
// Definition: Object.entries() returns an array containing key-value pairs of an object.

let student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript"
};

let entries = Object.entries(student);
console.log("Entries:", entries);

// Access individual entries
console.log("First Entry:", entries[0]);
console.log("Second Entry:", entries[1]);
console.log("Third Entry:", entries[2]);

// Access key and value
console.log("First Key:", entries[0][0]);
console.log("First Value:", entries[0][1]);

// Using for...of
for (let [key, value] of Object.entries(student)) {
    console.log(key, ":", value);
}