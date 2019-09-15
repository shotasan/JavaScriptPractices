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


// No.76
// Finish the solution so that it sorts the passed in array of numbers.
// If the function passes in an empty array or null / nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// My_answer
// 選択ソート
function solution(nums) {
  if (nums == null) return [];

  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[k] < nums[minIndex]) {
        minIndex = k;
      }
    }
    let w = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = w;
  }
  return nums;
}

// Best_answer
function solution(nums) {
  return (nums || []).sort(function (a, b) {
    return a - b
  });
}


// No.77
// Complete the solution so that it takes the object(JavaScript / CoffeeScript) or hash(ruby) passed in and generates a human readable string from its key / value pairs.
// The format should be "KEY = VALUE".Each key / value pair should be separated by a comma except for the last pair.
// Example:
// solution({ a: 1, b: '2' }) // should return "a = 1,b = 2"

// My_answer
// Object.entries() メソッドは、引数に与えたオブジェクトが所有する、列挙可能なプロパティの組[key, value] からなる配列を返します。
function solution(pairs) {
  result = [];
  for (let [key, value] of Object.entries(pairs)) {
    result.push(`${key} = ${value}`)
  }
  return result.join(',');
}

// Best_answer
function solution(pairs) {
  return Object.keys(pairs)
    .map(function (k) { return k + ' = ' + pairs[k] })
    .join(',');
}


// No.78
// In mathematics, the factorial of a non - negative integer n, denoted by n! , is the product of all positive integers less than or equal to n.
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
// Write a function to calculate factorial for a given input.
// If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException(Java) or RangeException(PHP) or throw a RangeError(JavaScript).
// More details about factorial can be found here: http://en.wikipedia.org/wiki/Factorial

// My_answer
function factorial(n) {
  if (n < 0 || n > 12) return "RangeError";
  if (n === 0) return 1;
  result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Best_answer
function factorial(n) {
  if (n < 0 || n > 12)
    throw new RangeError();
  return n <= 1 ? 1 : n * factorial(n - 1);
}


// No.79
// In this Kata, your function receives an array of integers as input.Your task is to determine whether the numbers are in ascending order.
// An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
// For the purposes of this Kata, you may assume that all inputs are valid, i.e.non - empty arrays containing only integers.
// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all(zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
// An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.
// For example:
// isAscOrder(new int[]{ 1, 2, 4, 7, 19}) == true
// isAscOrder(new int[]{ 1, 2, 3, 4, 5}) == true
// isAscOrder(new int[]{ 1, 6, 10, 18, 2, 4, 20}) == false
// isAscOrder(new int[]{ 9, 8, 7, 6, 5, 4, 3, 2, 1}) == false // numbers are in DESCENDING order

// My_answer
function inAscOrder(arr) {
  for (let i = 0; i < (arr.length - 1); i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

// Best_answer
function inAscOrder(arr) {
  return arr.every((_, i) => i == 0 || arr[i] > arr[i - 1]);
}