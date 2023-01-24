"use strict";

console.log("Hello"); // declaring variables

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
var hasDecimal = false;