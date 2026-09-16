const url = "https://jsonplaceholder.typicode.com/posts";

const result = document.getElementById("result");
const loading = document.getElementById("loading");
const error = document.getElementById("error");


// Common function
function showLoading() {
    loading.innerText = "Loading...";
    error.innerText = "";
    result.innerText = "";
}

function hideLoading() {
    loading.innerText = "";
}


// ====================================
// 1. GET REQUEST
// ====================================

async function getData() {

    showLoading();

    try {

        const response = await fetch(url);

        // Response checking
        if (!response.ok) {
            throw new Error("Failed to get data");
        }

        // JSON Data
        const data = await response.json();

        result.innerText = JSON.stringify(data.slice(0, 5), null, 2);

    } catch (err) {

        error.innerText = err.message;

    } finally {

        hideLoading();
    }
}


// ====================================
// 2. POST REQUEST
// ====================================

async function postData() {

    showLoading();

    try {

        const response = await fetch(url, {

            method: "POST",

            // Headers
            headers: {
                "Content-Type": "application/json"
            },

            // JSON Data
            body: JSON.stringify({
                title: "New Post",
                body: "Hello JavaScript",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error("POST request failed");
        }

        const data = await response.json();

        result.innerText = JSON.stringify(data, null, 2);

    } catch (err) {

        error.innerText = err.message;

    } finally {

        hideLoading();
    }
}


// ====================================
// 3. PUT REQUEST
// ====================================

async function putData() {

    showLoading();

    try {

        const response = await fetch(`${url}/1`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                id: 1,
                title: "Updated Title",
                body: "Updated complete post",
                userId: 1
            })
        });

        if (!response.ok) {
            throw new Error("PUT request failed");
        }

        const data = await response.json();

        result.innerText = JSON.stringify(data, null, 2);

    } catch (err) {

        error.innerText = err.message;

    } finally {

        hideLoading();
    }
}


// ====================================
// 4. PATCH REQUEST
// ====================================

async function patchData() {

    showLoading();

    try {

        const response = await fetch(`${url}/1`, {

            method: "PATCH",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title: "Only Title Updated"
            })
        });

        if (!response.ok) {
            throw new Error("PATCH request failed");
        }

        const data = await response.json();

        result.innerText = JSON.stringify(data, null, 2);

    } catch (err) {

        error.innerText = err.message;

    } finally {

        hideLoading();
    }
}


// ====================================
// 5. DELETE REQUEST
// ====================================

async function deleteData() {

    showLoading();

    try {

        const response = await fetch(`${url}/1`, {

            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("DELETE request failed");
        }

        result.innerText = "Post deleted successfully";

    } catch (err) {

        error.innerText = err.message;

    } finally {

        hideLoading();
    }
}