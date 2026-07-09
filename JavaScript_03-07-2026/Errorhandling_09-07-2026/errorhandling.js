//error handling

console.log("goodafternoon")




//try and catch
try {
console.log(hai)
} 
catch (error) {
    
}
console.log("hello")


//try and catch
try {
    let a = 10;
    let b = 0;

    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    console.log(a / b);
}
catch (error) {
    console.log("Error:", error.message);
}


//try and catch and finally
try {
    console.log("Program Started");

    let num = undefined;
    console.log(num.toUpperCase());
}
catch (error) {
    console.log("Error:", error.message);
}
finally {
    console.log("Program Finished");
}


//error handling with async/await
function getData() {
    return new Promise((resolve, reject) => {
        let success = false;

        if (success) {
            resolve("Data received");
        } else {
            reject("Server Error");
        }
    });
}

async function fetchData() {
    try {
        let result = await getData();
        console.log(result);
    }
    catch (error) {
        console.log("Error:", error);
    }
}

fetchData();
