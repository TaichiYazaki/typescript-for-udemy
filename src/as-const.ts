export {};

let name: string = 'Taro';

name = 'Jiro';

let nickname = 'Saburo' as const;
nickname = 'Saburo';

let profile = {
  name: 'Atsushi',
  height: 175,
} as const;

// profile.name = 'Atsushi';
// profile.height = 175;
