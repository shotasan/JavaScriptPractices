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

