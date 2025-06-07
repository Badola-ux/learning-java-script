// wap to print day name when the user enter day number

let dayNumber = Number(prompt("Enter the day number (1-7):"));
if(dayNumber === 1){
    document.writeln(`${dayNumber} Monday`);
}
else if(dayNumber === 2){
    document.writeln(`${dayNumber} Tuesday`);
}
else if(dayNumber === 3){
    document.writeln(`${dayNumber} Wednesday`);
}
else if(dayNumber === 4){
    document.writeln(`${dayNumber} Thursday`);
}
else if(dayNumber === 5){
    document.writeln(`${dayNumber} Friday`);
}
else if(dayNumber === 6){
    document.writeln(`${dayNumber} Saturday`);
}
else if(dayNumber === 7){
    document.writeln(`${dayNumber} Sunday`);
}
else{
    document.writeln(`${dayNumber} Invalid day number`);
}

// wap to make a simple calculator

let num1  = Number(prompt("Enter the first number:"));
let operator = prompt("Enter the operator(+,-,*,/):");
let num2 = Number(prompt("Enter the second number:"));
if(operator === "+"){
    document.writeln(`${num1} + ${num2} = ${num1 + num2} add the two number:`);
}
else if(operator === "-"){
    document.writeln(`${num1} - ${num2} = ${num1 - num2} subtract the two number:`);
}
else if(operator === "*"){
    document.writeln(`${num1} * ${num2} = ${num1 * num2} multiply the two number:`);
}
else if(operator === "/"){
    document.writeln(`${num1} / ${num2} = ${num1 / num2} divide the two number:`);
}
else{
    document.writeln(`${"Invalid operator"}`);
}

// wap to check weather an entered character is lower case vowel, lower case consonant, upper case consonant, digit, space or any special character

var ch = prompt("Enter the single character:");
if(ch.length!= 1){
    document.writeln(`"${ch}" is invalid. please enter the single character:`);
}
else if(ch>='a'&&ch<='z'){
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        document.writeln(`${ch} is a lower case Vowel`);
    }else{
        document.writeln(`${ch} is a lower case consonant`);
        }
}
else if(ch>='A'&&ch<='Z'){
    if(ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U'){
        document.writeln(`${ch} is a upper case Vowel`);
    }else{
        document.writeln(`${ch} is a upper case consonant`);
        }
}
else if(ch>='0'&&ch<='9'){
    document.writeln(`${ch} is a digit`);
}
else if(ch==' '){
    document.writeln(`${ch} is a space`);
}
else{
    document.writeln(`${ch} is a character`);
}

//Check if a number is positive, negative, or zero.

let num3 = Number(prompt("Enter the number:"));
if(num === " "){
    document.writeln(`${num} is a positive number`);
}
else if(num === "-"){
    document.writeln(`${num3} is a negative number`);
}
else if(num === 0){
    document.writeln(`${num3} is a zero`);
}
else{
    document.writeln(`${num3} is invalid`);
}

//Print grade: if marks >= 90 A+, else if >= 75 A, else if >= 60 B, else Fail.

let marks = Number(prompt("Enter the Marks:"));

if (marks >= 90) {
    document.writeln(`${marks} got A+`);
}
else if (marks >= 75) {
    document.writeln(`${marks} got A`);
}
else if (marks >= 60) {
    document.writeln(`${marks} got B`);
}
else {
    document.writeln(`${marks} is fail`);
}


//Determine if a day number (1–7) is Monday to Sunday.

let dayNumber2 = Number(prompt("Enter the day number (1-7):"));
if(dayNumber2 === 1){
    document.writeln(`${dayNumber2} Monday`);
}
else if(dayNumber2 === 2){
    document.writeln(`${dayNumber2} Tuesday`);
}
else if(dayNumber2 === 3){
    document.writeln(`${dayNumber2} Wednesday`);
}
else if(dayNumber2 === 4){
    document.writeln(`${dayNumber2} Thursday`);
}
else if(dayNumber2 === 5){
    document.writeln(`${dayNumber2} Friday`);
}
else if(dayNumber2 === 6){
    document.writeln(`${dayNumber2} Saturday`);
}
else if(dayNumber2 === 7){
    document.writeln(`${dayNumber2} Sunday`);
}
else{
    document.writeln(`${dayNumber2} Invalid day number`);
}

//If age < 13, print “Child”; else if < 20, “Teenager”; else “Adult”.

let age = Number(prompt("Enter the age:"));
if(age<13){
    document.writeln(`${age} is Child`);
}
else if(age<20){
    document.writeln(`${age} is Teenager`);
}
else{
    document.writeln(`${age} is Adult`)
}

//Check if the month number is 1 for Jan, 2 for Feb, etc., else print “Invalid”.

let month = Number(prompt("Enter the month number:"));
if(month === 1){
    document.writeln(`${month} month is january`);
}
else if(month === 2){
    document.writeln(`${month} month is february`);
}else{
    document.writeln(`${month} is invalid`);
}

//Check a number: < 10, = 10, > 10.

let num4 = Number(prompt("Enter the number:"));
if(num<10){
    document.writeln(`${num} number is smaller then 10`);
}
else if(num=10){
    document.writeln(`${num} is equal to 10`);
}
else if(num>10){
    document.writeln(`${num} is greater then 10`);
}else{
    document.writeln(`${num} is Invalid`);
}

//If input is "admin", print “Welcome Admin”; else if "user", print “Hello User”; else “Unknown”.
let input = prompt("Enter your role:");

if (input === "admin") {
    document.writeln("Welcome Admin");
}
else if (input === "user") {
    document.writeln("Hello User");
}
else {
    document.writeln("Unknown");
}


//If battery percent > 80, “High”; > 30, “Medium”; else “Low”.

let batteryPercent = Number(prompt("Enter the percent:"));

if (batteryPercent > 80) {
    document.writeln(`${batteryPercent}% - percentage is high`);
}
else if (batteryPercent > 30) {
    document.writeln(`${batteryPercent}% - percentage is medium`);
}
else {
    document.writeln(`${batteryPercent}% - percentage is low`);
}

//If traffic light is "red", print “Stop”; "yellow", “Ready”; "green", “Go”; else “Invalid”.

let light = Number(prompt("Enter the color of street light:"));

if (light === red) {
    document.writeln(`${light} "stop"`);
}
else if (light === yellow) {
    document.writeln(`${light} "ready"`);
}
else if(light === green) {
    document.writeln(`${light} "go"`);
}

//Check if a number is divisible by 2, else if by 3, else print “Not divisible by 2 or 3”.

let num5 = Number(prompt("Enter the number:"));

if (num5 % 2 === 0 && num5 % 3 === 0) {
    document.writeln(`${num5} is divisible by both 2 and 3`);
}
else if (num5 % 2 === 0) {
    document.writeln(`${num5} is divisible by 2 but not by 3`);
}
else if (num5 % 3 === 0) {
    document.writeln(`${num5} is divisible by 3 but not by 2`);
}
else {
    document.writeln(`${num5} is not divisible by 2 or 3`);
}
