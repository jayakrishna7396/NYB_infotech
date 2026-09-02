// ================================
// Pure Function
// ================================

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
console.log(add(10, 20));


// ================================
// Impure Function
// ================================

let count = 0;

function increase() {
    count++;
    return count;
}

console.log(increase());
console.log(increase());
console.log(increase());