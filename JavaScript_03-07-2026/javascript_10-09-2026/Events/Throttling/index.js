let canRun = true;

window.addEventListener("scroll", function () {

    if (canRun) {

        console.log("Scroll event");

        canRun = false;

        setTimeout(function () {
            canRun = true;
        }, 500);
    }

});