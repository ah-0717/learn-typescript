export {};

// 制約が甘い
let profile1: object = { name: 'hoge' };
profile1 = { birthYear: 2000 };

// 通常はこっち
let profile2: {
  name: string;
} = { name: 'hoge' };
// profile2 = { birthYear: 2000 };
profile2 = { name: 'aaa' };
