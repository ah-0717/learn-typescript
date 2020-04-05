export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('me', 12);
console.log(me);
