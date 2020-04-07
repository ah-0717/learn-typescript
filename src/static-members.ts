export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'aaa';
  static lastName: string = 'bbb';
  static work() {
    return `Hey! ${this.firstName}`;
  }
}

// const me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);

console.log(Me.work());
