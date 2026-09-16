//Arugument object--The arguments object is a special object available inside a regular function. 
// It contains all the arguments passed to that function, even if parameters were not defined.


function add(){

    console.log("Arugument",arguments)

    let total=0

     for (let i = 0; i < arguments.length; i++) {
        total = total + arguments[i];
    }
    console.log("Total",total)
}
add(1,2,3,4,5,6,7,8,9,10)