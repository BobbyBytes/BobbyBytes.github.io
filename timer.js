document.getElementById('SetTimesForm').addEventListener('submit', startTimer);
document.getElementById('SetTimesForm').addEventListener('reset', clearTimer);

function startTimer(e) {
    var countDownTime = (document.getElementById('heatUpTimeInput').value) * 1000;
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();
        var timeToReach = now + countDownTime
        // Find the distance between now and the count down date
        var distance = timeToReach - now;

        // Time calculations for days, hours, minutes and seconds

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("spaceForTimer").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("spaceForTimer").innerHTML = "Begin Cool Down" + distance;
        }
    }, 1000);
    e.preventDefault();
}
function clearTimer(e) {
    document.getElementById("spaceForTimer").innerHTML = " ";
    e.preventDefault();
}

