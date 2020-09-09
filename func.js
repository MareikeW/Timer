var btnPomodoro = document.getElementById("btn-pomodoro");
const btnShortBreak = document.getElementById("btn-short-break");
const btnLongBreak = document.getElementById("btn-long-break");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");
var displayTime = document.getElementById("display-time");

var endTime;

btnPomodoro.addEventListener("click",function () {
    // Gibt die Zeit an, zu der der Countdown zu Ende sein soll. Hier nach 30 Sekunden.
    // Hier 32, weil es sonst bei 28 Sekunden beginnt zu zählen.
    endTime = new Date(Date.now() + 1000 * 32);
    startCountdown(endTime);
});

btnShortBreak.addEventListener("click", function () {
    endTime = new Date(Date.now() + 1000 * 300);
    startCountdown(endTime);
});

btnLongBreak.addEventListener("click", function() {
    endTime = new Date(Date.now() + 1000 * 600);
    startCountdown(endTime);
});

btnStop.addEventListener("click", function stopCountdown() {
    clearInterval(countdown);
    document.getElementById("display-time").innerHTML = "00:00";
});

function startCountdown(endTime){
    // Updatet die Zeitanzeige jede Sekunde
    var countdown = setInterval(function () {
        // Gibt heute Zeit an
        var currentTime = new Date().getTime();

        // Berechnet übrige Zeit zwischen Startzeit und jetziger Zeit
        var timeLeft = endTime - currentTime;

        // Berechnet die Minuten und Sekunden
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Zeigt Minuten und Sekunden im Browser an
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        displayTime.innerHTML = minutes + ":" + seconds;

        // Stoppt Intervall, wenn die Zeit um ist
        if (timeLeft < 0) {
            clearInterval(countdown);
            document.getElementById("display-time").innerHTML = "00:00";
        } 
    }, 1000);
}
