const reverseString = function(str) {
    let arr = str.split('');
    let reversed = arr.reverse();
    let reversedJoin = reversed.join('');
    console.log(reversedJoin);

};

reverseString('matheW bushelL');

// Do not edit below this line
module.exports = reverseString;
