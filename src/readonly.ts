export {};

class VisaCard {
  // readonly owner: string;

  // constructor(owner: string) {
  //   this.owner = owner;
  // }

  // readonlyがある場合はpublicを省略できる
  constructor(public readonly owner: string) {
    this.owner = owner;
  }
}

const myVisaCard = new VisaCard('aaa');
// myVisaCard.owner = 'bbb';
