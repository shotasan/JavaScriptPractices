// No.81
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// My_answer
function wave(word) {
  words = word.split('');
  result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] == ' ') {
      continue;
    }
    chars = [];
    for (let n = 0; n < words.length; n++) {
      if (n == i) {
        chars.push(words[i].toUpperCase());
      } else {
        chars.push(words[n]);
      }
    }
    result.push(chars.join(''))
  }
  return result;
}

// Best_answer
function wave(str) {
  let result = [];

  // test()メソッドは、正規表現と指定した文字列がマッチするかを調べます。 trueかfalseを返します。
  // slice() メソッドは begin から end まで選択された配列の一部をシャローコピーして、新しい配列オブジェクトを返します(end は含まれません) 。元の配列は変更されません。
  // end が省略された場合、slice はシーケンスの最後(arr.length) までを取り出します。(index + 1)はendを省略して大文字の次から最後までを指定している。
  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
    }
  });

  return result;
}


// No.82
// Find the number of divisors of a positive integer n.
// Random tests go up to n = 500000.
// Examples
// divisors 4 = 3 -- 1, 2, 4
// divisors 5 = 2 -- 1, 5
// divisors 12 = 6 -- 1, 2, 3, 4, 6, 12
// divisors 30 = 8 -- 1, 2, 3, 5, 6, 10, 15, 30

// My_answer
function getDivisorsCnt(n) {
  let count = 0
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) count += 1;
  }
  return count;
}

// Best_answer
function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }

  return d;
}


// No.83
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid(2010) and After Earth(2013).
// Jaden is also known for some of his philosophy that he delivers via Twitter.When writing on Twitter, he is known for almost always capitalizing every word.
// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden - Cased: "How can mirrors be real if our eyes aren't real"
// Jaden - Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

// My_answer
String.prototype.toJadenCase = function () {
  let array = this.split(' ');
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let word = array[i].substring(0, 1).toUpperCase() + array[i].substring(1);
    result.push(word);
  }
  return result.join(' ');
};

// Best_answer
String.prototype.toJadenCase = function () {
  return this.split(" ").map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


// No.84
// You are going to be given a word.Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word(string) of length 0 < str < 1000(In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
// You do not need to test for this.This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.

// My_answer
function getMiddle(s) {
  let leng = [...s].length / 2;

  if (s.length % 2 == 0) {
    return [...s].slice(leng - 1, leng + 1).join('');
  } else {
    return [...s].slice(leng, leng + 1).join('');
  }
}

// Best_answer
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


// No.85
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples:
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1') 

// My_answer
function removeUrlAnchor(url) {
  return url.replace(/#.+/, "");
}

// Best_answer
function removeUrlAnchor(url) {
  return url.split('#')[0];
}


// No.86
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5, only count it once.

// My_answer
function solution(number) {
  let multiples = [];
  for (let i = 1; i < number; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  return multiples.reduce((a, b) => a + b, 0);
}

// Best_answer
function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum;
}
