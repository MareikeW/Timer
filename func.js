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

btnPomodoro.addEventListener("click", function startPomodoro() {
    // Gibt die Zeit an, zu der der Countdown zu Ende sein soll. Hier nach 30 Sekunden.
    // Hier 5102, weil es sonst bei 24:28 Sekunden beginnt zu zählen.
    endTime = new Date(Date.now() + 1000 * 5102);
    startCountdown(endTime);
});

function startCountdown(endTime){
    // Updatet die Zeitanzeige jede Sekunde
    var countdown = setInterval(function () {
        // Gibt Zeit an
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
        timerStopEvents(btnStop, btnShortBreak, btnLongBreak, timeLeft, countdown);

    }, 1000);   
}

function timerStopEvents(btnStop, btnShortBreak, btnLongBreak, timeLeft, countdown) {
    
    if (btnStop.addEventListener("click", function () {
        stopCountdown(countdown, minutes, seconds);
    }));

    // Wenn bereits ein Countdown läuft und Pause geklickt wird,
    // wird aktiver Countdown gestoppt und neuer gestartet.
    if (btnShortBreak.addEventListener("click", function () {
        clearInterval(countdown);
    }));

    if (btnLongBreak.addEventListener("click", function () {
        clearInterval(countdown);
    }));
    
    // Stoppt Intervall, wenn die Zeit um ist
    if (timeLeft < 0) {
        clearInterval(countdown);
        displayTime.innerHTML = "00:00";
    } 
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

// Setzen "Kleine Pause" und "Große Pause" auf ihre Startzeit und 
// beginnen den Countdown.
btnShortBreak.addEventListener("click", function startShortBreak() {
    // stoppt Countdown und setzt ihn zurück
    if (btnLongBreak.addEventListener("click", function (countdown) {
        clearInterval(countdown);
    }));

    endTime = new Date(Date.now() + 1000 * 302);
    startCountdown(endTime);
});

btnLongBreak.addEventListener("click", function startLongBreak() {
    if (btnShortBreak.addEventListener("click", function (countdown) {
        clearInterval(countdown);
    }));

    endTime = new Date(Date.now() + 1000 * 602);
    startCountdown(endTime);
});



class Task {
    constructor () {
        this.tasks = [];
        this.id = "";
        this.task = "";

        this.taskSection = document.getElementById("task__section");
        this.currentTask = document.getElementById("current-task");
        this.tasksListSection = document.getElementById("tasks");
        this.taskContent = document.getElementById("task__content");
        this.addTaskBtn = document.getElementById("add-task-btn");
        this.taskDeleteCross = document.getElementsByClassName("task--delete"); 
        
        this.submitTask();
        this.deleteTask();
    }

    submitTask() {
        // Type "click" würde es bei jedem Klick hinzufügen
        this.addTaskBtn = document.addEventListener("submit", event => {
            this.submitNewTask(event);
        });
    }

    deleteTask() {
        this.taskDeleteCross = document.addEventListener("click", event => {
            this.removeTaskFromList(event);
        })
    }

    submitNewTask(event) {
        event.preventDefault();
        const taskContent = this.taskContent.value;

        if (taskContent.length > 0) {
            this.addTask({taskContent})
        }
    }

    addTask({taskContent}) {
        const newTask = {
            taskContent,
            id: this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1
        };
        // Fügt neue Aufgabe ans Ende der Liste
        this.tasks = [...this.tasks, newTask];
        // Löscht Eingabe aus Textfeld
        this.taskContent.value = "";
        this.displayTasks();
    }

    removeTaskFromList(event){
        // Wenn nicht das Kreuz geklickt wurde, return.
        if (!event.target.matches('.task--delete')) return;
        // Speichert die ID von geklickter Aufgabe in Variable
        const id = event.target.dataset.id;
        // Updated task array
        this.tasks = this.tasks.filter(task => task.id !== Number(id));

        this.displayTasks();
    }

    displayTasks() {
        // Zeigt 1. Aufgabe in der Liste über Textfeld an
        this.currentTask.textContent = this.tasks[0].taskContent;

        this.tasksListSection.innerHTML = this.tasks
            .map(
                task => `
                    <div class="new-tasks-item">
                    <p><span class="task--delete" data-id=${task.id}>x</span></p>
                    <p class="task--content">${task.taskContent}</p>
                    </div>
                `
            ).join(""); 
    }
}

new Task();