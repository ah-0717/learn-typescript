export {};

type Mojiretsu = string;

const fooString: string = 'aaa';
const fooMojiretsu: Mojiretsu = 'bbb';

const example1: Profile = {
  name: 'aaa',
  age: 12
};

type Profile = {
  name: string;
  age: number;
};

// 動的に型の別名を作成できる
type Profile2 = typeof example1;
