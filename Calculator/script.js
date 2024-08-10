
let displayValue = '';
let count = true;

function appendValue(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function appendFullStop(value) {
    if (count) {
        displayValue += value;
        document.getElementById('display').value = displayValue;
        count = false;
    }
}

function clearDisplay(){
    displayValue = "";
    document.getElementById('display').value = "";
}

function oneBack() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculate(){
    try{
        displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
    }
    catch (error){
        document.getElementById('display').value = 'ERROR';
    }
}