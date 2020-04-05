export {};

class Person {
  public name: string; // デフォルトでpublic
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Andorid extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

const taro = new Person('Taro', 30, 'Japan');
const taroAndorid = new Andorid('Taro', 30, 'Japan');

console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
console.log(taroAndorid.profile());
