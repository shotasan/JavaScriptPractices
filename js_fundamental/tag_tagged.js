// タグ付きテンプレート
function escapeHtml(str) {
  if (!str) { return ''; }
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt');
  str = str.replace(/>/g, '&gt');
  str = str.replace(/"/g, '&quot');
  str = str.replace(/'/g, '&#39');
  return str;
}

// テンプレートの文字列と埋め込まれた変数が引数として与えられる
function e(templates, ...values) {
  let result = '';
  for (let i = 0, len = templates.length; i < len; i++) {
    // 埋め込まれた変数だけをescapeHtmlメソッドでエスケープする
    result += templates[i] + escapeHtml(values[i]);
  }
  return result;
}

let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは${name}さん`);



// スコープチェーン
var y = "Global";

function outerFunc() {
  var y = "Local Outer";

  function innerFunc() {
    var z = "Local Inner";
    // Callオブジェクト(innerFunc)を探索後、Loval Innerを返す
    console.log(z);
    // Callオブジェクｔ(outerFunc)を探索後、Local Outerを返す
    console.log(y);
    // グローバルオブジェクトを探索後、未定義のエラーを返す
    console.log(x);
  }
  innerFunc();
}
outerFunc();



// クロージャー
function closure(init) {
  var counter = init;

  // 匿名関数を返す
  return function () {
    return ++counter;
  }
}

// myClosureには匿名関数が保存される
var myClosure = closure(1);
console.log(myClosure());
console.log(myClosure());
console.log(myClosure());
