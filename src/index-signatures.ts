export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { underTwenty: false };

profile.name = 'a';
profile.age = 123;
profile.nationality = 'Japan';
