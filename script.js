let screenText = document.querySelector("#screenText");
let nums = document.querySelectorAll(".numberKeyText");
let operators = document.querySelectorAll(".operator");

let plus = document.querySelector("#add");
let minus = document.querySelector("#subtract");
let times = document.querySelector("#multiply");
let slash = document.querySelector("#divide");



let inputs = [];

nums.forEach(num => {
    num.addEventListener("click", e => {
        clearBeginningZero();
        screenText.textContent += e.target.textContent.trim();
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

plus.addEventListener("click", () => {
    plus.classList.toggle("highlighted");
    if(isMultipleOperatorsActive()){
        clearAllOperators();
    }
    else{
        inputs.push(screenText.textContent.substring(0, 9));
    }
});
minus.addEventListener("click", () => {
    minus.classList.toggle("highlighted");
    if(isMultipleOperatorsActive()){
        clearAllOperators();
    }
    else{
        inputs.push(screenText.textContent.substring(0, 9));
    }
});
times.addEventListener("click", () => {
    times.classList.toggle("highlighted");
    if(isMultipleOperatorsActive()){
        clearAllOperators();
    }
    else{
        inputs.push(screenText.textContent.substring(0, 9));
    }
});

slash.addEventListener("click", () => {
    slash.classList.toggle("highlighted");
    if(isMultipleOperatorsActive()){
        clearAllOperators();
    }
    else{
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
    document.querySelectorAll(".highlighted").forEach(operator => {
        operator.classList.toggle("highlighted");
    });
    inputs.pop();
}

function clearScreen(){
    screenText.textContent = "0";
}