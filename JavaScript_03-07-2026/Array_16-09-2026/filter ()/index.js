
// filter()
// Definition: filter() selects elements that match a condition
// and creates a new array.


// Example 1: Get numbers greater than 20
let numbers = [10, 15, 20, 25, 30];
let result = numbers.filter(function(number) {
    return number > 20;
});
console.log("Original Array:", numbers);
console.log("Filtered Array:", result);


// Example 2: Get even numbers
let numbers2 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers2.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);


// Example 3: Get students who passed
let marks = [25, 45, 60, 30, 80];
let passedMarks = marks.filter(function(mark) {
    return mark >= 35;
});
console.log("Passed Marks:", passedMarks);


// Example 4: Filter names
let names = ["Krishna", "Rahul", "Arun", "Kiran"];
let filteredNames = names.filter(function(name) {
    return name.length > 5;
});
console.log("Filtered Names:", filteredNames);
