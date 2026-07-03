//event capturing is the process where an event starts from the outer parent and travel down to the target element 
document.getElementById("grandparent").addEventListener("click",function(){
    console.log("grandparent")
},true)


document.getElementById("parent").addEventListener("click",function(){
    console.log("children")
}, true)


document.getElementById("child").addEventListener("click",function(){
    console.log("btn")
}, true)
//true  to enable capturing ,pass true as the third argument