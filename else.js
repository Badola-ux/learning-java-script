// to check weather the two numbers are equal or not
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
if(num1 === num2){
    document.writeln(`${num1} is equal to ${num2}`);
}
else{
    document.writeln(`${num1} is not equal to ${num2}`);
}

// to check weather the two person can vote or not

let num3 = Number(prompt("Enter the candidate:"));
let num4 = Number(prompt("Enter the candidate:"));
if(num3 >= 18 && num4 >= 18){
    document.writeln(`${num3} and ${num4} are able to vote`);
}
else{
    document.writeln(`${num3}and ${num4} are not able to vote`)
}

// to check weather a number is perfect square or not 

let num5 = Number(prompt("Enter the first square number:"));
if(Math.sqrt(num5)%1 === 0){
    document.writeln(`${num5} is a perfect square`);
}
else{
    document.writeln(`${num5} is not a perfect square`);
}

//Write a program to check if a number is even, else print it's odd.

let num6 = Number(prompt("enter the number:"));
if(num6 % 2 === 0){
    document.writeln(`${num6} is an even number`);
}
else{
    document.writeln(`${num6} is an odd number`);
}

//Check if a user is an adult, else print “You are a minor.”

let age = Number(prompt("enter the number:"));
if(age >= 18){
    document.writeln(`${age} user is adult`);
}
else{
    document.writeln(`${age} user is minor`);
}



//Print "Valid Email" if the email includes "@", else "Invalid Email".

let email = prompt("Enter your e-mail:");
if(email === "@"){
    document.writeln(`${email} valid e-mail`);
}else{
    document.writeln(`${email} is not valid`);
}

//If temperature is above 30, print “Hot”, else print “Normal”.

let temp = Number(prompt("enter the number:"));
if(temp > 30){
    document.writeln(`${temp}°C is Hot`);
}
else{
    document.writeln(`${temp}°C is Normal`);
}

//Check if a user is online, else print “User is offline”.

let user = prompt("Is user offline or not? type 'online' or 'offline':");
if(userOnline==="online"){
    document.writeln(`${userOnline} user is online`);
}else{
    document.writeln(`${userOnline} user is offline`);
}

//Check if a light is on, else turn it on.

let lightIsOn = prompt("Is the light on or off? Type 'on' or 'off':");
if(lightIsOn === "on"){
    document.writeln(`${lightIsOn} light is on`);
}
else{
    document.writeln(`${lightIsOn} light is off`);
}


//If number is positive, print “Positive”, else “Negative”.

let num8 = Number(prompt("enter the number:"));
if(num8 > 0){
    document.writeln(`${num8} is a positive number`);
}
else{
    if(num8 === 0){
        document.writeln(`${num8} the number  is 0`)
    }
    else{
        document.writeln(`${num8} is a negative number`)
    }
}

//Check if a password length is >= 8, else print “Too short”.

let passwordLength = Number(prompt("enter the number:"));
if(passwordLength >= 8){
    document.writeln(`${passwordLength} long password`);
}
else{
    document.writeln(`${passwordLength} short password`);
}

//If marks >= 33, print “Pass”, else “Fail”.

let marks = Number(prompt("enter the number:"));
if(marks >= 33){
    document.writeln(`${marks} is pass`);
}
else{
    document.writeln(`${marks} is fail`);
}

//If age is more than 60, print “Senior Citizen”, else “Not a Senior”.

let age2 = Number(prompt("enter the age2"));
if(age2 >= 60){
    document.writeln(`${age2} he/she is a senior citizen`);
}
else{
    document.writeln(`${age2} he/she is not a senior citizen`);
}