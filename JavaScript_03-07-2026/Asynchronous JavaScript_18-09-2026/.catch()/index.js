// .catch()
// Definition:
// .catch() handles errors when a Promise is rejected.

const promise = new Promise(function (resolve, reject) {

    reject("Something went wrong");

});

promise.catch(function (error) {

    console.log("Error:", error);

});
