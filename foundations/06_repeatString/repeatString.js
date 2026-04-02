const repeatString = function(str, n) {
  let string = '';
  for (let i = 0; i < n; i++) {
    string += str;
  }
  return string;
    
};

console.log(repeatString('hey', 12));

// Do not edit below this line
module.exports = repeatString;
