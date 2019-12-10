// 特権メソッドによるプライベートプロパティへのアクセス
function Triangle() {
  // プライベートプロパティ
  var _base;
  var _height;

  // プライベートメソッド
  var _checkArgs = function (val) {
    return (typeof val === 'number' && val > 0);
  }

  // セッターメソッド
  this.setBase = function (base) {
    if (_checkArgs(base)) { _base = base; }
  }
  // ゲッターメソッド
  this.getBase = function () { return _base; }

  // セッターメソッド
  this.setHeight = function (height) {
    if (_checkArgs(height)) { _height = height; }
  }
  // ゲッターメソッド
  this.getHeight = function () { return _height; }
}

// ゲッターメソッドを利用して面積を計算するメソッド
Triangle.prototype.getArea = function () {
  return this.getBase() * this.getHeight() / 2;
}

var t = new Triangle();
// プライベートプロパティには直接アクセスできない
t._base = 10;
t._height = 2;
console.log(`三角形の面積：${t.getArea()}`);

// セッターメソッド、ゲッターメソッドを使用してプライベートプロパティにアクセスする
t.setBase(10);
t.setHeight(2);
console.log(`三角形の底辺: ${t.getBase()}`);
console.log(`三角形の高さ: ${t.getHeight()}`);
console.log(`三角形の面積: ${t.getArea()}`);



// Object.definePropertyメソッドによるアクセサーメソッドの実装
function Triangle() {
  var _base;
  var _height;

  Object.defineProperty(
    this,
    'base',
    {
      get: function () {
        return _base;
      },
      set: function (base) {
        if (typeof base === 'number' && base > 0) {
          _base = base;
        }
      }
    }
  );

  Object.defineProperty(
    this,
    'height',
    {
      get: function () {
        return _height;
      },
      set: function (height) {
        if (typeof height === 'number' && height > 0) {
          _height = height;
        }
      }
    }
  );
};

Triangle.prototype.getArea = function () {
  return this.base * this.height / 2;
}

var t = new Triangle();
t.base = 10;
console.log(t._base);
t.height = 2;
console.log(`三角形の底辺: ${t.base}`);
console.log(`三角形の高さ: ${t.height}`);
console.log(`三角形の面積: ${t.getArea()}`);