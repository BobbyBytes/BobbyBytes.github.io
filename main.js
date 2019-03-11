document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);
var tester = document.getElementById('temp');
var batchSize = document.getElementById('batchSizeInput').value;
function saveBatch(e){
    batchSize = document.getElementById('batchSizeInput').nodeValue;
    getTotals();
    while(batchSize != x){
        displayLeft();
    }
    document.getElementById('batchInputForm').reset();   
    
}

function clearBatch(e){
    batchSize = x;
}

function displayLeft(e){
    tester.innerHTML += '<div class="well">' + '<h6>Batch Left:' + batchSize + '</h6>' + '</div>';
}

function getTotals(e){

}
