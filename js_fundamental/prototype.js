var Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member("tanaka", "tarou");

Member.prototype.getName = function () {
  return this.firstName + '' + this.lastName;
};

console.log(mem.getName());