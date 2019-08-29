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


// No.66
// Let us begin with an example:
// Take a number: 56789. Rotate left, you get 67895.
// Keep the first digit in place and rotate left the other digits: 68957.
// Keep the first two digits in place and rotate the other ones: 68579.
// Keep the first three digits and rotate left the rest: 68597.
// Now it is over since keeping the first four it remains only one digit which rotated is itself.
// You have the following sequence of numbers:
// 56789 -> 67895 -> 68957 -> 68579 -> 68597
// and you must return the greatest: 68957.
// Task
// Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
// So max_rot(or maxRot or ...depending on the language) is such as:
// max_rot(56789) should return 68957
// max_rot(38458215) should return 85821534

// My_answer
function maxRot(n) {
  numbers = [...n.toString()];
  let result = [n];
  for (let i = 0; i < numbers.length; i++) {
    numbers.push(numbers[i]);
    numbers.splice(i, 1);
    result.push(numbers.join(""));
  }
  return Math.max(...result);
}

// Best_answer
function maxRot(n) {
  var str = n.toString();
  var arr = [str];
  for (var i = 0; i <= str.length - 1; i++) {
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    arr.push(str.split().join());
  }
  return Math.max.apply(null, arr);
}


// No.67
// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3(instead of 2) numbers of the sequence to generate the next.
// And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input(AKA signature), we have this sequence:
// [1, 1, 1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature ? As starting with [0, 1] instead of[1, 1] basically shifts the common Fibonacci sequence by once place,
// you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array / list,
// returns the first n elements - signature included of the so seeded sequence.
// Signature will always contain 3 numbers; n will always be a non - negative number;
// if n == 0, then return an empty array(except in C return NULL) and be ready for anything else which is not clearly specified;)

// My_answer
function tribonacci(signature, n) {
  for (let i = 0; signature.length < n; i++) {
    sum = signature[i] + signature[i + 1] + signature[i + 2];
    signature.push(sum);
  }
  return signature.slice(0, n);
}

// Best_answer
function tribonacci(signature, n) {
  for (var i = 0; i < n - 3; i++) { // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}


// No.68
// Description:
// Complete the method / function so that it converts dash / underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized(known as Upper Camel Case,
// also often referred to as Pascal case).
//  Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// My_answer
function toCamelCase(str) {
  let strDiv = str.split(/[-_]/);
  let result = [strDiv[0]];
  for (let i = 1; i < strDiv.length; i++) {
    result.push(strDiv[i][0].toUpperCase() + strDiv[i].slice(1));
  }
  return result.join('');
}

// Best_answer
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}