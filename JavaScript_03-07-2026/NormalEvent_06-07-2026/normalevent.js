//normal An event is something that happens on a web page, such as clicking a button, typing in a text box, moving the mouse, or pressing a key.
let button=document.getElementById("button")
let a=0
button.addEventListener("click",function(){
    a+=1
    console.log("value of a is:",a)
    console.log("button clicked")
})

//throttling event
//call back function  A callback function is a function passed into another function as an argument, which is called (executed) after the main function finishes its work.
function function1(s){
    console.log(s)
}


function one(a,b,c){

    console.log("one is excuted")
    c(a+b)
}
one(1,2, function1)


//promise
let p=new Promise((resolve,reject)=>{
let status =true
if(status){
// console.log("Resolved")    
resolve("function successful")
}
else{
// console.log("Reject")   
 reject("error")
}
})

//p
//.then () //success case resolve
//catch ()//failure//reject

p
.then((a)=>{
 console.log(a)   
})
.catch((b)=>{
console.log(b)
})


