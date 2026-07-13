//loops   if one code isused multiple time then we use loops
// loopstyepe
//for loop
//while loop
//do while
//for of
//for each


//for loops for loops is used for multiple times
// for(intilization;condition:update){
// }
//minimum no of iteraction is 0

for (let i=0;i<10;i++){
    console.log(i)
}

//loop througg an array
let grade=[8,10,7]
for (let i=0;i<grade.length;i++){
    console.log(grade[i])
}

//example with switch
let grades=[8,10,7]
for (let i=0;i<grades.length;i++){
    switch(grades[i]){
        case 10:
            console.log("execellent")
            break;
            case 8:
            console.log("verygood")
            break;
            case 7:
                console.log("good")
    }
        
}
//forloop-- then is stopping know then we use the for lopp
//while loop--then the stopping is didnt then we use the while loop 
//while lo;op(condition)how many time to stop
// while  (condition){       //syntax

// }

let i=1
while(i<=5){
    console.log(i)
    i++
}

//do while loop
//minimum no of iteraction 1
do{
    console.log("hello")
}while (false)


while(false){
    console.log("hi")
}

//infinite loop  


//for of arrays //value
//for in objects //key based on that key we will get the value will be us fir of array

let arr=[1,2,3]
console.log(arr)
for(a of arr){
    console.log(a)
}


//for in
let obj={a:"hello",b:"hi"}
console.log(obj)
for(i in obj){
    console.log(obj[i])
}


