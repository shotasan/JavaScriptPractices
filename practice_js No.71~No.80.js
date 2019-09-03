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
