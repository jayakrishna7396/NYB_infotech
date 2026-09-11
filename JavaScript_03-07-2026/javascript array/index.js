//array is single value in a multiple variables
// let marks =[70,80,90]
// console.log(marks)
// console.log(marks[0])
// console.log(marks[2])

//adding and removing
// push()--add
let fruits=["apple","bananan"]
fruits.push("mango")
console.log(fruits)
// remove pop()
let place=["rjy","hyd","kmm"]
place.pop("hyd")
console.log(place)
//unshift-add at begining
let age=[40,50,60]
age.unshift(30)
console.log(age)
//shiftreemove the beging
let price=[20,30,40]
price.shift()
console.log(price)


//searching element
//includes--check whether the value exists in array
// let mark=[20,30,50]
// console.log(mark.includes(20))
// console.log(mark.includes(40))


//looping throgh array
// for of read by one by one
let names = ["Rahul", "Priya", "John"];
for (let name of names) {
    console.log(name);
}

//map--changes every element and creates a new array.
let marks=[10,20,30]
let doublemarks = marks.map(mark => mark *2)
console.log(doublemarks)

//filter()--selects elements that satisfy a condition.
let numbers=[10,20,30,40]
let passed =numbers.filter(number =>number>10)
console.log (passed)

