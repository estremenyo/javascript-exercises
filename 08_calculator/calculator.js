const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((sum, element) => sum += element, 0);
};

const multiply = function(array) {
  return array.reduce((product, element) => product *= element, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(argument) {
  let factorialSum = 1;
  while (argument > 1) {
    factorialSum = factorialSum * argument;
    argument--;
  }
  return factorialSum;
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
