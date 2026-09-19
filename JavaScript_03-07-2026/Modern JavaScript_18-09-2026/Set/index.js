// JavaScript Set

// 1. Create a Set

const numbers = new Set([10, 20, 20, 30, 30, 40]);

console.log("Set:", numbers);


// 2. add()

numbers.add(50);

console.log("After add:", numbers);


// 3. Duplicate value

numbers.add(20);

console.log("After adding duplicate:", numbers);


// 4. delete()

numbers.delete(30);

console.log("After delete:", numbers);


// 5. has()

console.log("Has 20:", numbers.has(20));

console.log("Has 100:", numbers.has(100));


// 6. size

console.log("Size:", numbers.size);


// 7. for...of

console.log("Set values:");

for (const number of numbers) {
    console.log(number);
}


// 8. Convert Set to Array

const array = [...numbers];

console.log("Array:", array);


// 9. Remove duplicate values from Array

const values = [10, 20, 20, 30, 30, 40, 40, 50];

const uniqueValues = [...new Set(values)];

console.log("Original Array:", values);

console.log("Unique Array:", uniqueValues);


// 10. clear()

numbers.clear();

console.log("After clear:", numbers);