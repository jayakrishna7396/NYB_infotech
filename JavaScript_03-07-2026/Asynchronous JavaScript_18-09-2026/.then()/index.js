// .then()
// Definition:
// .then() executes when a Promise is successful.

const promise = new Promise(function (resolve, reject) {

    resolve("Task completed successfully");

});

promise.then(function (result) {

    console.log(result);

});
