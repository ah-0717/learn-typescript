export {};

namespace Japanese {
  export namespace Tokyo {
    export class Parson {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Parson {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Parson {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Parson('aaa');
const meOsaka = new Japanese.Osaka.Parson('aaa');

const aaa = new English.Parson('a', 'a', 'a');
