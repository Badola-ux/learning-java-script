var a = [[10,20,30],[40,50,60],70,[80,90,100]]
console.log(a);
console.log(a.flat(1));
console.log(a.flat(1).map(x => x*5));

var b = [[[10,20,30],[40,50,60],70,[80,90,100]]];
console.log(b);
console.log(b.flat(2));
console.log(b.flat(2).map(x => x*5));