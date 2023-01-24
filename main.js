console.log("Hello");

// declaring variables
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

//add event listener for inputting numbers
numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        //check for multiple decimal entries
        if(e.target.innerText === "." && !hasDecimal){
            hasDecimal = true;
        }else if (e.target.innerText === "." &&hasDecimal) {
            return
        }
        display2 += e.target.innerText;
        displayTwo.innerText = display2
    })
});