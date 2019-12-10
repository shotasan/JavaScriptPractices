// constructorプロパティは元となるコンストラクターを取得する（継承元のみ）
var Animal = function () { };
var Hamster = function () { };
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
console.log(a.constructor === Animal);
console.log(h.constructor === Animal);
console.log(h.constructor === Hamster);


// instanceof演算子はオブジェクトが特定のコンストラクターによって生成されたインスタンスであるかどうかを判定する
console.log(h instanceof Animal);
console.log(h instanceof Hamster);


// メンバーの有無を判定するin演算子
var obj = { hoge: function () { }, foo: function () { } };
console.log("hoge" in obj);
console.log("piyo" in obj);