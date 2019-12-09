// 静的プロパティ・静的メソッドの定義
var Area = function () { };

Area.version = "1.0";

Area.triangle = function (base, height) {
  return base * height / 2;
}
console.log(Area.version);
console.log(Area.triangle(5, 3));
var area = new Area();
console.log(area.triangle(5, 3));