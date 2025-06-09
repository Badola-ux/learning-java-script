/*let i = 1;

while (i <= 5) {
console.log("Count is: " + i);
i++;
}*/

// fibonacci series

let a = 0;
let b = 1;
let sum = a + b;
let num = Number(prompt("Enter the number:"));
document.writeln(`${a} ${b}`);
while(sum<=num){
    document.writeln(`${sum}`);
    a = b; 
    b = sum;
    sum = a + b;
}

// WAP to calculate sum of even and odd digits of a specific number

let num2 = Number(prompt("enter the number:"));
let evenSum = 0;
let oddSum = 0;
while(num>0){
    let digit = num%10;

    if(digit%2===0){
        evenSum = evenSum + digit;
    } else{
        oddSum = oddSum + digit;
    }
    num = Math.floor(num/10);
}
document.writeln(`${evenSum} sum of even digits`);
document.writeln(`${oddSum} sum of odd digits`);


// WAP to count even and odd digits in a number

let num3 = Number(prompt("enter the number:"));
let evenCount = 0;
let oddCount = 0;
while(num>0){
    let digit = num%10;
    if(digit%2===0){
        evenCount++
    }else{
        oddCount++
    }
    num = Math.floor(num/10)
}
document.writeln(`${evenCount} count of even digits`);
document.write(`${oddCount} count of odd digits`);

// WAP to reverse a number

let num4 = Number(prompt("enter the number:"));
let rev = 0;
while(num4 != 0){
    let r = num % 10;
    rev = rev * 10 + r;
    num4 = Math.floor(num4/10);
}
document.writeln(`${rev} reverse number`);


/* WAP to check whether a number is NEON number or not
(1,9) */

/* WAP to check whether a number is Armstrong number or not
(1,153,370,371,407) */

/* WAP to check whether a number is Palindrome Number or not
(121,1234321) */

/* WAP to check whether a number is Magical Number or not
(81,1458,1729) */