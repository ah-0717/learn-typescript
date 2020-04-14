export {};

class Mahotsukai {}

class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

// 複数implementsできる
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionauzn');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
