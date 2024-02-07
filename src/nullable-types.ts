export {};

// tsconfig.json change "strictNullChecks": true -> false if not use {number | null}
let profile: { name: string; age: number | null } = {
  name: 'Taro',
  age: null,
};
