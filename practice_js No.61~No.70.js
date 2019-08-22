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