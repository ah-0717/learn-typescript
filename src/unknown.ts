export {};

const kansu = (): number => 2;

let numberAny: any = kansu;
let numberUnknown: unknown = kansu;

let sumAny = numberAny + 12;

// let sumUnknown = numberUnknown + 10; // err

// type guard
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
