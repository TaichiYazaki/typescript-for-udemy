export {};

type Profile = {
  name: string;
  age: number;
};

type PertialProfile = Partial<Profile>;

type PropertityTypes = keyof Profile;

type Optional<T> = {
  [P in keyof T]?: T[P] | null;
};
type OptionalProfile = Optional<Profile>;
