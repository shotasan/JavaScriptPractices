// No.41
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// My_answer
function findShort(s) {
  let length = s.split(' ').map(str => str.length);
  return Math.min.apply(null, length);
}

// Best_answer
function findShort(s) {
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}