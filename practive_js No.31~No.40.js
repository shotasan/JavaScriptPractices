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