//higher order function-- a function that accept anotherfuction in an argument

function greet (name){
    console.log("Hello"+ name)
}
function welcome (callback){
    callback("krishna")
}
welcome(greet);



//higher order function with array
function calculate (a,b,operation){
    return operation(a,b)
}
const add=(a,b)=>a+b
const result=calculate(10+20,add)

consple.log("addition",result)