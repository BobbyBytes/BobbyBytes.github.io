document.getElementById('batchInputForm').addEventListener('submit', saveBatch);
document.getElementById('batchInputForm').addEventListener('clear', clearBatch);

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
    batchSize = 0;
    tester.innerHTML = '';
}

function displayLeft(e){
    var tester = document.getElementById('temp');
    batchSize = localStorage.getItem('localBS');
    tester.innerHTML += '<h2>Batch Left:' + batchSize + '</h2>';
}

function getTotals(e){

}
