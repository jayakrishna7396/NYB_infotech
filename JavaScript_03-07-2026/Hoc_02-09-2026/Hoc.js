// Higher Order Function

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

let result = calculate(10, 20, add);

console.log(result);