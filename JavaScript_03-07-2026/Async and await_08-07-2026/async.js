//async and await

function hai(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        resolve("Done")
    },2000);
    })
}

async function hello1(){
return await hai()
}

let s= hello1()
console.log(s)

// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// async function displayData() {
//     console.log("Loading...");

//     let result = await getData();
//     console.log(result);
// }
// displayData();





