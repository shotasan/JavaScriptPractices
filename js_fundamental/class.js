// クラス構文
class Member {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member("Tarou", "Yamada");
console.log(m.getName());


// get/set構文によるプロパティの定義

class Member {
  constructor() {
    let _firstName;
    let _lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getName() {
    return this.lastName + this.firstName;
  }
}

let m = new Member();
m.firstName = "yamada";
m.lastName = "tarou";
console.log(m.firstName);
console.log(m.lastName);
console.log(m.getName());