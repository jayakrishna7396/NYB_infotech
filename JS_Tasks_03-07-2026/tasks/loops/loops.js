//for loops in object
// the for...in loop is used to iterate over the enumerable property names (keys) of an object

//
// Display Object Properties
const student = {
    name: "Krishna",
    age: 22,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}


// Count Object Properties
const car = {
    brand: "BMW",
    model: "X5",
    year: 2024
};

let count = 0;

for (let key in car) {
    count++;
}

console.log("Total Properties:", count);



//current date
const today = new Date();

console.log(today);

// Get Individual Date Parts
const today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

//current time
const now = new Date();

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//formatted date
const today = new Date();

const formatted =
    today.getDate() + "/" +
    (today.getMonth() + 1) + "/" +
    today.getFullYear();

console.log(formatted);


// Template Strings
// Template literals use backticks ( ) and ${} to insert variables into strings.
let name = "Krishna";
let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);

//example=2
let product = "Laptop";
let price = 50000;

console.log(`The price of ${product} is ₹${price}.`);

//math object methods
//math.round()
console.log(Math.round(4.4));
console.log(Math.round(4.6));

//math floor
console.log(Math.floor(4.9));


//string object method
//length
let str = "JavaScript";
console.log(str.length);

//slice()
let str = "JavaScript";
console.log(str.slice(0, 4));

//substring()
let str = "Programming";
console.log(str.substring(3, 8));

//replace
let str = "I like Java";
console.log(str.replace("Java", "JavaScript"));

//toupper case()
let str = "hello";
console.log(str.toUpperCase());

//to lower case
let str = "WELCOME";
console.log(str.toLowerCase());

//includes
let str = "JavaScript";
console.log(str.includes("Script"));

//startwith()
let str = "JavaScript";
console.log(str.startsWith("Java"));

//endswitch
let str = "JavaScript";
console.log(str.endsWith("Script"));

//split
let str = "HTML,CSS,JavaScript";
console.log(str.split(","));

//trim()
let str = "   Hello   ";
console.log(str.trim());




//student report
const student = {
    name: "Krishna",
    marks: 92
};

const today = new Date();

console.log(`Date: ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`);

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

//user greetings
const user = {
    firstName: "Rahul",
    lastName: "Kumar"
};

const fullName = `${user.firstName} ${user.lastName}`;

console.log(`Welcome, ${fullName.toUpperCase()}!`);

//Object Property Display
const mobile = {
    brand: "Samsung",
    model: "S24",
    price: 75000
};

for (let key in mobile) {
    console.log(`${key} => ${mobile[key]}`);
}

//product information
const product = {
    name: "Laptop",
    price: 49999.99
};

const discount = Math.round(product.price * 0.1);

console.log(`Product: ${product.name}`);
console.log(`Original Price: ₹${product.price}`);
console.log(`Discount: ₹${discount}`);
console.log(`Final Price: ₹${product.price - discount}`);
