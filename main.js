//mani.js
// KONWERTER TEMPERATUR
function toFahrenheit(degCelsius) {
  return (degCelsius * 9 / 5) + 32;
}

function toCelsius(degFahrenheit) {
  return (degFahrenheit - 32) * 5 / 9;
}

// 'CtoF' LUB 'FtoC'
var conversion = 'CtoF';

var tempAInput = document.querySelector('#tempA');
var swapButton = document.querySelector('#swap');
var tempBInput = document.querySelector('#tempB');

function convertTemp() {
  if (conversion === 'CtoF') {
    var temp = Number(tempAInput.value);
    tempBInput.value = toFahrenheit(temp);
  }

  if (conversion === 'FtoC') {
    var temp = Number(tempAInput.value);
    tempBInput.value = toCelsius(temp);
  }
}

swapButton.addEventListener('click', function () {
  if (conversion === 'CtoF') {
    conversion = 'FtoC';
    tempAInput.previousElementSibling.innerText = 'Fahrenheit';
    tempBInput.previousElementSibling.innerText = 'Celsius';
    convertTemp();
    return;
  }
  
  if (conversion === 'FtoC') {
    conversion = 'CtoF';
    tempAInput.previousElementSibling.innerText = 'Celsius';
    tempBInput.previousElementSibling.innerText = 'Fahrenheit';
    convertTemp();
    return;
  }
});

tempAInput.addEventListener('input', convertTemp);


