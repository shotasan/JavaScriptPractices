// 継承（プロトタイプチェーン）
var Animal = function () { };

Animal.prototype = {
  walk: function () {
    console.log("トコトコ");
  }
};

var Dog = function () {
  Animal.call(this);
};

// ドッグオブジェクトのプロトタイプにアニマルオブジェクトのインスタンスをセット
// ドッグオブジェクトのインスタンスからアニマルオブジェクトのメソッドが使用可能になる
Dog.prototype = new Animal();
Dog.prototype.bark = function () {
  console.log("わんわん");
}

var dog = new Dog();
dog.walk();
dog.bark();

