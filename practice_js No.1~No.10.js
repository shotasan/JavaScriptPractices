// No.1
// Very simple, given a number, find its opposite.
// 1: -1
// 14: -14
//   - 34: 34

// My_answer
function opposite(number) {
  return (-number);
}

// Best_answer
function opposite(number) {
  return (-number);
}


// No.2
// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// My_answer
function repeatStr(n, s) {
  return s.repeat(n);
}

// Best_answer
function repeatStr(n, s) {
  return s.repeat(n);
}


// No.3
// It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.You don't have to worry with strings with less than two characters.

// My_answer
function removeChar(str) {
  return str.slice(1).slice(0, -1)
};

// Best_answer
function removeChar(str) {
  return str.slice(1).slice(0, -1)
};


// No.4
// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative ?
// Example :
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// My_answer
function makeNegative(num) {
  if (num > 0) {
    return -num;
  }
  else {
    return num;
  }
}

// Best_answer
function makeNegative(num) {
  return -Math.abs(num);
}


// No.5
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given[34, 15, 88, 2] your solution will return 2
// Given[34, -345, -1, 100] your solution will return -345

// My_answer
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return (Math.min.apply(null, args));
  }
}

// Best_answer
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}


// No.6
// Description:
// Complete the solution so that it reverses all of the words within the string passed in.
// Example:
// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

// My_answer
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Best_answer
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}


// No.7
// Simple, remove the spaces from the string, then return the resultant string.

// My_answer
function noSpace(x) {
  return x.replace(/\s+/g, '')
}

// Best_answer
function noSpace(x) {
  return x.replace(/\s+/g, '')
}


// No.8
// We need a function that can transform a string into a number.What ways of achieving this do you know ?
// Note : Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
// Examples
// stringToNumber("1234") == 1234
// stringToNumber("605") == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7") == -7

// My_answer
var stringToNumber = function (str) {
  return Number(str);
}

// Best_answer
var stringToNumber = function (str) {
  return parseInt(str);
}


// No.9
// Consider an array of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array(true means present).
// For example,
// [true, true, true, false,
// true, true, true, true,
// true, false, true, false,
// true, false, false, true,
// true, true, true, true,
// false, false, true, true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

// My_answer
function countSheeps(arrayOfSheep) {
  var count = 0;
  arrayOfSheep.forEach(function (value) {
    if (value == true) { count++ }
  });
  return count;
}

// Best_answer
// filter() は、与えられた callback 関数を配列の各要素に対して一度ずつ呼び出し、callback が真と評価される値を返したすべての要素からなる新しい配列を生成します。
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}


// No.10
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// My_answer
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

// Best_answer
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}