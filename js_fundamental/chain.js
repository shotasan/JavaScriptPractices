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



// 動的な継承関係
SuperAnimal = function () { };
SuperAnimal.prototype = {
  walk: function () {
    console.log("ダダだだだだ");
  }
};

var dog1 = new Dog();
dog1.walk();

// 継承関係を動的に切り替え
Dog.prototype = new SuperAnimal();

var dog2 = new Dog();
dog2.walk();
// インスタンス生成時の継承関係がインスタンスに固定される
dog1.walk();