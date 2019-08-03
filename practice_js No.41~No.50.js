// No.41
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// My_answer
function findShort(s) {
  let length = s.split(' ').map(str => str.length);
  return Math.min.apply(null, length);
}

// Best_answer
function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}


// No.42
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.The string can contain any char.
// Examples input / output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My_answer
function XO(str) {
  let chars = str.toLowerCase().split('');
  let countOfX = chars.filter(char => char === 'x').length;
  let countOfO = chars.filter(char => char === 'o').length;
  return countOfX === countOfO ? true : false;
}

// Best_answer
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}


// No.43
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// My_answer
function squareDigits(num) {
  let result = num.toString().split('').map(i => Number(i) ** 2).join('');
  return Number(result);
}

// Best_answer
function squareDigits(num) {
  return Number(('' + num).split('').map(function (val) { return val * val; }).join(''));

}