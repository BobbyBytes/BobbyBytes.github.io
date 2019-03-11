document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);
var tester = document.getElementById('temp');
var batchSize;
batchButtons.innerHTML = '';
function saveBatch(e){
    batchSize = document.getElementById('batchSizeInput').nodeValue;
    tester.innerHTML += '<div class="well">' + '<h6>Batch Left:' + batchSize + '</h6>' + '</div>';

    displayLeft();
}

function clearBatch(e){
    batchSize = 0;
}

function displayLeft(e){
    tester.innerHTML += '<div class="well">' + '<h6>Batch Left:' + batchSize + '</h6>' + '</div>';
}