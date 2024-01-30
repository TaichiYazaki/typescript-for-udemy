export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojirets: Mojiretsu = 'Hello';

const example1 = {
  name: 'taro',
  age: 20,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'taro',
  age: 20,
};

type Profile2 = typeof example1;
