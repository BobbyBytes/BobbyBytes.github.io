document.getElementById('SetTimesForm').addEventListener('submit', startHeatUpTimer);
document.getElementById('SetTimesForm').addEventListener('reset', clearTimer);


var cancelSignalActive = false;

function startHeatUpTimer(e) {
    sound = new Audio();
    var countDownTime = (document.getElementById('heatUpTimeInput').value) * 1000;
    var nowOutside = new Date().getTime();
    var timeToReach = nowOutside + countDownTime
    var x = setInterval(function () {
        if (cancelSignalActive) {
            cancelSignalActive = false;
            clearInterval(x);
            return;
        }
        // Get today's date and time
        var nowInside = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = timeToReach - nowInside;

        // Time calculations for days, hours, minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("spaceForTimer").innerHTML = "Heat Up.. " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x); 
            document.getElementById("spaceForTimer").innerHTML = "Begin Cool Down";
            startCoolDownTimer();          
        }
    }, 100);
    e.preventDefault();
}

function startCoolDownTimer() {
    var countDownTime = (document.getElementById('CoolDownTimeInput').value) * 1000;
    var nowOutside = new Date().getTime();
    var timeToReach = nowOutside + countDownTime
    var x = setInterval(function () {
        if (cancelSignalActive) {
            clearInterval(x);
            cancelSignalActive = false;
            return;
        }
        // Get today's date and time
        var nowInside = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = timeToReach - nowInside;

        // Time calculations for days, hours, minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("spaceForTimer").innerHTML = "Cooling Down.. " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            document.getElementById("spaceForTimer").innerHTML = "Time's Up Partner ;)";
            clearInterval(x);
            setTimeout(function () {
            }, 500);
        }
    }, 100);
}

function clearTimer(e) {
    document.getElementById("spaceForTimer").innerHTML = " ";
    cancelSignalActive = true
    e.preventDefault();
}