const fibonacci = function(int) {
    const arr = [0, 1];
    for(let i = 0; i < int; i++){
    const first = arr.at(i);
    const second = arr.at(-1);
    arr.push(first + second);
  }
  return arr.at(int);
};


// Do not edit below this line
module.exports = fibonacci;
