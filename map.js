let m = new Map();
m.set("dog", "wanwan");
m.set("cat", "nya-");
m.set("mouse", "tyu--");

print(m.size);
print(m.get("dog"));
print(m.has("cat"));

for (let key of m.keys()) {
  print(key);
}

for (let value of m.values()) {
  print(value);
}

for (let [key, value] of m) {
  print(`${key}は${value}`);
}

m.delete("dog");
print(m.size);

m.clear();
print(m.size);