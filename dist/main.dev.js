"use strict";

// declare variables
var displayOne = document.querySelector(".display-1");
var displayTwo = document.querySelector(".display-2");
var numbers = document.querySelectorAll(".number");
var operation = document.querySelectorAll(".operator");
var equals = document.querySelector(".equal");
var clearAll = document.querySelector(".all-clear");
var deleteLast = document.querySelector(".delete");
var display1 = "";
var display2 = "";
var result = null;
var lastOperation = "";
var hasDecimal = false; //function to clear variable from display2 (move from display2 to 1)

var clearVariable = function clearVariable(nameOfOp) {
  display1 += display2 + " " + nameOfOp + " ";
  displayOne.innerText = display1;
  displayTwo.innerText = "";
  display2 = "";
}; //function for math operations


var mathOperation = function mathOperation() {
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