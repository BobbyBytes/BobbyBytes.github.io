document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);
var tester = document.getElementById('temp').innerHTML;
var batchSize;
batchButtons.innerHTML = '';
function saveBatch(e){
    batchSize = document.getElementById('batchSizeInput').nodeValue;
    tester += '<div class = "well">' + '<h6>Batch Left:' + batchSize + '</h6>' + '</div>';

}

function clearBatch(e){
    batchSize = 0;
}

