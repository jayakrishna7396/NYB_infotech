// Function Composition

function addTen(number) {
    return number + 10;
}

function double(number) {
    return number * 2;
}

let result = double(addTen(5));

console.log(result);