function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    console.log("Start");

    const result = await getData();

    console.log(result);

    console.log("End");
}

showData();