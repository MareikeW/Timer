var btnPomodoro = document.getElementById("btn-pomodoro");
const btnShortBreak = document.getElementById("btn-short-break");
const btnLongBreak = document.getElementById("btn-long-break");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");
var displayTime = document.getElementById("display-time");

btnPomodoro.addEventListener("click", function() {
    var duration = 5;
    startTimer(duration);
});

function startTimer(duration) {
    var start = Date.now(),
    difference,
    minutes,
    seconds;

    function timer() {
        difference = duration - (((Date.now() - start) / 1000) | 0);

        minutes = (difference / 60) | 0;
        seconds = (difference % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayTime.textContent = minutes + ":" + seconds;

        if (difference === 0) {
            clearInterval(countdown);
        }
    };
    timer();
    var countdown = setInterval(timer, 1000);
}