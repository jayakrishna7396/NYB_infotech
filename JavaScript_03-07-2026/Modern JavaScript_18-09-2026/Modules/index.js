function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export {
    add,
    subtract
};




import { add, subtract } from "./math.js";

let result1 = add(10, 20);
let result2 = subtract(20, 10);

console.log("Addition:", result1);
console.log("Subtraction:", result2);