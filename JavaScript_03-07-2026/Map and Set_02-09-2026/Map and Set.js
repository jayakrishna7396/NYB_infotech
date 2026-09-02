const student = new Map();

student.set("name", "Jayakrish");
student.set("age", 25);
student.set("course", "JavaScript");

console.log(student);
// Get Values
console.log(student.get("name"));
console.log(student.get("age"));




// 2. Set
// A Set stores only unique values.
const numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(30);
numbers.add(10);

console.log(numbers);



// Delete a Value
numbers.delete(20);

console.log(numbers);