/*var a = Number(prompt("Enter the first number:"));
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
`);*/

// wap to print the area of circle 

/*let r  = Number(prompt("enter the radius:"));
let area = Math.PI*r*r;
document.writeln(`area of circle:${area.toFixed(2)}`);*/

// wap to print the area of rectangle 

/*let length = Number(prompt("enter the length:"));
let breadth = Number(prompt("enter the breadth:"));
let area = length*breadth;
document.writeln(`area of rectangle:${area}`);*/

// wap to print the pattern (last row 5)

/*let rows = 5;
for(let i = 1; i <= rows; i++){
    document.writeln(`${'*'.repeat(i)}<br>`);
}*/

// wap to print the surface area of cuboid 

/*let l = Number(prompt("enter the length:"));
let b = Number(prompt("enter the breadth:"));
let h = Number(prompt("enter the height:"));
let surfaceArea = 2*(l*b+b*h+h*l);
document.writeln(`surface area of cuboid:${surfaceArea}`);*/

// wap to print area of square 

/*let side = parseInt(prompt("enter the side:"));
let area = side * side;
document.writeln(`area of square:${area}`);*/

// wap to swap of 2 number

/*let a = parseInt(prompt("enter the number a:"));
let b = parseInt(prompt("enter the number b:"));
let temp = a;
a = b;
b = temp;
document.writeln(`after swapping a = ${a} and b = ${b}`);*/

// wap to calculate the temp. from fahrenheit to celsius

/*let fahrenheit = Number(prompt("enter the fahrenheit:"));
let celsius = (fahrenheit - 32) * 5/9;
document.writeln(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);*/

// wap to calculate the temp. from celsius to fahrenheit

let celsius = Number(prompt("enter the celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
document.writeln(`${celsius}°C is equal to ${fahrenheit}°F`);