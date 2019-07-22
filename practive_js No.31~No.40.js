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