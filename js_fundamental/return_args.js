function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}
let result = getMaxMin(10, 35, -5, 78, 0);
print(result)

// 分割代入を利用した戻り値の受け取り
let [max, min] = getMaxMin(10, 35, -5, 78, 0);
print(max);
print(min);


// 再帰関数
function factorial(n) {
  if (n != 0) { return n * factorial(n - 1); }
  return 1;
}

print(factorial(5));


// 高級関数
function arrayWalk(data, f) {
  for (var key in data) {
    // コールバック関数の実行
    f(data[key], key);
  }
}

function showElement(value, key) {
  print(key + ':' + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement)

var sumResult = 0;
function sumElement(value, key) {
  sumResult += value;
}
arrayWalk(ary, sumElement);
print(sumResult);


// 匿名関数
arrayWalk(ary, function (value, key) {
  print(`${key} : ${value}`);
})