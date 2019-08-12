// No.51
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// eg:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

// My_answer
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

// Best_answer
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


// No.52
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// My_answer
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// Best_answer
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// No.53
// Create a function named divisors / Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest.
// If the number is prime return the string '(integer) is prime'.
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// My_answer
function divisors(integer) {
  let results = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      results.push(i);
    }
  }
  return results.length ? results : `${integer} is prime`;
};

// Best_asnwer
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};