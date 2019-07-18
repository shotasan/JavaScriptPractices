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