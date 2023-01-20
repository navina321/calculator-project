"use strict";

var clickButton = document.querySelector("#clear");

var buttonClicked = function buttonClicked() {
  alert("clicked");
};

clickButton.addEventListener("click", clickButton);