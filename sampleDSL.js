function createTag(func) {
  return function () {
    const strs = arguments[0];
    const vals = [].slice.call(arguments, 1);
    return func(strs, vals);
  }
}

function interlace(strs, vals) {
  // 配列のコピーを作成
  vals = vals.slice(0);
  return strs.reduce(function (all, str) {
    return all + String(vals.shift()) + str;
  });
}

const processNormally = createTag(interlace);

const text = 'Click Me';
const link = processNormally`<a>${text}</a>`;
console.log(link);