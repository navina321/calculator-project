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


//add event listener for entering numbers
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

//add event listener for using operations
operation.forEach (operation => {
    operation.addEventListener("click", (e) => {
        if (!display2) result;
        //allow decimal for 2nd/3rd etc. inputs
        hasDecimal = false;

        const nameOfOperation = e.target.innerText;
        if (display1 && display2 && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(display2)
        }
        clearVariable(nameOfOperation);
        lastOperation = nameOfOperation;
    })
})

//add event listener for using equals button
equals.addEventListener("click", () => {
    if(!display1 || !display2) return;
    hasDecimal = false;
    mathOperation();
    clearVariable();
    displayTwo.innerText = result;
    display2 = result;
    display1 = "";
});

// event listener for using all clear button
clearAll.addEventListener("click", () => {
    displayOne.innerText = "0";
    displayTwo.innerText = "0";
    display1 = "";
    display2 = "";
});

//event listener for using delete button
deleteLast.addEventListener("click", () => {
    display2 = display2.slice(0, -1);
    displayTwo.innerText = display2;
})
