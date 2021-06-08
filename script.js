let screenText = document.querySelector("#screenText");
let nums = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let plus = document.querySelector("#add");
let minus = document.querySelector("#subtract");
let times = document.querySelector("#multiply");
let slash = document.querySelector("#divide");


let inputs = [];

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
    screenText.textContent = "";
}