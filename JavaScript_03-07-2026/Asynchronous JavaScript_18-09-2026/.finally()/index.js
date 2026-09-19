// .finally()
// Definition:
// .finally() runs whether the Promise
// is successful or rejected.

const promise = new Promise(function (resolve, reject) {

    resolve("Task completed successfully");

});

promise
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("Promise completed");
    });
