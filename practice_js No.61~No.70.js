// No.61
// Write a function that returns both the minimum and maximum number of the given list / array.
// Examples
// minMax([1, 2, 3, 4, 5]) == [1, 5]
// minMax([2334454, 5]) == [5, 2334454]
// minMax([1]) == [1, 1]
// Remarks
// All arrays or lists will always have at least one element,
// so you don't need to check the length. Also, your function will always get an array or a list,
// ayou don't have to check for null, undefined or similar.

// My_answer
function minMax(arr) {
  let minimum = arr.reduce((a, b) => Math.min(a, b));
  let maximum = arr.reduce((a, b) => Math.max(a, b));
  return [minimum, maximum];
}

// Best_answer
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}


// No.62
// Your task is to split the chocolate bar of given dimension n x m into small squares.
// Each square is of size 1x1 and unbreakable.Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0(as in no breaks are needed if we do not have any chocolate to split).
// Input will always be a non - negative integer.

// My_answer
function breakChocolate(n, m) {
  return (n * m) > 0 ? (n * m) - 1 : 0;
}

// Best_answer
var breakChocolate = function (n, m) {
  return (n * m === 0) ? 0 : n * m - 1;
};


// No.63
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument(also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My_answer
function solution(str, ending) {
  return str.endsWith(ending);
}

// Best_answer
function solution(str, ending) {
  return new RegExp(ending + "$", "i").test(str);
}


// No.64
// Story
// Your online store likes to give out coupons for special occasions.
// Some customers try to cheat the system by entering invalid codes or using expired coupons.
// Task
// Your mission:
// Write a function called which verifies that a coupon code is valid, the coupon is not expired.
// A coupon is no more valid on the day AFTER the expiration date.
// All dates will be passed as strings in this format: "MONTH DATE, YEAR".
// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") === true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") === false

// My_answer
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return checkCode(enteredCode, correctCode) && checkDate(currentDate, expirationDate);
}

function checkCode(enteredCode, correctCode) {
  return enteredCode === correctCode;
}

function checkDate(currentDate, expirationDate) {
  return Date.parse(currentDate) <= Date.parse(expirationDate)
}

// Best_answer
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}


// No.65
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths,
// so you will not have to decide how to order multiple strings of the same length.

// My_answer
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
};

// Best_answer
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
};