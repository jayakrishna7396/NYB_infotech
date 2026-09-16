
// Array Iteration
// Definition: Array iteration means going through each element of an array one by one.


// 1. for Loop
// Definition: Uses the index to access each array element.

let fruits1 = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits1.length; i++) {
    console.log(fruits1[i]);
}


// 2. for...of Loop
// Definition: Gets each value from the array one by one.

let fruits2 = ["Apple", "Banana", "Mango"];

for (let fruit of fruits2) {
    console.log(fruit);
}


// 3. forEach()
// Definition: Executes a function for every element in the array.

let numbers1 = [10, 20, 30];

numbers1.forEach(function(number) {
    console.log(number);
});


// 4. map()
// Definition: Creates a new array by changing each element.

let numbers2 = [1, 2, 3, 4];

let result = numbers2.map(function(number) {
    return number * 2;
});

console.log(result);