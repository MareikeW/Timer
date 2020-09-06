const btnPomodoro = document.getElementById("btn-pomodoro");
const btnShortBreak = document.getElementById("btn-short-break");
const btnLongBreak = document.getElementById("btn-long-break");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");
const displayTime = document.getElementById("display-time");

var minute = 1;
var second = 59;
var countdown;

btnPomodoro.addEventListener("click", function setTimeDisplay() {
    countdown = setInterval(startCountdown, 100);
});


    
function startCountdown() {
    displayTime.innerHTML = minute + ":" + second;
    second--;

    if (second === 0) {
        minute--;
        second = 59;
    }
    else if (minute === 0 && second === 0) {
        resetTimeDisplay();              
    }
};

function resetTimeDisplay() {
    clearInterval(countdown);  
}

