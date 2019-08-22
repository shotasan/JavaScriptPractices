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