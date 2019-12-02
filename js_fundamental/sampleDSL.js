const expand = function (parts, items) {
  const start = parts[0];
  const end = parts[1];
  const mapped = items.map(function (item) {
    return start + item + end;
  });
  return mapped.join('');
}

const fruits = ['apple', 'orange', 'banana'];
const list = expand`<li>${fruits}</li>`;
console.log(list);