// declare variables
const displayOne = document.querySelector(".display-1");
const displayTwo = document.querySelector(".display-2");
const numbers = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
const clearAll = document.querySelector(".all-clear");
const deleteLast = document.querySelector(".delete");
 
let display1 = ""; 
let display2 = "";
let result = null;
let lastOperation = "";
let hasDecimal = false;

//function to clear variable from display2 (move from display2 to 1)
const clearVariable = (nameOfOp) => {
    display1 += display2 + " " + nameOfOp + " ";
    displayOne.innerText = display1
    displayTwo.innerText = "";
    display2 = "";
}

//function for math operations
const mathOperation = () => {
    if (lastOperation === "X") {
        result = parseFloat(result) * parseFloat(display2);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(display2);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(display2);
    } else if (lastOperation === "÷") {
        result = parseFloat(result) / parseFloat(display2);
    } 
};
