document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);

var batchSize;
batchButtons.innerHTML = '';
function saveBatch(e){
    batchSize = document.getElementById('batchSizeInput').nodeValue;
}

function clearBatch(e){
    batchSize = 0;
}
var tester = document.getElementById('temp').innerHTML;
tester += '<div class = "well">' + '<h6>Batch Left:' + batchSize + '</h6>' + '</div>';
