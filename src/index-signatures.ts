export {};

interface Profile {
  underTwenty: boolean;
  name: string;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Taro', underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Taro';
profile.age = 20;
profile.nationality = 'Japan';
