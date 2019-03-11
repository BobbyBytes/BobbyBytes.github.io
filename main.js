document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);
var tester = document.getElementById('temp');
function saveBatch(e){
    var batchSize = document.getElementById('batchSizeInput').value;
    if (localStorage.getItem('localBS') == null){
        var localBS = batchSize;
        localStorage.setItem("localBS", batchSize);
    }
    else {
        var localBS = localStorage.getItem('localBS');
        localBS = batchSize;
        localStorage.setItem('localBS', batchSize);
    }
}


function clearBatch(e){
    batchSize = x;
}

function displayLeft(e){
    tester.innerHTML += '<div class="well">' + '<h6>Batch Left:' + batchSize + '</h6>' + '</div>';
}

function getTotals(e){

}
