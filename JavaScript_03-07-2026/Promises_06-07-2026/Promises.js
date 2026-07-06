//promise is like a guarantee that a task will either complete successfully or fall in the future
 //why do we need to use promises
 //fetching data from an api 
 //reading a file,upload images,downloading a file

 //promise lifecycle
 //pending,resolve,rejected
 //once a promise becomes fulfilled or rejected. its state cannot change again

 let promise=new Promise((resolve, reject)=>{
    let success= false;
       if (success){
    resolve("payment successful")

}else{
    reject('Payment Failed')
} 
})
// console.log(promise)
promise
.then((result)=>{
    console.log(result);

})
.catch((error)=>{
    console.log(error)
})

//async /await
async function check(){
    try{
        const res=await promise;
        console.log(res)

    }
    catch(err){
        console.log(err)
    }
}
check();

//pending resolve/reject
//all
//new promises(()=>{
    //})

let ab=promise.reject("completed")
let ba=promise.resolved("failure")

promise.finally([ab,ba])
.then(()=>{
console.log("Done")
})
.catch(()=>{
    
})