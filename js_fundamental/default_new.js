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

print(hoge())