function getTriangle(base = 1, height = 1) {
  return base * height / 2;
}

print(getTriangle(5))
// からの値を渡してもデフォルト値は適用されない
print(getTriangle(5, null))
// undefinedのみは引数は渡されていないと判断される
print(getTriangle(5, undefined));
