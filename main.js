document.getElementById('batchInputForm').addEventListener('submit', saveBatch);

function saveBatch(e){
    var batchSize = document.getElementById('batchSizeInput').value;
    if (localStorage.getItem('localBS') == null){
        localStorage.setItem('localBS', batchSize);
    }
    else {
        localStorage.setItem('localBS', batchSize);
    }
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
