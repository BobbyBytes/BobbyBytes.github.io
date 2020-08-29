document.getElementById('SetTimesForm').addEventListener('submit', startHeatUpTimer);
document.getElementById('SetTimesForm').addEventListener('reset', clearTimer);


var cancelSignalActive = false;
doSomeGradient();
function startHeatUpTimer(e) {
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
            document.getElementById("jumbo").style.background = 'red';
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
    document.getElementById("spaceForTimer").innerHTML = "Ready..";
    cancelSignalActive = true
    document.getElementById("jumbo").style.background = "#e9ecef";
    e.preventDefault();
}

function doSomeGradient(){
    var canvas = document.getElementById("canvas");  

    if (canvas.getContext)   
        {  
        fitToContainer(canvas);
        // var ctx = canvas.getContext("2d");         
        // var gradient = ctx.createLinearGradient(10, 90, 00, 90);
        // gradient.addColorStop(0, 'black');
        // gradient.addColorStop(1, 'white');
        // ctx.fillStyle = gradient;
        // ctx.fillRect(10, 10, 200, 250);             
         }
}
function fitToContainer(canvas){
    // Make it visually fill the positioned parent    
    canvas.style.width ='100%';
    canvas.style.height='30px';
    // ...then set the internal size to match
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    canvas.style.background = 'grey';
  }
