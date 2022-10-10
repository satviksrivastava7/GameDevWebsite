// stopwatch code

let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startBtn.addEventListener("click", function() {
    timer = true;
    startTimer();
});

stopBtn.addEventListener("click", function() {
    timer = false;
});

resetBtn.addEventListener("click", function() {
    timer = false;
    hour = 00;
    minute = 00;
    second = 00;
    count = 00;
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
});

function startTimer() {
    if (timer == true) {
        count = count + 1;
        if (count == 100) {
            second = second + 1;
            count = 00;
        }
        if (second == 60) {
            minute = minute + 1;
            second = 00;
        }
        if (minute == 60) {
            hour = hour + 1;
            minute = 00;
            second = 00;
        }

        let hourString = hour;
        let minuteString = minute;
        let secondString = second;
        let countString = count;

        if (hour < 10) {
            hourString = "0" + hourString;
        }
        if (minute < 10) {
            minuteString = "0" + minuteString;
        }
        if (second < 10) {
            secondString = "0" + secondString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById("hour").innerHTML = hourString;
        document.getElementById("minutes").innerHTML = minuteString;
        document.getElementById("seconds").innerHTML = secondString;
        document.getElementById("count").innerHTML = countString;
        setTimeout("startTimer()", 10);
    }
}