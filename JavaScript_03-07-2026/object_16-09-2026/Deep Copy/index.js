// Deep Copy
// Definition: Deep copy creates a completely independent copy including nested objects.

let student = {
    name: "Krishna",
    age: 22,

    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

// Create deep copy
let copy = JSON.parse(JSON.stringify(student));

// Change top-level property
copy.name = "Rahul";

// Change nested property
copy.address.city = "Chennai";

console.log("Original Student:", student);
console.log("Copied Student:", copy);