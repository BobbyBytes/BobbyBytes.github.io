document.getElementById('SetTimesForm').addEventListener('submit', startTimer);
document.getElementById('SetTimesForm').addEventListener('reset', clearTimer);

function startTimer(e) {
    var x = setInterval(function () {
        var countDownTime = (document.getElementById('heatUpTimeInput').value) * 1000;
        // Get today's date and time
        var now = new Date().getTime();
        var timeToReach = now + countDownTime
        // Find the distance between now and the count down date
        var distance = timeToReach - countDownTime;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("spaceForTimer").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("spaceForTimer").innerHTML = "Begin Cool Down";
        }
    }, 1000);
    e.preventDefault();
}
function clearTimer(e) {
    document.getElementById("spaceForTimer").innerHTML = "";
    e.preventDefault();
}

