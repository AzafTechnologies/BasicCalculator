// Access the display DOM element
const displayLabel = document.getElementById('display-label');


// State Variables exactly mapping your Java attributes
let isOperatorClicked = false;
let whichOperatorClicked = "";
let oldValue = "";
let value = "";

function pressNumber(num) {
    if (isOperatorClicked) {
        displayLabel.innerText = num;
        isOperatorClicked = false;
    } else {
        // Appends the number safely to the display string
        displayLabel.innerText = displayLabel.innerText + num;
    }
}

function setOperator(op) {
    whichOperatorClicked = op;
    isOperatorClicked = true;
    oldValue = displayLabel.innerText;
}

function pressClear() {
    displayLabel.innerText = "";
}

function pressSquare() {
    value = displayLabel.innerText;
    if(value !== "") {
        let valueF = parseFloat(value);
        let result = valueF * valueF;
        displayLabel.innerText = result;
        isOperatorClicked = true;
    }
}

function pressCube() {
    value = displayLabel.innerText;
    if(value !== "") {
        let valueF = parseFloat(value);
        let result = valueF * valueF * valueF;
        displayLabel.innerText = result;
        isOperatorClicked = true;
    }
}

function pressEqual() {
    let newValue = displayLabel.innerText;
    
    if (oldValue === "" || newValue === "") return;

    let oldValueF = parseFloat(oldValue);
    let newValueF = parseFloat(newValue);
    let result = 0;

    if (whichOperatorClicked === "add") {
        result = oldValueF + newValueF;
    } else if (whichOperatorClicked === "sub") {
        result = oldValueF - newValueF;
    } else if (whichOperatorClicked === "divi") {
        result = oldValueF / newValueF;
    } else if (whichOperatorClicked === "multi") {
        result = oldValueF * newValueF;
    } else if (whichOperatorClicked === "modulas") {
        result = oldValueF % newValueF;
    }

    displayLabel.innerText = result;
    // Reset state values
    oldValue = "";
    whichOperatorClicked = "";
}
