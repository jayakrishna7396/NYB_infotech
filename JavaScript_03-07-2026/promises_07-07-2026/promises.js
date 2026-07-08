//pending resolve/reject

//all   //promise.all() is a JavaScript method that runs multiple promises at the same time and returns a single promise.
//new promises(()=>{
//})
//
let ab=Promise.resolve("p1 completed")
let ba=Promise.reject("p2 failed")
Promise.all([ab,ba])
.then(()=>{
console.log("Done")
})
.catch((a)=>{
console.log(a)
})


//promise.race()
//Promise.race() is a JavaScript method that takes multiple promises and returns a single promise.
// The returned promise settles (resolves or rejects) as soon as the first promise settles.
// It does not wait for the other promises to finish.

// let pa=Promise.resolve("p1 done")
// let pb=Promise.reject("p2 done")

let pa=new Promise((resolve,reject) => {
setTimeout(() => {
resolve("pa is done")    
},1000);    
})

let pb=new Promise((resolve) => {
setTimeout(()=>{
resolve("pb is done")    
},500)    
})
Promise.race([pa,pb])
.then((k)=>{
console.log(k)
})
.catch((pa)=>{
console.log(pa)
})

//promise.allsettled()
//Promise.allSettled() is a JavaScript method that runs multiple promises at the same time and waits until all promises have finished, whether they are resolved or rejected.
Promise.allSettled([pa,pb])
.then((a)=>{
console.log(a)
})

//promises.any()
// Promise.any([pa,pb])
// .then((a)=>{
// console.log(a)
// })
Promise.any([pa, pb])
.then((a) => {
    console.log(a);
});
//async and await
async function hi(){

}
