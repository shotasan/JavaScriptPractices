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


// No.87
// You are given a secret message you need to decipher.Here are the things you need to know to decipher it:
// For each word:
// the second and the last letter is switched(e.g.Hello becomes Holle)
// the first letter is replaced by its character code(e.g.H becomes 72)
// Note: there are no special characters used, only letters and spaces
// Examples
// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// My_answer
function decipherThis(str) {
  return switchLetter(replaceCharacter(str)).join(' ');
};

// 文字コードを文字に変換
function replaceCharacter(str) {
  return str.split(' ').map(function (s) {
    let num = s.match(/\d*/gi)[0];
    let char = String.fromCharCode(num);
    return s.replace(/\d*/, char);
  })
}

// 2文字目と最後の文字を入れ替え
function switchLetter(str) {
  return str.map(function (s) {
    let chars = [...s];
    if (chars.length > 2) {
      let tmp = chars[1];
      chars[1] = chars[chars.length - 1];
      chars[chars.length - 1] = tmp;
      return chars.join('');
    } else {
      return s;
    }
  })
}

// Best_answer
function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}


// No.88
// This kata is designed to test your ability to extend the functionality of built -in classes.
// In this case, we want you to extend the built -in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
// Explanation:
// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN(note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case !
// Example
// var numbers = [1, 2, 3, 4, 5];
// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]

// My_answer
Array.prototype.square = function () {
  return this.map(n => n *= n);
}

Array.prototype.cube = function () {
  return this.map(n => n *= n * n);
}

Array.prototype.average = function () {
  if (this.length == 0) return NaN;
  return this.reduce((a, b) => a + b) / this.length;
}

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b);
}

Array.prototype.even = function () {
  return this.filter(n => n % 2 === 0);
}

Array.prototype.odd = function () {
  return this.filter(n => n % 2 != 0);
}

// Best_answer
Array.prototype.square = function () { return this.map(function (n) { return n * n; }); }
Array.prototype.cube = function () { return this.map(function (n) { return n * n * n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum = function () { return this.reduce(function (a, b) { return a + b; }, 0); }
Array.prototype.even = function () { return this.filter(function (item) { return 0 == item % 2; }); }
Array.prototype.odd = function () { return this.filter(function (item) { return 0 != item % 2; }); }


// No.89
// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities.
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
// It gets obvious if we write b's elements in terms of squares:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
// Invalid arrays
// If we change the first number to something else, comp may not return true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns false because in b 132 is not the square of any number of a.
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a, b) returns false because in b 36100 is not the square of any number of a.
// Remarks
// a or b might be[](all languages except R, Shell).a or b might be nil or null or None or nothing(except in Haskell, Elixir, C++, Rust, R, Shell, PureScript).
// If a or b are nil(or null or None), the problem doesn't make sense so return false.
// If a or b are empty then the result is self - evident.
// a or b are empty or not empty lists.

// My_answer
function comp(array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    return array2.map(n => Math.sqrt(n)).sort().toString() == array1.sort().toString();
  } else {
    return false;
  }
}

// Best_answer
function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}