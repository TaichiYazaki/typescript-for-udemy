export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
  debugPrint() {
    return `secretNumber:${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Taro', 1234567890);
console.log(card.owner);
card.secretNumber = 10000;
console.log(card.debugPrint());
