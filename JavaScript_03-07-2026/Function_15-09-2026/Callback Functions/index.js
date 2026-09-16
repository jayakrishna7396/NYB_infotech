//callbackfunctions-callback function is a function that is passed a argument to another function
  
function greet (name){
    console.log("Hello"+ name)
}
function welcome(callback){
    callback("krishna")
}
welcome (greet)



//callback with anoyomous function
function calculate (a,b,callback){
    let result=a+b
    callback(result)
}
calculate(10,5,function(result){
console.log("addition",result)
});