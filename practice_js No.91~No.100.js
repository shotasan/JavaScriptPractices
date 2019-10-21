// No.91
// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.
// it("[1, 2]", function () {
//   Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
// });
// it("[15, 7, 3, -8]", function () {
//   Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
// });
// it("[4, 2, 30]", function () {
//   Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
// });

// Best_answer
// 先頭要素の場合はtrueを返し、arr[i]と一つ前の要素を比較していく
function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1]) ? 'yes, ascending' :
    arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1]) ? 'yes, descending' : 'no'
}


// No.92
// Your task is to remove all duplicate words from a string, leaving only single(first) words entries.
// Example:
// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Output:
// 'alpha beta gamma delta'

// My_answer
function removeDuplicateWords(s) {
  let eachStrings = s.split(" ");
  let result = [];
  eachStrings.forEach(function (s) {
    if (!result.includes(s)) {
      result.push(s);
    }
  })
  return result.join(" ");
}

// Best_answer
// new Set([iterable]); 反復可能オブジェクトが渡されたら、そのすべての要素が新しい Set オブジェクトに追加されます。
// Set オブジェクトは値のコレクションです。挿入順に要素を反復することができます。
// Set に重複する値は格納出来ません。Set 内の値はコレクション内で一意となります。
const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')


// No.93
// Complete the function caffeineBuzz, which takes a non - zero integer as it's one argument.
// If the integer is divisible by 3, return the string "Java".
// If the integer is divisible by 3 and divisible by 4, return the string "Coffee"
// If the integer is one of the above and is even, add "Script" to the end of the string.
// Otherwise, return the string "mocha_missing!"
// caffeineBuzz(1)   => "mocha_missing!"
// caffeineBuzz(3)   => "Java"
// caffeineBuzz(6)   => "JavaScript"
// caffeineBuzz(12)  => "CoffeeScript"

// My_answer
function caffeineBuzz(n) {
  let result = [];
  if (n % 3 === 0 && n % 4 === 0) {
    result.push('Coffee');
  } else if (n % 3 === 0) {
    result.push('Java');
  } else {
    result.push('mocha_missing!');
  }
  if (n % 2 === 0 && result[0] !== 'mocha_missing!') result.push('Script');
  return result.join('')
}

// Best_answer
function caffeineBuzz(n) {
  if (n % 12 === 0) return "CoffeeScript";
  if (n % 6 === 0) return "JavaScript";
  if (n % 3 === 0) return "Java";
  return "mocha_missing!";
}


// No.94
// Deoxyribonucleic acid(DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// You have function with one side of the DNA(string, except for Haskell); you need to get the other complementary side.
// DNA strand is never empty or there is no DNA at all(again, except for Haskell).
// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)
// DNAStrand("ATTGC") // return "TAACG"
// DNAStrand("GTAT") // return "CATA" 

// My_answer
function DNAStrand(dna) {
  return dna.split("").map(function (x) {
    switch (x) {
      case "A":
        return "T";
      case "T":
        return "A";
      case "G":
        return "C";
      case "C":
        return "G";
    }
  }).join("")
}

// Best_answer
function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}


// No.95
// #Get the averages of these numbers
// Write a method, that gets an array of integer - numbers and return an array of the averages of each integer - number and his follower, if there is one.
// Example:
// Input: [1, 3, 5, 1, -10]
// Output: [2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null or None, your method should return an empty array.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// My_answer
function averages(numbers) {
  if (Array.isArray(numbers) && numbers.length) {
    let result = [];
    for (let i = 1; i < numbers.length; i++) {
      result.push((numbers[i] + numbers[i - 1]) / 2);
    }
    return result;
  } else {
    return [];
  }
}

// Best_answer
function averages(numbers) {
  var final = [];
  if (numbers) {
    for (var i = 0; i < numbers.length - 1; i++) {
      final.push((numbers[i] + numbers[i + 1]) / 2);
    }
  }
  return final;
}


// No.96
// Find the last element of the given argument(s).
// Examples
// last([1, 2, 3, 4]) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

// Best_answer
function last(list) {
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}


// No.97
// Our loose definition of Vampire Numbers can be described as follows:
// 6 * 21 = 126
// # 6 and 21 would be valid 'fangs' for a vampire number as the
// # digits 6, 1, and 2 are present in both the product and multiplicands
// 10 * 11 = 110
// # 110 is not a vampire number since there are three 1's in the
// # multiplicands, but only two 1's in the product
// Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.

// My_answer
let vampire_test = function (a, b) {
  let maltiplicands = [...a.toString(), ...b.toString()].sort();
  let product = (a * b).toString().split("").sort();
  return maltiplicands.toString() == product.toString();
}

// Best_answer
function vampire_test(a, b) {
  return sortStr(a + '' + b) == sortStr(a * b + '');
}

function sortStr(v) { return v.split('').sort().join('') }


// No.98
// King Arthur and his knights are having a New Years party.Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.
// To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.
// Arthur needs you to return true if he needs to invite more women or false if he is all set.
// Input / Output
// [input] integer array L($a in PHP)
// An array(guaranteed non - associative in PHP) representing the genders of the attendees, where - 1 represents women and 1 represents men.
// 2 <= L.length <= 50
// [output] a boolean value
// true if Arthur need to invite more women, false otherwise.

// My_answer
function inviteMoreWomen(L) {
  return L.reduce((sum, v) => sum + v) > 0;
}

// Best_answer
function inviteMoreWomen(L) {
  return L.reduce((a, b) => a + b) > 0;
}


// No.99
// You receive some random elements as a space - delimited string.
// Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1(e.g. 1, 2, 3, 4).
// Return:
// 0 if the elements can form such a sequence, and no number is missing("not broken", e.g. "1 2 4 3")
// 1 if there are any non - numeric elements in the input("invalid", e.g. "1 2 a")
// n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them("broken", e.g. "1 2 4" or "1 5")
// Examples
// "1 2 3 4" ==>  return 0, because the sequence is complete
// "1 2 4 3" ==>  return 0, because the sequence is complete(order doesn't matter)
// "2 1 3 a" ==>  return 1, because it contains a non numerical character
// "1 3 2 5" ==>  return 4, because 4 is missing from the sequence
// "1 5" ==>  return 2, because the sequence is missing 2, 3, 4 and 2

// My_answer
function findMissingNumber(sequence) {
  if (!sequence) return 0;

  let sequenceArray = sequence.split(' ').map(Number);
  if (sequenceArray.includes(NaN)) return 1;

  sequenceArray.unshift(0);
  let max = sequenceArray.reduce((a, b) => Math.max(a, b));
  let collects = [...Array(max).keys()];
  let result = collects.filter(item => sequenceArray.indexOf(item) == -1)
  return result.length ? result[0] : 0;
}

// Best_answer
// +文字列で文字列を数値に変換できるex) +"123" => 123
function findMissingNumber(sequence) {
  if (!Number.isInteger(+sequence.split(' ').join(''))) return 1;
  var arr = sequence.split(' ').map(n => +n);
  for (i = 1; i < Math.max(...arr); i++) {
    if (!arr.includes(i)) return i;
  }
  return 0;
}