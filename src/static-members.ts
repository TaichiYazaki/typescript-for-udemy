export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Yamada';

  static work() {
    // return 'Hello!';
    return `Hello! ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgramer);

console.log(Me.isProgramer);

console.log(Me.work());
