var btnPomodoro = document.getElementById("btn-pomodoro");
const btnShortBreak = document.getElementById("btn-short-break");
const btnLongBreak = document.getElementById("btn-long-break");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
var displayTime = document.getElementById("display-time");

var endTime;
var currentTime;
var timeLeft;
var minutes;
var seconds;

btnPomodoro.addEventListener("click",function () {
    // Gibt die Zeit an, zu der der Countdown zu Ende sein soll. Hier nach 30 Sekunden.
    // Hier 32, weil es sonst bei 28 Sekunden beginnt zu zählen.
    endTime = new Date(Date.now() + 1000 * 302);
    startCountdown(endTime);
});

function startCountdown(endTime){
    // Updatet die Zeitanzeige jede Sekunde
    var countdown = setInterval(function () {
        // Gibt heute Zeit an
        currentTime = new Date().getTime();

        // Berechnet übrige Zeit zwischen Startzeit und jetziger Zeit
        timeLeft = endTime - currentTime;

        // Berechnet die Minuten und Sekunden
        minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Zeigt Minuten und Sekunden im Browser an
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        displayTime.innerHTML = minutes + ":" + seconds;

        // Hält den Countdown an, wenn "Anhalten" geklickt wird
        if (btnStop.addEventListener("click", function () {
            console.log("Minuten: " + parseInt(minutes));
            console.log("Sekunden: " + seconds);
            stopCountdown(countdown, minutes, seconds);
        }));

        if (btnShortBreak.addEventListener("click", function () {
            clearInterval(countdown);
            displayTime.innerHTML = "00:00";
        }));

        if (btnLongBreak.addEventListener("click", function () {
            clearInterval(countdown);
            displayTime.innerHTML = "00:00";
        }));

        // Stoppt Intervall, wenn die Zeit um ist
        if (timeLeft < 0) {
            clearInterval(countdown);
            displayTime.innerHTML = "00:00";
        } 
    }, 1000);   
}

function stopCountdown(countdown, minutes, seconds) {
    clearInterval(countdown);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);
    var newSeconds = (minutes * 60 + seconds + 2)
    console.log(newSeconds);
    if (btnStart.addEventListener("click", function () {
        endTime = new Date (Date.now() + 1000 * newSeconds);
        startCountdown(endTime);
    }));
};


btnShortBreak.addEventListener("click", function () {
    // stoppt Countdown und setzt ihn zurück
    if (btnLongBreak.addEventListener("click", function (countdown) {
        clearInterval(countdown);
    }));

    endTime = new Date(Date.now() + 1000 * 302);
    startCountdown(endTime);
});


btnLongBreak.addEventListener("click", function () {
    if (btnShortBreak.addEventListener("click", function (countdown) {
        clearInterval(countdown);
    }));

    endTime = new Date(Date.now() + 1000 * 602);
    startCountdown(endTime);
});



/* -------------------------------------------------------------------- */

