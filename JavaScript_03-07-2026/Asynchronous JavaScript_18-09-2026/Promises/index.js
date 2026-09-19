// Promise
// Definition:
// A Promise represents the future result
// of an asynchronous operation.

const myPromise = new Promise(function (resolve, reject) {

    let success = true;

    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Task failed");
    }

});

console.log(myPromise);
