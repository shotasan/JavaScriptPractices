var Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member("tanaka", "tarou");

// 暗黙の参照によりインスタンス生成後にメソッドを追加できる
Member.prototype.getName = function () {
  return this.firstName + '' + this.lastName;
};

console.log(mem.getName());



// インスタンスにプロパティが存在する場合はプロタイプオブジェクトへの参照は行われない
Member.prototype.sex = "Man";
var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + mem2.sex);

mem2.sex = "Woman";

console.log(mem1.sex + mem2.sex);
