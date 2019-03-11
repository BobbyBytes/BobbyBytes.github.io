document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);
var tester = document.getElementById('temp');
function saveBatch(e){
    var batchSize = document.getElementById('batchSizeInput').value;
    if (localStorage.getItem('localBS') == null){
        localStorage.setItem('localBS', batchSize);
    }
    else {
        localStorage.setItem('localBS', batchSize);
    }
displayLeft();
}


function clearBatch(e){
    batchSize = x;
}

function displayLeft(e){
    batchSize = localStorage.getItem('localBS');
    tester.innerHTML += '<h2>Batch Left:' + batchSize + '</h2>';
}

function getTotals(e){

}
