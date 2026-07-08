//DESTRUCTING
//destructing multiple time is used for destructing
//destructing we use square bases
//before destructuring
var c=[2,3,4,5,90,70,[89,90]]
console.log(c[0])
console.log(c[1])
//after destructuring
var [a,b,c,d,e,f,[r,u]]=c
console.log(a)
console.log(c)
console.log(b)
console.log(d)
console.log(e)
console.log(f)
console.log(r)
console.log(u)

// let B=["krishna",2,3,4,5]
// let [A,B,C]=B
// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(A,B,C)

let a=[A,B,c]
console.log(a)
let d=[A,B,c]
let [a,b,c]=d
console.log(a.next())
let b=["jaya",9,8,7]
let [A,B,c]=b
console.log(b[0])

// object destructing
//object also used for multiple times 
//object we use curvele bases
let obj={name:"krishna",location:"rjy"}
console.log(obj.name)
var m=obj.name
console.log(m)


//iterators and generators
//iterators operater calls step by step 
//iterators is used to get the arrays value get one by one 
//iterators is used for manual call step by step
//for in--key  
//for of--values

let num=[1,2,3]
let k=num[Symbol.iterator]()
console.log(k.next())
console.log(k.next())
console.log(k.next())
console.log(k.next())

//generators
// function hi(){
// console.log("hello")
// return"done"
// console.log("bye")
// }
// console.log(hai())


// function hi() {
//     console.log("hello");
//     return "done";
//     console.log("bye");
// }

// console.log(hi());

function hi(){
    console.log("hello")
    
    console.log("bye")
    return"done"
}
console.log(hi())

//generator
function* hai(){
yield 20
yield 30
yield 50
}
let n=hai()
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(n.next())
console.log(hai())
for(let hello of hai() ){
    console.log(hello)
}