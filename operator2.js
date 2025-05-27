// increment and decrement operator 

//var a  = 10;
//var b = a++ + ++a;
//console.log(a,b);

//var a = 10;
//var b = --a - ++a;
//var c = a-- - a-- + --a;
//console.log(a,b,c);

var a = 10;
var b = --a - a--;
var c = a-- - a++ - b++ - ++b;
var d = a-- - a-- - b++ - c-- - c--;
console.log(a,b,c,d);