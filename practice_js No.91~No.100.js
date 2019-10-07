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