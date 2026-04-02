const palindromes = function (str) {
    const lowerCaseStr = str.toLowerCase();
    const arr = Array.from(lowerCaseStr);
    const letters = arr.filter(i => /[a-z0-9]/i.test(i));
    console.log(letters);
    const lettersReversed = letters.toReversed() ;
    const areSame = letters.every((value, index) => value === lettersReversed[index]);
    return areSame;

};

// Do not edit below this line
module.exports = palindromes;
