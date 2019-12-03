function getTriangle(base = 1, height = 1) {
  return base * height / 2;
}

print(getTriangle(5))
// からの値を渡してもデフォルト値は適用されない
print(getTriangle(5, null))
// undefinedのみは引数は渡されていないと判断される
print(getTriangle(5, undefined));

// 引数を必須にする場合の処理
function required() {
  throw new Error('引数不足');
}

function hoge(value = required()) {
  return value;
}

// 可変長引数
function sum(...nums) {
  let result = 0;
  for (let num of nums) {
    if (typeof num !== "number") {
      throw new Error("数値ではありません");
    }
    result += num;
  }
  return result;
}
print(sum(1, 3, 5, 7));

// 分割代入を使用した名前付き引数
function getTriangle({ base = 1, height = 1 }) {
  return base * height / 2;
}
print(getTriangle({ base: 5, height: 4 }));