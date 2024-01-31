export {};

const kansu = (): number => 20;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

console.log(typeof numberUnknown);

if (typeof numberUnknown === 'number') {
  let sunUnknown = numberUnknown + 10;
}
