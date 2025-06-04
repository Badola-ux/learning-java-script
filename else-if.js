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
    document.writeln(`${dayNumber} Invalid day number`)
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

//Print grade: if marks >= 90 A+, else if >= 75 A, else if >= 60 B, else Fail.

//Determine if a day number (1–7) is Monday to Sunday.

//If age < 13, print “Child”; else if < 20, “Teenager”; else “Adult”.

//Check if the month number is 1 for Jan, 2 for Feb, etc., else print “Invalid”.

//Check a number: < 10, = 10, > 10.

//If input is "admin", print “Welcome Admin”; else if "user", print “Hello User”; else “Unknown”.

//If battery percent > 80, “High”; > 30, “Medium”; else “Low”.

//If traffic light is "red", print “Stop”; "yellow", “Ready”; "green", “Go”; else “Invalid”.

//Check if a number is divisible by 2, else if by 3, else print “Not divisible by 2 or 3”.