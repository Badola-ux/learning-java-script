var a = Number(prompt("Enter the first number:"));
var b = Number(prompt("Enter the second number:"));
var sum = a + b;
document.writeln(`${a} + ${b} = ${sum} <br>`);

var p = Number(prompt("Enter the principal amount:"));
var r = Number(prompt("Enter the rate of interest:"));
var t = Number(prompt("Enter the time in years:"));
var si = (p * r * t) / 100;
var total = p + si;
var emi = total / (t * 12);

document.writeln(`
    Principal Amount : ${p} <br>
    Rate             : ${r}% <br>
    Time             : ${t} years <br>
    Simple Interest  : ₹${si.toFixed(0)} <br>
    Total Amount     : ₹${total.toFixed(0)} <br>
    EMI Amount       : ₹${emi.toFixed(0)}
`);
