// Input     Output
// 2         248
// 3         3927
// 4         41664

const prompt = require("prompt-sync")();
let num = prompt("Enter number");
let res = "";
n = Number(num);

for (let i = 1; i <= 3; i++) {
  res = res + n ** i;
}
console.log(res);
