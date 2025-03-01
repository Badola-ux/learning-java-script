{
    const PI = 3.14;
console.log(PI);
}

{
    let a = 10; // number 
    let price = 100.50; // number
    let fullName = "tony stark"; // string
    isfollow = true; // boolean
    let x = null; // null 
    let b = bigint("123"); // big int 
    let c = Symbol("brother") // symbol
} 

// object 
const student = {
fullName: "Andrew Tye",
age: 23,
CGPA: 7,
ispass: true,
} ;

// to print 
console.log(student["age"]);
console.log(student["CGPA"]);
console.log(student["fullName"]);

// if we have to increase the age 

student["age"] = student["age"] + 1
console.log(student["age"]);

// create a constant object called product to store information

const product = {
    title: " ball pen",
    rating: 4, 
    Offer: 5,
    price: 270,
} ;

console.log(product);

// create a const object called profile to store information shown in the picture 

const profile = { 
    username: "Yash Badola",
    isFollow: false,
    followers: 302,   
    following: 147,
} ;

console.log(typeof profile["username"]);

// Arithmetic operator 
{
let a = 5;
let b = 6;
}
console.log("a = " , a & "b = " , b);
console.log("a + b =" , a + b);
console.log("a - b = " , a - b);
console.log("a * b =" , a * b);
console.log("a / b = " , a / b);
console.log("a % b = " , a % b);
console.log("a ** b =" , a ** b); // 5^6

// conditional statement

let age = 20;

if (age >= 18) {
    console.log("you can vote");
}

if (age < 18) {
    console.log("you cannot vote")
}

// conditional statement
let mode = "dark " ;
let color;

if (mode === dark){
    color = "black";
}

if (mode === light){
    color = "black" ;
}

// or we can write like this  

let mode = " light ";
let color;

if (mode === dark){
    color = "black" 
} else {
    color = "white"
}

console.log(color);

// odd or even

let num = 10;
if (num % 2 === 0) {
    console.log(num," is even");
} else {
console.log(num,"is odd");
}

// condition statement only 
let mode = " dark ";
let color;

if(mode === dark){
color = "black";
} else if(mode === blue) {
    color = " blue ";
} else if(mode === " pink"){
    color = "pink";
} else {
    color = "white";
}
console.log(color);

// ternary operator ( ? : ; ) 
// compact if ese statement  (write code in shortest way)
let age = 20;
let result = age >= 18 ? "adult": "not adult";
console.log(result);

// one time pop up (alert)
alert("hello");

// one time pop up (prompt)

let name = prompt("hello");
console.log(name);

// q> number is multiple of 5 using prompt

let num = prompt("enter the number:");
if (num % 5 === 0){
    console.log(num, "is a multiple of 5");
} else{
    console.log(num,"is not a multiple of 5");
}


// loops

// for loops

for(let i = 1 ; i <= 5 ; i ++ ){
    console.log("hello guyz")
}

//calculate the sum

let sum = 0;
for(let i = 1 ; i <= 5 ; i ++){
    sum = sum + i  
}
console.log("sum = ", sum);
console.log("loop has ended");
// while loops 
let i = 1;
while(i <= 5 ){
console.log("i=",i);
    sum = i ++;
}
// do while loop
let i = 1;
do{
    console.log("i am good what about you");
    sum = i ++ ; 
} while(i <= 10);

// for-of loop (for string and arrays)

let str = " javascript";
let size = 0;
for (let val of str);{
    console.log("val=",val);
    size++
} 
console.log("string size = ",size); //10

// for-in loops(objects and arrays)

let student = {
name: "Steven",
age: 23,
CGPA: 7.5,
isPass: true,
};
for(let key in student){
    console.log(" key " , key , " value = ", student[key]);
}
