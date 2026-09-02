// =====================================================
// ARRAYS - SINGLE PROGRAM
// =====================================================


// 1. ARRAY CREATION AND ACCESSING ELEMENTS
// Array = collection of multiple values in a single variable.

const numbers = [10, 20, 10, 30, 20, 40];

console.log("Array:", numbers);

// Access elements using index
// Index starts from 0.

console.log("First Element:", numbers[0]);
console.log("Second Element:", numbers[1]);
console.log("Last Element:", numbers[numbers.length - 1]);


// =====================================================
// 2. ARRAY METHODS - REVISION
// =====================================================

// push() → adds element at the end
numbers.push(50);

// pop() → removes last element
numbers.pop();

// unshift() → adds element at the beginning
numbers.unshift(5);

// shift() → removes first element
numbers.shift();

console.log("After Basic Methods:", numbers);


// =====================================================
// 3. map()
// map() → creates a new array by changing every element.
//
// Syntax:
// array.map((element) => newValue);
// =====================================================

const doubled = numbers.map((number) => number * 2);

console.log("map():", doubled);


// =====================================================
// 4. filter()
// filter() → creates a new array containing elements
// that satisfy a condition.
//
// Syntax:
// array.filter((element) => condition);
// =====================================================

const greaterThan20 = numbers.filter(
  (number) => number > 20
);

console.log("filter():", greaterThan20);


// =====================================================
// 5. reduce()
// reduce() → combines all elements into one value.
//
// Syntax:
// array.reduce((accumulator, element) => result, initialValue);
// =====================================================

const total = numbers.reduce(
  (sum, number) => sum + number,
  0
);

console.log("reduce():", total);


// =====================================================
// 6. find()
// find() → returns the FIRST element that satisfies
// the condition.
//
// Syntax:
// array.find((element) => condition);
// =====================================================

const found = numbers.find(
  (number) => number > 20
);

console.log("find():", found);


// =====================================================
// 7. findIndex()
// findIndex() → returns the INDEX of the first element
// that satisfies the condition.
//
// Syntax:
// array.findIndex((element) => condition);
// =====================================================

const foundIndex = numbers.findIndex(
  (number) => number > 20
);

console.log("findIndex():", foundIndex);


// =====================================================
// 8. some()
// some() → returns true if AT LEAST ONE element
// satisfies the condition.
//
// Syntax:
// array.some((element) => condition);
// =====================================================

const hasGreaterThan35 = numbers.some(
  (number) => number > 35
);

console.log("some():", hasGreaterThan35);


// =====================================================
// 9. every()
// every() → returns true if ALL elements
// satisfy the condition.
//
// Syntax:
// array.every((element) => condition);
// =====================================================

const allGreaterThan5 = numbers.every(
  (number) => number > 5
);

console.log("every():", allGreaterThan5);


// =====================================================
// 10. sort()
// sort() → arranges elements in order.
//
// For numbers, use (a, b) => a - b.
//
// Syntax:
// array.sort((a, b) => a - b);
// =====================================================

const sortedNumbers = [...numbers].sort(
  (a, b) => a - b
);

console.log("sort():", sortedNumbers);


// Descending order

const descendingNumbers = [...numbers].sort(
  (a, b) => b - a
);

console.log("Descending:", descendingNumbers);


// =====================================================
// 11. REMOVING DUPLICATE ELEMENTS
// Set stores only unique values.
//
// Syntax:
// [...new Set(array)]
// =====================================================

const uniqueNumbers = [...new Set(numbers)];

console.log("Unique Numbers:", uniqueNumbers);