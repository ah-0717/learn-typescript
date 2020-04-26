export {};

let name: any = 'hoge';

// let length: number = name.length;

// let length: number = name.length as number;

let length: number = (name as string).length;

// let length: number = (<string>name).length;

// length = 'a';
