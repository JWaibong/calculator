let screenText = document.querySelector("#screenText");
let nums = document.querySelectorAll(".numberKeyText");
let operators = document.querySelectorAll(".operator");
let keys = document.querySelectorAll(".key")

let plus = document.querySelector("#add");
let minus = document.querySelector("#subtract");
let times = document.querySelector("#multiply");
let slash = document.querySelector("#divide");



let inputs = [];
let operator = [];

keys.forEach(key => {
    key.addEventListener("click", () => {
        key.classList.toggle("keyHighlight");
    });
});

nums.forEach(num => {
    num.addEventListener("click", e => {
        clearBeginningZero();
        if(currentOperator.match(/[+-\/\*]/)){
            screenText.textContent = e.target.textContent.trim();
            currentOperator = "";
        }
        else if(screenText.textContent == "Infinity"){
            screenText.textContent = e.target.textContent.trim();
        }
        else{
            screenText.textContent += e.target.textContent.trim();
        }
    });
});

let dot = document.querySelector("#decimal");
dot.addEventListener("click", e => {
    if(screenText.textContent.match(/\.+/)){
        return;
    }
    addBeginningZero();
    screenText.textContent += e.target.textContent.trim();
});


let currentOperator = ""
plus.addEventListener("click", () => {
    plus.classList.toggle("highlighted");
    if(currentOperator == "" && Number(screenText.textContent) && (Number(inputs[0]) != null)){
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("+");
        currentOperator = "+";
        plus.classList.toggle("highlighted");
    }
    else if((Number(inputs[0]) != null) && screenText.textContent == "0"){
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("+");
        currentOperator = "+";
        plus.classList.toggle("highlighted");
    }

    else if(isMultipleOperatorsActive()){
        clearAllOperators();
    } 
    else{
        currentOperator = "+";
        operator.push("+");
        inputs.push(screenText.textContent.substring(0, 9));
    }
});
minus.addEventListener("click", () => {
    minus.classList.toggle("highlighted");
    if(currentOperator == "" && Number(screenText.textContent) && (Number(inputs[0]) != null)){
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("-");
        currentOperator = "-";
        minus.classList.toggle("highlighted");
    }
    else if((Number(inputs[0]) != null) && screenText.textContent == "0"){
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("-");
        currentOperator = "-";
        minus.classList.toggle("highlighted");
    }
    else if(isMultipleOperatorsActive()){
        clearAllOperators();
    } 
    else{
        currentOperator = "-";
        operator.push("-");
        inputs.push(screenText.textContent.substring(0, 9));
    }
});
times.addEventListener("click", () => {
    times.classList.toggle("highlighted");
    if(currentOperator == "" && Number(screenText.textContent) && (Number(inputs[0]) != null)) {
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("\*");
        currentOperator = "\*";
        times.classList.toggle("highlighted");
    }
    else if((Number(inputs[0]) != null) && screenText.textContent == "0"){
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("\*");
        currentOperator = "\*";
        times.classList.toggle("highlighted");
    }
    else if(isMultipleOperatorsActive()){
        clearAllOperators();
    } 
    else{
        currentOperator = "\*";
        operator.push("\*");
        inputs.push(screenText.textContent.substring(0, 9));
    }
});
slash.addEventListener("click", () => {
    slash.classList.toggle("highlighted");
    if(currentOperator == "" && Number(screenText.textContent) && (Number(inputs[0]) != null)){
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("\/");
        currentOperator = "\/";
        slash.classList.toggle("highlighted");
    }
    else if((Number(inputs[0]) != null) && screenText.textContent == "0"){
        evaluate();
        clearAllOperators();
        inputs.push(screenText.textContent.substring(0, 9));
        operator.push("\/");
        currentOperator = "\/";
        slash.classList.toggle("highlighted");
    }
    else if(isMultipleOperatorsActive()){
        clearAllOperators();
    } 
    else{
        currentOperator = "\/";
        operator.push("\/");
        inputs.push(screenText.textContent.substring(0, 9));
    }
});




let ac = document.querySelector("#ac");
ac.addEventListener("click", () => {
    clearScreen();
    clearAllOperators();
    inputs = [];
});

let plusMinus = document.querySelector("#plusMinus");
plusMinus.addEventListener("click", e => {
    screenText.textContent = `${Number(screenText.textContent) * -1}`;
})

let percent = document.querySelector("#percent");
percent.addEventListener("click", e => {
    screenText.textContent = `${Number(screenText.textContent) / 100.0}`;
})

let equals = document.querySelector("#equals");
equals.addEventListener("click", e => {
    clearAllOperatorsWithoutClearingInput();
    evaluate();
    }
);


function addBeginningZero(){
    if(screenText.textContent == ""){
        screenText.textContent = "0";
    }
}
function clearBeginningZero(){
    if(screenText.textContent.match(/^0/) && !screenText.textContent.match(/^0\./)){
        screenText.textContent = "";
    }
}

function isMultipleOperatorsActive(){
    return (document.querySelectorAll(".highlighted").length >= 2);
}
function clearAllOperators(){
    document.querySelectorAll(".highlighted").forEach(op => {
        op.classList.toggle("highlighted");
    });
    currentOperator = "";
    inputs.pop();
}
function clearAllOperatorsWithoutClearingInput(){
    document.querySelectorAll(".highlighted").forEach(op => {
        op.classList.toggle("highlighted");
    });
    currentOperator = "";
}
function clearScreen(){
    screenText.textContent = "0";
}

function evaluate(){
    if(screenText.textContent.match(/\d+/) && operator[0] !== null && Number(inputs[0]) != null){
        switch(operator[0]){
            case "+":
                screenText.textContent = `${Number(screenText.textContent) + Number(inputs[0])}`.substring(0,9);
                inputs.pop();
                operator.pop();
                return;
            case "-":
                screenText.textContent = `${Number(inputs[0]) - Number(screenText.textContent)}`.substring(0,9);
                inputs.pop();
                operator.pop();
                return;
            case "\*":
                screenText.textContent = `${Number(screenText.textContent) * Number(inputs[0])}`.substring(0,9);
                inputs.pop();
                operator.pop();
                return;
            case "\/":
                screenText.textContent = `${Number(inputs[0]) / Number(screenText.textContent) }`.substring(0,9);
                inputs.pop();
                operator.pop();
                return;
        }
}
}