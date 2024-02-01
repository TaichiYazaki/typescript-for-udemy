export {};

class VisaCard {
  constructor(readonly owner: string) {}
}

let myVisaCard = new VisaCard('Taro');
console.log(myVisaCard.owner);

// myVisaCard.owner = 'Tim';
