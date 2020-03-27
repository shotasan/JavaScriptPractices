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