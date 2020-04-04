export {};

type ObjectType = { name: string; age: number };

let object: ObjectType = {
  name: 'aaa',
  age: 123
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object2: ObjectInterface = {
  name: 'aaa',
  age: 123
};
