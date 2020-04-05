export {};

// function double(value: number): number {
//   return value * 2;
// }

// function double(value: string): string {
//   return value + value;
// }

// ↑は Duplicate function implementation. => シグネチャによる型の定義で回避する。

// シグネチャ
function double(value: number): number;
function double(value: string): string;

// シグネチャで定義した実装を行う。
// シグネチャで型制約をしているので実装では型制約を行わない。（全ての型を受け取れる必要がある。）
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
// console.log(double(null)); // コンパイルエラーになる。型制約がシグネチャが効いてるから。
