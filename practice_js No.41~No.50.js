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


// No.44
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// My_answer
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Best_answer
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


// No.45
// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array(in the same order).
// The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// My_answer
function evenNumbers(array, number) {
  return array.filter(i => i % 2 === 0).slice(-number);
}

// Best_answer
const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);


// No.46
// A square of squares
// You like building blocks.You especially like building blocks that are squares.
// And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle!
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it!
// You just have to check if your number of building blocks is a perfect square.
// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true
// isSquare(26) returns  false

// My_answer
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

// Best_answer
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}


// No.47
// Take 2 strings s1 and s2 including only letters from ato z.Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// My_answer
function longest(s1, s2) {
  let letters = (s1 + s2).split('').sort();
  return [...new Set(letters)].join('');
}

// Best_answer
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')


// No.48
// You might know some pretty large perfect squares.But what about the NEXT one ?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square, than - 1 should be returned.You may assume the parameter is positive.
// Examples:
// findNextSquare(121)-- > returns 144
// findNextSquare(625)-- > returns 676
// findNextSquare(114)-- > returns - 1 since 114 is not a perfect

// My_answer
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

// Best_answer
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}