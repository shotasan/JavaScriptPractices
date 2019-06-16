// No.1
// Very simple, given a number, find its opposite.
// 1: -1
// 14: -14
//   - 34: 34

// My_answer
function opposite(number) {
  return (-number);
}

// Best_answer
function opposite(number) {
  return (-number);
}


// No.2
// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// My_answer
function repeatStr(n, s) {
  return s.repeat(n);
}

// Best_answer
function repeatStr(n, s) {
  return s.repeat(n);
}


// No.3
// It's pretty straightforward.
// Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.You don't have to worry with strings with less than two characters.

// My_answer
function removeChar(str) {
  return str.slice(1).slice(0, -1)
};

// Best_answer
function removeChar(str) {
  return str.slice(1).slice(0, -1)
};


// No.4
// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative ?
// Example :
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// My_answer
function makeNegative(num) {
  if (num > 0) {
    return -num;
  }
  else {
    return num;
  }
}

// Best_answer
function makeNegative(num) {
  return -Math.abs(num);
}
