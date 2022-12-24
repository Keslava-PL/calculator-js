const display = document.querySelector("#displayInput");
const resetBtn = document.querySelector(".resetBtn");
const spec = document.querySelectorAll(".spec");
const number = document.querySelectorAll(".number");

let value="";
let temp="";

spec.forEach(function(sign){
sign.addEventListener('click', function(){
  clearDisplay();
  doCalc(sign.value);
});
});
number.forEach(function(one){
  one.addEventListener('click', function(){
    value = value + one.value;
    display.value = value;
  });
});

resetBtn.addEventListener('click', clearDisplay);

function clearDisplay(){
  display.value = "";
  value = "";
}
function doCalc(sign){

}