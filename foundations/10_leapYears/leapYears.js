const leapYears = function(year) {
  let isLeapYear = true;
  let divisibleByFour = year % 4 === 0; // Must be true
  let divisibleByOneHundred = year % 100 === 0; // Must be false
  let divisibleByFourHundred = year % 400 === 0; // Must be true

  if (divisibleByFour || (!divisibleByOneHundred && divisibleByFourHundred)) {
    return isLeapYear;
    } else {
        return !isLeapYear;
    }

};

leapYears(1901);



// Do not edit below this line
module.exports = leapYears;
