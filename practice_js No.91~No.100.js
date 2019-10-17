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