// Input     Output
// 10        1001000
// 11        1211331
// 12        1441728


const prompt = require("prompt-sync")();
let n = prompt("Enter number");
let result="";
let num=Number(n)

for(i=2;i<=3;i++){
    result=result + (num**i)




}
console.log(result)