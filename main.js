const display = document.querySelector("#displayInput");
const resetBtn = document.querySelector(".resetBtn");
const spec = document.querySelectorAll(".spec");
const number = document.querySelectorAll(".number");
const equalSign = document.querySelector(".specEq");

//global variables
let previousNumber = "";
let currentNumber = "";
let displayNumber = "";
let operationSign = "";

//event listener to operational buttons
spec.forEach(function (par) {
  par.addEventListener("click", function () {
    operationSign = par.value;

    verify();
  });
});
//event listener to number buttons
number.forEach(function (one) {
  one.addEventListener("click", function () {
    display.value = display.value + one.value;
    currentNumber = display.value;
  });
});

function verify() {
  if (previousNumber === "" && displayNumber === "") {
    
    previousNumber = currentNumber;
    clearDisplay();
  } else if (
    previousNumber !== "" &&
    displayNumber === "" &&
    currentNumber !== ""
  ) {
    
    doCalc(previousNumber, currentNumber, operationSign);
  } else if (
    previousNumber != "" &&
    currentNumber != "" &&
    displayNumber != ""
  ) {
    
    //jezeli mam juz cur i prev i disp, nalezy wyczyscic display i ponowic dzialanie z nowo przyjetym curr
    previousNumber = displayNumber;
    clearDisplay();
  } else if (
    previousNumber !== "" &&
    currentNumber === "" && displayNumber === ""
  ) {
    console.log('tt');
    clearDisplay();
  } 
  
}
function stan() {
  console.log(
    "prev:",
    previousNumber,
    "cur:",
    currentNumber,
    "disp:",
    displayNumber
  );
}
function doCalc(pre, cur, sign) {
  if (sign === "+") {
    displayNumber = add(Number(pre), Number(cur));
  } else if (sign === "-") {
    displayNumber = sub(Number(pre), Number(cur));
  } else if (sign === "/") {
    displayNumber = div(Number(pre), Number(cur));
  } else if (sign === "x") {
    displayNumber = mul(Number(pre), Number(cur));
  }
  console.log(previousNumber, currentNumber, displayNumber);

  display.value = displayNumber;
  previousNumber = displayNumber;
  displayNumber = "";
  currentNumber = "";
}
//event listener to equal button
equalSign.addEventListener("click", verify);

//event listener to Clear button
resetBtn.addEventListener("click", function () {
  previousNumber = "";
  currentNumber = "";
  displayNumber = "";
  operationSign = "";
  clearDisplay();
});

//
function clearDisplay() {
  display.value = "";

  currentNumber = "";
  displayNumber = "";
}

function add(value1, value2) {
  return value1 + value2;
}
function mul(value1, value2) {
  return value1 * value2;
}
function div(value1, value2) {
  return value1 / value2;
}
function sub(value1, value2) {
  return value1 - value2;
}
