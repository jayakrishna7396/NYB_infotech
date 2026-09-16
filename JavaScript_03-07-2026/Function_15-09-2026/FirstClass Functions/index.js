//function stores in variable
const greet=function(){
    console.log("Hello")
}
greet()


//function passed an arugument
function welcome (callback){
    callback()
}
welcome(greet);



//functionreturned an another function
function creatfunction(){
    return function(){
        console.log("function return successfully")
    }
}
const myfunction=creatfunction()
myfunction()