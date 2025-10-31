// date and time 
// 1 style - new date(): return current date and time

var a = new Date();
console.log(a);
console.log(a.toString());
console.log(a.toDateString());
console.log(a.toTimeString());
console.log(a.toLocaleString());
console.log(a.toLocaleDateString());
console.log(a.toLocaleTimeString());

// 2nd type - new date layer, month, date, hour, minute, second, millisecond
// we have to specify at least two items in date 
// if we pass a single argument in date then it treat as milliseconds 

var b = new Date(2025, 7, 12, 15, 30, 30, 2000);
var c = new Date(2025, 7, 12, 15, 30, 30);
var d = new Date(2025, 7, 12, 15, 30);

console.log(b.toLocaleString());
console.log(c.toLocaleString());
console.log(d.toLocaleString());

// 3rd style:: new Date(millisecond)

var e = new Date(123456789000000);
console.log(e.toLocaleString());

// 4th style : new Date(datesString)

var f = new Date("2025/08/12 15:30:33");
console.log(f.toLocaleString());