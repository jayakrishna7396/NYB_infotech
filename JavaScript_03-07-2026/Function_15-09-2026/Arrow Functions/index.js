//arrow function--arrow function is shortily and simple way to write in javascript .it uses => arrow symbol

const greet= ()=>{
    console.log("good afternnon")
}
greet()


// arrow function with parameters
const add =(a,b)=>{
    return a+b
}
let result=add(10,5)
console.log("addition",result)


//short arrow function
const multiple=(a,b)=>a*b
console.log("multiple",multiple(5,5))


//square
const square= number=>number*number
console.log("square",square(5))