//rest parameters--collect the many values in single array

function add(...numbers){
    console.log("Number",numbers)

    let total=0
    for(let number of numbers){
        total=total+number
    }
    return total
}
let result=add(10,20,30,40,50)
console.log("Total",result)



//rest parameters with another parameters
function student(name,...marks){
    console.log("Name",name)
    console.log("Marks",marks)
}
student("krishna",10,20,30)