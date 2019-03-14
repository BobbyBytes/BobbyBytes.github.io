document.getElementById('batchInputForm').addEventListener('submit', saveBatch);

function saveBatch(e){
    var batchSize = document.getElementById('batchSizeInput').value;
    if (localStorage.getItem('localBS') == null){
        localStorage.setItem('localBS', batchSize);
    }
    else {
        localStorage.setItem('localBS', batchSize);
    }
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
    cakeRemain.innerHTML += '<div class="jumbotron">' + '<h4>Batch Remaining: ' + remain + '</h4>' + '</div>';
}

function makeButtons(bLeft){
    var tester = document.getElementById('temp');
    batchSize = localStorage.getItem('localBS');
    var worksize = batchSize;
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
            tester.innerHTML += '<a href="#" onclick="subAndSum(\''+cakes[i]+'\')" class="btn btn-primary">' + id + '</a> '; 
        }
    }
    //tester.innerHTML += '</div>';
}   // end makeButtons function

function subtractCake(cakeWeight){
    var batch = localStorage.getItem('localBS')
    batch = batch - cakeWeight;
    localStorage.setItem('localBS', batch);
    makeButtons(batch);
    displayLeft(batch);
}

function subAndSum(cakes){
    subtractCake(cakes.weight);
    sumCakes(cakes.id);

}

function sumCakes(sumMe){
    
}