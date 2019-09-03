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