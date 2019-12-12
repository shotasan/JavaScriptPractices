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

