document.getElementById('batchInputForm').addEventListener('submit', saveBatch);

function saveBatch(e){
    var batchSize = document.getElementById('batchSizeInput').value;
    if (localStorage.getItem('localBS') == null){
        localStorage.setItem('localBS', batchSize);
    }
    else {
        localStorage.setItem('localBS', batchSize);
    }
var sixes = 0;
var sevens = 0;
var eights = 0;
var nines = 0;
var tens = 0;
localStorage.setItem('localSixes', sixes);
localStorage.setItem('localSevens', sevens);
localStorage.setItem('localEights', eights);
localStorage.setItem('localNines', nines);
localStorage.setItem('localTens', tens);
displayLeft(batchSize);
makeButtons(batchSize);
e.preventDefault();
}

function clearBatch(e){
    var tester = document.getElementById('temp');
    var cakeRemain = document.getElementById('cakesRemaining');
    batchSize = 0;
    tester.innerHTML = '';
    cakeRemain.innerHTML = '';
    e.preventDefault();

}

function displayLeft(remain){
    var cakeRemain = document.getElementById('cakesRemaining');
    var mySixes = localStorage.getItem('localSixes');
    var mySevens = localStorage.getItem('localSevens');
    var myEights = localStorage.getItem('localEights');
    var myNines = localStorage.getItem('localNines');
    var myTens = localStorage.getItem('localTens');
    cakeRemain.innerHTML = '<div class="jumbotron">' + ' 6in: ' + mySixes +'<br>'+ ' 7in: ' + mySevens + '<br>' +' 8in: ' + myEights + '<br>' + '9in: '+ myNines + '<br>' + '10in: ' + myTens + '<h4>Batch Remaining: ' + remain + '</h4>' + '</div>';
}

function makeButtons(bLeft){
    var tester = document.getElementById('temp');
    batchSize = localStorage.getItem('localBS');
    var tenin = {
        id: 10,
        weight: 29.5
    }
    var ninein = {
        id: 9,
        weight: 19.5
    }
    var eightin = {
        id: 8,
        weight: 11.6
    }
    var sevenin = {
        id: 7,
        weight: 10.0
    }
    var sixin = {
        id: 6,
        weight: 5.1
    }
    tester.innerHTML = '';
    var cakes =[tenin, ninein, eightin, sevenin, sixin];
    //tester.innerHTML += '<div class="jumbotron">';
    for (i=0; i<5; i++){
        if (bLeft > cakes[i].weight){
            var weight = cakes[i].weight;
            var id = cakes[i].id;
            tester.innerHTML += '<a href="#" onclick="subAndSum(\'' +weight + '\',\'' + id +' \')" class="btn btn-primary">' + id + '</a> '; 
        }
    }
    //tester.innerHTML += '</div>';
}   // end makeButtons function
function subAndSum(weighty, idy){
    subtractCake(weighty);
    sumCakes(idy);
}

function subtractCake(cakeWeight){
    var batch = localStorage.getItem('localBS')
    batch = batch - cakeWeight;
    localStorage.setItem('localBS', batch);

}

function sumCakes(sumME){
    var batch = localStorage.getItem('localBS');
    
    
        if(sumME == 6){
            var mySixes = localStorage.getItem('localSixes');
            mySixes ++;
            localStorage.setItem('localSixes', mySixes);
        }
        if(sumME == 7){
            var mySevens = localStorage.getItem('localSevens');
            mySevens++;
            localStorage.setItem('localSevens', mySevens);
        }
        if(sumME == 8){
            var myEights = localStorage.getItem('localEights');
            myEights++;
            localStorage.setItem('localEights', myEights);
        }
        if(sumME == 9){
            var myNines = localStorage.getItem('localNines');
            myNines++;
            localStorage.setItem('localNines', myNines);
        }
        if(sumME == 10){
            var myTens = localStorage.getItem('localTens');
            myTens++;
            localStorage.setItem('localTens', myTens);
        }
 
       
    makeButtons(batch);
    displayLeft(batch);
}

function sumThemUp(a,b,c,d,e,f){

}