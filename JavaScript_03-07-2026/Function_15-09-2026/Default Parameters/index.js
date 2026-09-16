// Default Parameters

function greet(name="krishna"){
    console.log("hello"+name)
}

//no value passed
greet()
//value passed
greet("jayakrishna")

//default parameters  with multiple parameters
function add(a=10,b=20){
    console.log("addition",a+b)
}
add()  //no value passed
add(1,2)  //value passed
add(3)  //only one value passed