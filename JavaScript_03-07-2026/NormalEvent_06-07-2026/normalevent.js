//normal An event is something that happens on a web page, such as clicking a button, typing in a text box, moving the mouse, or pressing a key.
let button=document.getElementById("button")
let a=0
button.addEventListener("click",function(){
    a+=1
    console.log("value of a is:",a)
    console.log("button clicked")
})


//throttling the event may happen continuously, but my function will execute only once every fixed amount of time .
let lastclick=0
let b=0
button.addEventListener("click",function(){   
let current= Date.now()
 if(current- lastclick >=5000){
     b+=1;
    console.log("value of b is:",b);
    lastclick = current;
    }
    console.log("button clicked")
})

//
let t
button.addEventListener("click",function(){
clearTimeout(t)
t=setTimeout(function(){
c+=1
console.log("value of c is:",c)
},2000)

})

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


