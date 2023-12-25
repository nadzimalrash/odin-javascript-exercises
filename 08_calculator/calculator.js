const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce(add, 0);
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b);
};

const power = function(a ,b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0 || a === 1) {
    return 1;
  }
  else {
    for (i = (a-1); i > 0; i--) {
      a = a * i;
    }
  }
  return a;
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
