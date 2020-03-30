// No:101
// Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.
// The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.
// Also, if any parameter is not an object, it should be ignored.You can use the function isObject(object) to determine if a parameter is an object or not(it will return true or false).
// extend({ a: 1, b: 2 }, { c: 3 }) // should === {a: 1, b: 2, c: 3}
// extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }) // should === {a: 1, b: 2, c: 3, d: 4}
// extend({ a: 1, b: 2 }, { a: 3, c: 3 }) // should  === {a: 1, b: 2, c: 3}
// extend({ a: false, b: null }, { a: true, b: 2, c: 3 }) // should  === {a: false, b: null, c: 3}

// Object.assign() メソッドは、すべての列挙可能なプロパティの値を、1つ以上のコピー元オブジェクトからコピー先オブジェクトにコピーするために使用されます。戻り値としてコピー先オブジェクトを返します。
// Object.assign(target, ...sources);
function extend(...args) {
  return Object.assign({}, ...args.filter(Object.isObject).reverse());
}

// No:102
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples:
// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

let number = a => a.map((v, i) => `${i + 1}: ${v}`);

var number = function(array) {
  return array.map((v, i) => {
    return `${i + 1}: ${v}`;
  });
};

// No:103
// This kata is the first of a sequence of four about "Squared Strings".
// You are given a string of n lines, each substring being n characters long: For example:
// s = "abcd\nefgh\nijkl\nmnop"
// We will study some transformations of this square of strings.
// Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
// or printed:
// vertical mirror   |horizontal mirror
// abcd --> dcba     |abcd --> mnop
// efgh     hgfe     |efgh     ijkl
// ijkl     lkji     |ijkl     efgh
// mnop     ponm     |mnop     abcd
// #Task:
// Write these two functions
// and
// high-order function oper(fct, s) where
// fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
// #Examples:
// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

function vertMirror(str) {
  return str
    .split('\n')
    .map(line =>
      line
        .split('')
        .reverse()
        .join('')
    )
    .join('\n');
}
function horMirror(str) {
  return str
    .split('\n')
    .reverse()
    .join('\n');
}
function oper(fct, s) {
  return fct(s);
}

function vertMirror(strng) {
  return strng
    .split(/\n/)
    .map(v =>
      v
        .split('')
        .reverse()
        .join('')
    )
    .join('\n');
}
function horMirror(strng) {
  return strng
    .split(/\n/)
    .reverse()
    .join('\n');
}
function oper(fct, s) {
  return fct(s);
}
