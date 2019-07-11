// No.11
// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.
// Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My_answer
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) { return [] };

  var positive = []
  var negative = 0

  input.forEach(function (int) {
    if (Math.sign(int) == 1) {
      positive.push(int);
    } else {
      negative += int;
    }
  })

  return [positive.length, negative];
}

// Best_answer
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];

  var positive = 0;
  var negative = 0;

  for (var i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0)
      ++positive;
    else
      negative += input[i];
  }

  return [positive, negative];
}


// No.12
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string / char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples:
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

// My_answer
function basicOp(operation, value1, value2) {
  // Code
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}

// Best_answer
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 0;
  }
}


// No.13
// We need a function that can transform a number into a string.
// What ways of achieving this do you know ?
// Examples :
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

// My_answer
function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

// Best_answer
function numberToString(num) {
  return num.toString();
}


// No.14
// Jenny has written a function that returns a greeting for a user.
// However, she's in love with Johnny, and would like to greet him slightly different.
// She added a special case to her function, but she made a mistake.
// Can you help her ?
// function greet(name) {
//   return "Hello, " + name + "!";
//   if (name === "Johnny")
//     return "Hello, my love!";
// }

// My_answer
function greet(name) {
  if (name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

// Best_answer
function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}


// No.15
// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot seperating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

// My_answer
function abbrevName(name) {
  return name.split(' ').map(function (element) {
    return element.charAt(0).toUpperCase();
  }).join('.');
}

// Best_answer
function abbrevName(name) {

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}