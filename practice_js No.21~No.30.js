// No.21
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

// My_answer
function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b ** 2, 0)
}

// Best_answer
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return (n * n) + sum;
  }, 0)
}

// No.22
// Complete the solution so that it reverses the string value passed into it.
// solution('world'); // returns 'dlrow'

// My_answer
function solution(str) {
  return str.split('').reverse().join('');
}

// Best_answer
function solution(str) {
  return str.split('').reverse().join('');
}


// No.23
// Your task is to make two functions,
// max and min(maximum and minimum in PHP and Python) that take a(n) array / vector of integers list as input and outputs,
// respectively, the largest and lowest number in that array / vector.
// #Examples
// max([4, 6, 2, 1, 9, 63, -134, 566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns - 110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0
// #Notes
// You may consider that there will not be any empty arrays / vectors.

// My_answer
var min = function (list) {
  return list.reduce((a, b) => Math.min(a, b))
}

var max = function (list) {
  return list.reduce((a, b) => Math.max(a, b));
}

// Best_answer
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);