

const input = document.getElementById("seconds");
const timer = document.getElementById("timer");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let interval;
let timeLeft = 0;

// Start Timer
startBtn.addEventListener("click", function(){

    if(interval){
        clearInterval(interval);
    }

    timeLeft = Number(input.value);

    if(timeLeft <= 0){
        alert("Enter a valid number");
        return;
    }

    timer.textContent = timeLeft;

    interval = setInterval(function(){

        timeLeft--;

        timer.textContent = timeLeft;

        if(timeLeft <= 0){

            clearInterval(interval);

            timer.textContent = "Time's Up!";

        }

    },1000);

});


// Stop Timer
stopBtn.addEventListener("click", function(){

    clearInterval(interval);

});


// Reset Timer
resetBtn.addEventListener("click", function(){

    clearInterval(interval);

    timeLeft = 0;

    input.value = "";

    timer.textContent = "0";

});


//click start
setInterval(function(){

    timeLeft--;

    timer.textContent = timeLeft;

},1000);

//click stop
clearInterval(interval);


//click reset
timeLeft = 0;
timer.textContent = "0";
input.value = "";

