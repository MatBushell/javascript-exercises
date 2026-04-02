const sumAll = function(a, z) {
// Order the inputs.
    let inputs = [a, z];
    let orderedInputs = inputs.sort((a, b) => a - b);
    // console.log(orderedInputs);

// Extract ordered initial values
    let x = orderedInputs[0];
    let y = orderedInputs[1];

// Create an array to hold all values btw x - y (inclusive). 
    let allValues = [];
    
// Create an array of all the values btw x - y.
    for (x; x <= y; x++) {
        allValues.push(x);
        }

// get the sum of all values btw x - y (inclusive).
    const sumAllValues = allValues.reduce(
        (total, currentValue) => total + currentValue, 0
);
    return sumAllValues;

};

console.log(sumAll(31, 6));


// Do not edit below this line
module.exports = sumAll;
