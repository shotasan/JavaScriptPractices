// No.71
// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.

// My_answer
function findLongest(array) {
  let lengthOfInt = array.map(i => i.toString().length);
  let maxLength = Math.max(...lengthOfInt);
  let maxLengthIndex = lengthOfInt.indexOf(maxLength);
  return array[maxLengthIndex];
}

// Best_answer
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);


// No.72
// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots.i.e.
// 1st(1)   2nd(3)    3rd(6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number.You should return 0 for out of range values:
// triangular(0) == 0,
// triangular(2) == 3,
// triangular(3) == 6,
// triangular(-10) == 0

// My_answer
function triangular(n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
}

// Best_answer
function triangular(n) {
  return (n > 0) ? ((n * n) + n) / 2 : 0;
}


// No.73
// Instructions
// Write a function that takes a single string(word) as argument.
// The function must return an ordered list containing the indexes of all capital letters in the string.
// Example
// Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);

// My_answer
var capitals = function (word) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};

// Best_answer
var capitals = function (word) {
  return word.split('').reduce(function (memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};


// No.74
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers.Return the good values in the order they are given.
// function noOdds(values)

// My_answer
function noOdds(values) {
  return values.filter(i => i % 2 == 0)
}

// Best_answer
function noOdds(values) {
  function isEven(number) {
    return number % 2 == 0;
  }

  return values.filter(isEven);
}


// No.75
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
// For example:
// sumDigits(10);  // Returns 1
// sumDigits(99);  // Returns 18
// sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

// My_answer
function sumDigits(number) {
  return [...Math.abs(number).toString()].reduce((a, b) => +a + +b, 0);
}

// Best_answer
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function (a, b) { return +a + +b }, 0);
}