export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Taro',
  age: 20,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Jiro',
  age: 30,
};

// friend.age++;
