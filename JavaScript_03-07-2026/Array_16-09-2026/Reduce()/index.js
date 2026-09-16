// reduce()--Definition: reduce() combines all array elements 
// // and returns one final value.


// Definition: reduce() combines all array elements
// and returns one final value.


// Example 1: Find total
let numbers = [10, 20, 30, 40];
let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log("Total:", total);


// Example 2: Find product
let numbers2 = [2, 3, 4];
let product = numbers2.reduce(function(result, number) {
    return result * number;
}, 1);
console.log("Product:", product);


// Example 3: Find total marks
let marks = [80, 75, 90, 85];
let totalMarks = marks.reduce(function(total, mark) {
    return total + mark;
}, 0);
console.log("Total Marks:", totalMarks);


// Example 4: Find maximum number
let numbers3 = [10, 50, 30, 80, 40];
let maximum = numbers3.reduce(function(max, number) {
    return number > max ? number : max;
}, numbers3[0]);
console.log("Maximum:", maximum);
