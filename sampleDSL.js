function createTag(func) {
  // 引数に指定した関数(func)の結果を返す
  return function () {
    // タグ部分の取得
    const strs = arguments[0];
    // 値の取得
    const vals = [].slice.call(arguments, 1);
    return func(strs, vals);
  }
}

function interlace(strs, vals) {
  // 配列のコピーを作成
  vals = vals.slice(0);
  // 開始タグと終了タグを取得
  return strs.reduce(function (all, str) {
    // 開始タグと終了タグで値を挟む
    return all + String(vals.shift()) + str;
  });
}

function htmlEscape(str) {
  str = str.replace(/</g, '<');
  str = str.replace(/>/g, '>');
  return str;
}

const htmlSafe = createTag(function (strs, vals) {
  return interlace(strs, vals.map(htmlEscape));
});


const userInput = 'I <3 ES6!';

console.log(htmlEscape(`<strong>${userInput}</strong>`));
console.log(htmlSafe`<strong>${userInput}</strong>`);