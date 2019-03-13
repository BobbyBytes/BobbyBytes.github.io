document.getElementById('batchInputForm').addEventListener('submit', saveBatch);

function saveBatch(e){
    var batchSize = document.getElementById('batchSizeInput').value;
    if (localStorage.getItem('localBS') == null){
        localStorage.setItem('localBS', batchSize);
    }
    else {
        localStorage.setItem('localBS', batchSize);
    }
makeBttons(batchSize);
displayLeft();
e.preventDefault();
}


function clearBatch(e){
    var tester = document.getElementById('temp');
    batchSize = 0;
    tester.innerHTML = '';
    e.preventDefault();

}

function displayLeft(e){
    var tester = document.getElementById('temp');
    batchSize = localStorage.getItem('localBS');
    tester.innerHTML += '<div class="jumbotron">' + '<h2>Batch Left: ' + batchSize + '</h2>' +
    '<a href="#" onclick="clearBatch()" class="btn btn-primary">6in</a> ' + '</div>';
}

function getTotals(e){

}

function makeBttons(bLeft){
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

    var cakes =[tenin, ninein, eightin, sevenin, sixin];

    for (i=0; i<6; i++){
        if (bLeft > cakes[i].weight){
            var id = cakes[i].id;
            var weight = cakes[i].weight;
            tester.innerHTML += '<div class="jumbotron">' + '<h2>Batch Left: ' + batchSize + '</h2>' +
    '<a href="#" onclick="clearBatch()" class="btn btn-primary">' + id + '</a> ' + '</div>';
        }
    }

}