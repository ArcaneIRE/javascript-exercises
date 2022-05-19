const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total += current, 0 );
};

const multiply = function(array) {
  return array.slice(1).reduce((total, current) => total *= current, array[0] );
};

const power = function(a, b) {
  let current = 1;
	for (let i = 0; i < b; i++) {
    current *= a;
  }
  return current; 
};

const factorial = function(a) {
  if (a <= 1) {
    return 1;
  }
  return a * factorial(a-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
