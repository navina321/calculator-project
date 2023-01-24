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
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(display2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(display2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(display2);
  } else if (lastOperation === "÷") {
    result = parseFloat(result) / parseFloat(display2);
  }
}; //add event listener for entering numbers


numbers.forEach(function (number) {
  number.addEventListener("click", function (e) {
    //check for multiple decimal entries
    if (e.target.innerText === "." && !hasDecimal) {
      hasDecimal = true;
    } else if (e.target.innerText === "." && hasDecimal) {
      return;
    }

    display2 += e.target.innerText;
    displayTwo.innerText = display2;
  });
}); //add event listener for using operations

operation.forEach(function (operation) {
  operation.addEventListener("click", function (e) {
    if (!display2) result; //allow decimal for 2nd/3rd etc. inputs

    hasDecimal = false;
    var nameOfOperation = e.target.innerText;

    if (display1 && display2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(display2);
    }

    clearVariable(nameOfOperation);
    lastOperation = nameOfOperation;
  });
}); //add event listener for using equals button

equals.addEventListener("click", function () {
  if (!display1 || !display2) return;
  hasDecimal = false;
  mathOperation();
  clearVariable();
  displayTwo.innerText = result;
  display2 = result;
  display1 = "";
}); // event listener for using all clear button

clearAll.addEventListener("click", function () {
  displayOne.innerText = "0";
  displayTwo.innerText = "0";
  display1 = "";
  display2 = "";
}); //event listener for using delete button

deleteLast.addEventListener("click", function () {
  display2 = display2.slice(0, -1);
  displayTwo.innerText = display2;
});