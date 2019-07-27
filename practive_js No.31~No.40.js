// No.31
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
// Return the resulting string.
// Test.assertEquals(fakeBin('45385593107843568'), '01011110001100111');
// Test.assertEquals(fakeBin('509321967506747'), '101000111101101');
// Test.assertEquals(fakeBin('366058562030849490134388085'), '011011110000101010000011011');
// Test.assertEquals(fakeBin('15889923'), '01111100');
// Test.assertEquals(fakeBin('800857237867'), '100111001111'); 

// My_answer
function fakeBin(x) {
  return x.split('').map(int => int < 5 ? 0 : 1).join('');
}

// Best_answer
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// No.32
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3]-- > [2, 4, 6]

// My_answer
function maps(x) {
  return x.map(n => n * 2);
}

// Best_answer
function maps(x) {
  return x.map(n => n * 2);
}


// No.33
// Our football team finished the championship.The result of each match look like "x:y".
// Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship.
// Rules for counting points for each match:
// if x > y - 3 points
// if x < y - 0 point
// if x = y - 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Best_answer

// reduceの引数currentにスコア(3:1)が入るのでインデックスを使用して数値を比較する
// outputに結果の合計値が入る
const points = games => games.reduce((output, current) => {
  return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)


// No.34
// Get the number n(n > 0) to return the reversed sequence from n to 1.
// Example: n = 5 >> [5, 4, 3, 2, 1]

// My_answer
const reverseSeq = n => {
  return Array.from(new Array(n)).map((v, i) => i + 1).reverse();
};

// Best_answer
const reverseSeq = n => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  } return arr;
};


// No.35
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments(salary, bonus).Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false,
// the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£"(= "\u00A3", JS and Java).

// My_answer
function bonusTime(salary, bonus) {
  return bonus ? '£' + (salary * 10) : '£' + salary
}

// Best_answer
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}


// No.36
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
// It is composed of four nucleic acid bases Guanine('G'), Cytosine('C'), Adenine('A'), and Thymine('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells.
// RNA differs slightly from DNA its chemical structure and contains no Thymine.
// In RNA Thymine is replaced by another nucleic acid Uracil('U').
// Create a funciton which translates a given DNA string into RNA.
// For example:
// DNAtoRNA("GCAT") returns("GCAU")
// The input string can be of arbitrary length - in particular, it may be empty.All input is guaranteed to be valid, i.e.each input string will only ever consist of 'G', 'C', 'A' and / or 'T'.

// My_answer
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

// Best_answer
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}