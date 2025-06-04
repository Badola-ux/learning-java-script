// to check weather the two numbers are equal or not

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
if(num1===num2){
    document.writeln(`${num1} is equal to ${num2}`);
}
if(num1 !== num2){
    document.writeln(`${num1} is not equal to ${num2}`);
}

// to check weather the two person can vote or not

let age = Number(prompt("Enter the age number:"));
if(age>=18){
    document.writeln(`${age} able to vote`);
}
if(age < 18){
    document.writeln(`${age} not able to vote`);
}

// to check weather a number is perfect square or not

let num3 = Number(prompt(" enter the sq number:"));
if(Math.sqrt(num3) % 1 === 0){
    document.writeln(`${num3} is a perfect square:`);
}
if(Math.sqrt(num3)%1 !== 0){
    document.writeln(`${num3} is not a perfect square`);
}

//Write a program to check if a number is positive.

let num4 = Number(prompt(" enter the number:"));
if(num4 > 0 ){
    document.writeln(`${num4} number is positive`);
}
if(num4 <= 0){
    document.writeln(`${num4} number is negative`);
}

//Check if a string contains the letter "a"

let str = prompt("enter the alphabet:");
if(str.includes("a")||str.includes("A")){
    document.writeln(`${str} contains letter a`)
}
if(!str.includes("a")&& !str.includes("A")){
    document.writeln(`${str} does not contain a`)
}

//Determine if a user is 18 years or above older.

let num6 = Number(prompt("enter the age:"));
if(num6 >= 18){
    document.writeln(`${num6} is older`);
}
if(num6 < 18){
    document.writeln(`${num6} is not older`);
}
//Check if a variable isLoggedIn is true.

let isLoggedIn = confirm("Are you logged in? Click OK for Yes, Cancel for No");
if(isLoggedIn === true){
    document.writeln(`${isLoggedIn} user is logged in`);
}
if(isLoggedIn === false){
    document.writeln(`${isLoggedIn} user is not logged in`)
}

//Check if a number is even.

let num8 = Number(prompt(" enter the number:"));
if(num8 % 2 == 0 ){
    document.writeln(`${num8} number is even`);
}
if(num8 % 2 == 0){
    document.writeln(`${num8} number is not even`);
}

//Check if a given year is greater than 2000.

let year = Number(prompt("Enter the year"));
if(year > 2000){
    document.writeln(`${year} is greater than 2000`);
}
if(year < 2000){
    document.writeln(`${year} is not greater than 2000`);
}

//Check if the length of a string is more than 5.

let str2 = prompt("Enter another string:");
if(str2.length > 5){
    document.writeln(`${str2} has more than 5 characters`);
}
if(str2.length <= 5){
    document.writeln(`${str2} not more than 5 characters`);
}

//Check if a temperature is above 30°C.

let temp = Number(prompt("Enter temperature in °C:"));

if (temp > 30) {
    document.writeln(`${temp}°C is hot`);
}
if (temp <= 30) {
    document.writeln(`${temp}°C is not hot`);
}

//Check if a user has a premium account.

let isPremium = confirm("Do you have a premium account:");
if(isPremium){
    document.writeln(`${isPremium} user has a premium account`);
}
if(!isPremium){
    document.writeln(`${isPremium} user do not have premium account`);
}

//Check if a score is greater than or equal to 40 (pass mark).

let num10 = Number(prompt(" enter the number:"));
if(num10 >= 40 ){
    document.writeln(`${num10} person pass`);
}
if(num10 < 40){
    document.writeln(`${num10} person not pass`);
}