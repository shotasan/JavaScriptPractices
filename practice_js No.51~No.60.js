// No.51
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// eg:
// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false

// My_answer
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

// Best_answer
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


// No.52
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// My_answer
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// Best_answer
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

// No.53
// Create a function named divisors / Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest.
// If the number is prime return the string '(integer) is prime'.
// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// My_answer
function divisors(integer) {
  let results = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      results.push(i);
    }
  }
  return results.length ? results : `${integer} is prime`;
};

// Best_asnwer
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};


// No.54
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend["Ryan", "Kieran", "Mark"]`shouldBe`["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// My_answer
function friend(friends) {
  return friends.filter(name => name.length === 4)
}

// Best_answer
function friend(friends) {
  return friends.filter(n => n.length === 4)
}


// No.55
// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions.
// Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions.
// She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibitions, she's off to an important fair,
// so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
// Task
// Given an array of integers, remove the smallest value.Do not mutate the original array / list.
// If there are multiple elements with the same value, remove the one with a lower index.If you get an empty array / list, return an empty array / list.
// Don't change the order of the elements that are left.
// Examples
// removeSmallest([1, 2, 3, 4, 5]) = [2, 3, 4, 5]
// removeSmallest([5, 3, 2, 1, 4]) = [5, 3, 2, 4]
// removeSmallest([2, 2, 1, 2, 1]) = [2, 2, 2, 1]

// My_answer(false)
function removeSmallest(numbers) {
  let minNumberIndex = numbers.findIndex(n => n === Math.min(...numbers));
  numbers.splice(minNumberIndex, 1);
  return numbers
}

// Best_answer
function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}


// No.56
// Mr.Scrooge has a sum of money 'P' that wants to invest,
// and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re - invested yearly after paying tax 'T'
// Note that the principal is not taxed but only the year's accrued interest
// Example:
// Let P be the Principal = 1000.00
// Let I be the Interest Rate = 0.05
// Let T be the Tax Rate = 0.18
// Let D be the Desired Sum = 1100.00
// After 1st Year-- >
//   P = 1041.00
// After 2nd Year-- >
//   P = 1083.86
// After 3rd Year-- >
//   P = 1128.30
// Thus Mr.Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.
// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr.Scrooge to get the desired sum.
// Assumptions : Assume that Desired Principal 'D' is always greater than the initial principal,
// however it is best to take into consideration that if the Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

// My_answer
function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  while (principal < desired) {
    year++
    principal += (principal * interest) - (principal * interest * tax);
  }
  return year;
}

// Best_answer
function calculateYears(principal, interest, tax, desired) {
  // your code
  var years = 0;
  while (principal < desired) {
    principal += (principal * interest) * (1 - tax);
    years++;
  }
  return years;
}