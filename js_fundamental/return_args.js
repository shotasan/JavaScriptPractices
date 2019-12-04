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