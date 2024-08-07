let a = 5;
let b = 7;

let c = a;
a = b;
b = c;
console.log(a, b);     //cl= 7 5

let x = 2;
let y = 6;
[x, y] = [y, x];
console.log(x, y);     //cl= 6 2