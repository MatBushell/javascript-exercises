// My solutions:
const convertToCelsius = function(degreesF) {
  let c = (degreesF - 32)*(5/9);
  let cRounded = Number(c.toFixed(2));
  return console.log(cRounded);

  };

const convertToFahrenheit = function(degreesC) {
  let f = (degreesC*(9/5)) + 32;
  let fRounded = Number(f.toFixed(2));
  return console.log(fRounded);
    
};

// TOP Solutions:
// const convertToCelsius = function (fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
// };

// const convertToFahrenheit = function (celsius) {
//   return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
// };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
