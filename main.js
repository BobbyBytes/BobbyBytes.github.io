document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);

var batchSize;
function saveBatch(e){
    batchSize = document.getElementById('batchSizeInput').nodeValue;
}

function clearBatch(e){
    batchSize = 0;
}

batchButtons.innerHTML = '';

batchButtons.innerHTML = '<div class = "well">' + '<h6>Batch Left:' + batchSize + '</h6>' + '</div>';