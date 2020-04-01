export {};

let profile = ['hoge', 43];
// 共用型だと制約がゆるい
profile = [43, 'hoge'];

let profile2: [string, number] = ['hoge', 43];

profile2 = [23, 'hoge'];
