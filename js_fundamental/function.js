// function命令
function getTriangle(base, height) {
  return base * height / 2;
}
print(getTriangle(5, 2));

// Functionコンストラクター
var getTriangle = new Function("base", "height", "return base * height / 2");
print(getTriangle(5, 2))

// 関数リテラル
var getTriangle = function (base, height) {
  return base * height / 2;
}
print(getTriangle(5, 2));

// アロー関数
let getTriangle = (base, height) => base * height / 2;
print(getTriangle(5, 2))