// searching an array means checking whether a particular value exists in an array or finding its position.

//indexof()--Returns the index of the first matching value.
let fruits=["apple","banana","grapes"]
console.log(fruits.indexOf("banana"))


//lastindexof()--returns the index of the last occurrence of a specific value
let numbers=[10,20,10,30,20]
console.log(numbers.lastIndexOf(10))


//incluse()--Checks whether a value exists in an array. Returns true or false.
let fruits1=["apple","banana","grapes"]
console.log(fruits1.includes("banana"))
console.log(fruits1.includes("mango"))


//find()--Returns the first element that matches a condition.
let numbers1= [10, 25, 30, 45];
let result = numbers.find(number => number > 20);
console.log(result);


// findIndex()--Returns the index of the first element that matches a condition.
let numbers2 = [10, 25, 30, 45];
let result1 = numbers.findIndex(number => number > 20);
console.log(result);

// some()--Checks if at least one element matches a condition.
let numbers3=[10,25,30,45]
let result2=numbers.some(number=>number>20)
console.log(result2)

//every()--check if all elements match a condition
let numbers4=[10,25,30,45]
let result3=numbers.every(number=>number>20)