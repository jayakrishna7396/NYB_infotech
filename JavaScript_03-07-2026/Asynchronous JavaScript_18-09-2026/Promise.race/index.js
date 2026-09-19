// Promise.race()
// Definition:
// Promise.race() runs multiple Promises
// and returns the result of the first Promise that finishes.

const promise1 = new Promise(function (resolve) {

    setTimeout(function () {
        resolve("Task 1 completed");
    }, 3000);

});

const promise2 = new Promise(function (resolve) {

    setTimeout(function () {
        resolve("Task 2 completed");
    }, 1000);

});

const promise3 = new Promise(function (resolve) {

    setTimeout(function () {
        resolve("Task 3 completed");
    }, 2000);

});

Promise.race([promise1, promise2, promise3])
    .then(function (result) {

        console.log(result);

    })
    .catch(function (error) {

        console.log("Error:", error);

    });