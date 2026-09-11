
let marks = [80, 90, 70, 60];

// 1. ADDING
// push() = add value

marks.push(85);

console.log("After Add:", marks);


// 2. REMOVING
// pop() = remove last value

marks.pop();

console.log("After Remove:", marks);


// 3. SEARCHING
// includes() = check value

console.log("90 is available:",
    marks.includes(90)
);


// 4. LOOPING
// for...of = read values one by one

console.log("Marks:");

for (let mark of marks) {
    console.log(mark);
}


// 5. map()
// map() = change every value

let doubleMarks = marks.map(
    mark => mark * 2
);

console.log("Double Marks:", doubleMarks);


// 6. filter()
// filter() = select matching values

let passedMarks = marks.filter(
    mark => mark >= 70
);

console.log("Passed Marks:", passedMarks);


// 7. reduce()
// reduce() = get one final value

let total = marks.reduce(
    (sum, mark) => sum + mark,
    0
);

console.log("Total:", total);


// 8. find()
// find() = find first matching value

let foundMark = marks.find(
    mark => mark >= 80
);

console.log("First 80+ Mark:", foundMark);


// 9. findIndex()
// findIndex() = find position

let position = marks.findIndex(
    mark => mark === 90
);

console.log("90 Position:", position);


// 10. some()
// some() = check if at least one matches

let has90 = marks.some(
    mark => mark === 90
);

console.log("Has 90:", has90);


// 11. every()
// every() = check if all match

let allPassed = marks.every(
    mark => mark >= 40
);

console.log("All Passed:", allPassed);


// 12. forEach()
// forEach() = do something for each value

marks.forEach(mark => {
    console.log("Student Mark:", mark);
});


// 13. sort()
// sort() = arrange values

let sortedMarks = [...marks].sort(
    (a, b) => a - b
);

console.log("Sorted:", sortedMarks);


// 14. join()
// join() = convert array to string

let markList = marks.join(", ");

console.log("Mark List:", markList);


// 15. flat()
// flat() = convert nested array into one array

let nestedMarks = [
    [80, 90],
    [70, 60]
];

let flatMarks = nestedMarks.flat();

console.log("Flat Marks:", flatMarks);


// 16. Remove Duplicates
// Set = remove repeated values

let numbers = [
    10, 20, 10, 30, 20
];

let uniqueNumbers = [
    ...new Set(numbers)
];

console.log("Unique Numbers:", uniqueNumbers);


// ========================================
// FINAL RESULT
// ========================================

console.log("-------------------------");
console.log("FINAL RESULT");
console.log("-------------------------");

console.log("Marks:", marks);
console.log("Total:", total);
console.log("Passed:", passedMarks);
console.log("Double:", doubleMarks);
console.log("Found:", foundMark);
console.log("Position:", position);
console.log("Has 90:", has90);
console.log("All Passed:", allPassed);
console.log("Sorted:", sortedMarks);
console.log("Joined:", markList);
console.log("Flat:", flatMarks);
console.log("Unique:", uniqueNumbers);