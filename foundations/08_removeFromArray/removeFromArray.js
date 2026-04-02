const removeFromArray = function(arr, ...toRemove) {
    let filtered = [];
    for (let i of arr) {
        if (!toRemove.includes(i)) {
            filtered.push(i);
        }
    }

    console.log(filtered);
    
};




let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

removeFromArray(arr, 3, 9, 1);

// Do not edit below this line
module.exports = removeFromArray;
