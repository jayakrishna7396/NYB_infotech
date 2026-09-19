// Promise.any()
// Definition:
// Promise.any() returns the first Promise
// that is successfully completed.

const promise1 = new Promise(function (resolve, reject) {

    setTimeout(function () {
        reject("Task 1 failed");
    }, 1000);

});

const promise2 = new Promise(function (resolve) {

    setTimeout(function () {
        resolve("Task 2 completed");
    }, 2000);

});

const promise3 = new Promise(function (resolve) {

    setTimeout(function () {
        resolve("Task 3 completed");
    }, 3000);

});

Promise.any([promise1, promise2, promise3])
    .then(function (result) {

        console.log(result);

    })
    .catch(function (error) {

        console.log("Error:", error);

    });