// date and time 
// 1 style - new date(): return current date and time

var a = newDate();
console.log(a);
console.log(a.toString());
console.log(a.toDateString());
console.log(a.toTimeString());
console.log(a.toLocalString());
console.log(toLocaleDateString());
console.log(a.toLocaleTimeString());

// 2nd type - new date layer, month, date, hour, minute, second, millisecond
// we have to specify at least two items in date 
// if we pass a single argument in date then it treat as milliseconds 

var b = newDate(2025, 7, 12, 15, 30, 30, 2000);
var c = newDate(2025, 7, 12, 15, 30, 30);
var d = newDate(2025, 7, 12, 15, 30);

console.log(b.toLocalString());
console.log(c.toLocalString());
console.log(d.toLocalString());