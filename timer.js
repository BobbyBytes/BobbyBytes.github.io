document.getElementById('SetTimesForm').addEventListener('submit', startHeatUpTimer);
document.getElementById('SetTimesForm').addEventListener('reset', clearTimer);

var canvas = document.getElementById("canvas");  
var cancelSignalActive = false;
//Fit canvas to container
fitToContainer(canvas);
//Make sure gradient is empty
doHeatUpGradient(canvas, 0);


function startHeatUpTimer(e) {
    document.getElementById("startButton").disabled = true;
    var countDownTime = (document.getElementById('heatUpTimeInput').value) * 1000;
    var nowOutside = new Date().getTime();
    var timeToReach = nowOutside + countDownTime
    cancelSignalActive = false;
    var x = setInterval(function () {
        if (cancelSignalActive) {
            cancelSignalActive = false;
            document.getElementById("startButton").disabled = false;
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

        var totalSecondsLeft = distance / 1000;
        var percentageDone = 1 - (totalSecondsLeft / (countDownTime /1000))
        doHeatUpGradient(canvas, percentageDone); 
        //alert("seconds left" + totalSecondsLeft + "count dow time" + countDownTime +"percent"+ percentageDone);
        // Display the result in the element with id="demo"
        document.getElementById("spaceForTimer").innerHTML = "Heat Up.. " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x); 
            document.getElementById("spaceForTimer").innerHTML = "Begin Cool Down";
            document.getElementById("jumbo").style.webkitTransition = 'background-color 1.0s ease'
            document.getElementById("jumbo").style.background = 'orange';              
            startCoolDownTimer();          
        }
    }, 100);
    e.preventDefault();

}

function startCoolDownTimer() {
    clearMyCanvas(canvas)
    setTimeout(function () {
        document.getElementById("jumbo").style.background = "#e9ecef";
    }, 500);
    
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
        var totalSecondsLeft = distance / 1000;
        var percentageDone = 1 - (totalSecondsLeft / (countDownTime /1000))
        doCoolDownGradient(canvas, percentageDone); 
        // If the count down is finished, write some text
        if (distance < 0) {
            document.getElementById("spaceForTimer").innerHTML = "Time's Up Partner ;)";
            clearInterval(x);
            document.getElementById("jumbo").style.background = "orange";
            setTimeout(function () {
                document.getElementById("jumbo").style.background = "#e9ecef";
                setTimeout(function () {
                    document.getElementById("jumbo").style.background = "orange";
                    setTimeout(function () {
                        document.getElementById("jumbo").style.background = "#e9ecef";
                        setTimeout(function () {
                            document.getElementById("jumbo").style.background = "orange";
                            setTimeout(function () {
                                document.getElementById("jumbo").style.background = "#e9ecef";
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
            runningCountdown = false;
            document.getElementById("startButton").disabled = false;
        }
    }, 100);
}

function clearTimer(e) {  
    document.getElementById("spaceForTimer").innerHTML = "Ready..";
    cancelSignalActive = true;
    runningCountdown = false;
    document.getElementById("jumbo").style.background = "#e9ecef";
    clearMyCanvas(canvas);
    document.getElementById("startButton").disabled = false;
    e.preventDefault();
}

function doHeatUpGradient(canvas, percent){

    if (canvas.getContext)   
        {  
        var ctx = canvas.getContext("2d");         
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'blue');
        gradient.addColorStop(1, 'red');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, (percent * canvas.width), canvas.height);             
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

  function clearMyCanvas(canvas){

    if (canvas.getContext)   
        {  
        var ctx = canvas.getContext("2d");         
            ctx.clearRect(0,0,canvas.width, canvas.height)
         }
}

function doCoolDownGradient(canvas, percent){

    if (canvas.getContext)   
        {  
        var ctx = canvas.getContext("2d");         
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(1, 'green');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, (percent * canvas.width), canvas.height);             
         }
}