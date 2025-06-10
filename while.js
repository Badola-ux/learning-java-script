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
while(num2>0){
    let digit = num2%10;

    if(digit%2===0){
        evenSum = evenSum + digit;
    } else{
        oddSum = oddSum + digit;
    }
    num = Math.floor(num2/10);
}
document.writeln(`${evenSum} sum of even digits`);
document.writeln(`${oddSum} sum of odd digits`);


// WAP to count even and odd digits in a number

let num3 = Number(prompt("enter the number:"));
let evenCount = 0;
let oddCount = 0;
while(num3>0){
    let digit = num3%10;
    if(digit%2===0){
        evenCount++
    }else{
        oddCount++
    }
    num3 = Math.floor(num3/10)
}
document.writeln(`${evenCount} count of even digits`);
document.write(`${oddCount} count of odd digits`);

// WAP to reverse a number

let num4 = Number(prompt("enter the number:"));
let rev = 0;
while(num4 != 0){
    let r = num4 % 10;
    rev = rev * 10 + r;
    num4 = Math.floor(num4/10);
}
document.writeln(`${rev} reverse number`);


/* WAP to check whether a number is NEON number or not
(1,9) */

let num5 = Number(prompt("Enter the number:"));
let square = num5 * num5;
let sum2 = 0;
let count = 0;
while(count!= 0){
    let digit = count%10;
    sum2 = sum2 + digit;
    count = Math.floor(num5/10);
}
if(sum2===num5){
    document.writeln(`${num5} is a neon number`);
}else{
    document.writeln(`${num5} is not a neon number`);
}

/* WAP to check whether a number is Armstrong number or not
(1,153,370,371,407) */
// sum of cube of a single digit is equal to the same number 

let num7 = Number(prompt("Enter the number:"));
let temp = num;
let count2 = 0;
while(temp!=0){
    temp = Math.floor(temp/10);
    count++
}


/* WAP to check whether a number is Palindrome Number or not 
(121,1234321) */

let num6 = Number(prompt("Enter the number:"));
let reverse2 = 0;
while(num6!=0){
    let r = num6 % 10;
    let reverse2 = reverse2 * 10 + r;
    num6 = Math.floor(num6/10);
}
if(num6===reverse2){
    document.writeln(`${num6} is a palindrome`);
}else{
    document.writeln(`${num6} is not a palindrome number`);
}

//after reversing the same number/name/etc will come ()

/* WAP to check whether a number is Magical Number or not
(81,1458,1729) */
/*Example 1: 1729
1+7+2+9=19
1+7+2+9=19
1+9=10
1+9=10
1+0=1
1+0=1
So, 1729 is a Magic Number*/
// or we can say that sum of digit of and then we multiply number and reverse where r is remainder

let n = Number(prompt("Enter the number:"));
let num8 = n;
let sum5 = 0;
while(num!=0){
    let r = num8%10;
    sum5 = sum5 + r;       
    num8 = parseInt(num8/10);
}
let reverse = 0;
num8 = sum5;
while(num8!=0){
    let r = num8%10;
    reverse = reverse * 10 + r;
    num8 = parseInt(num/10);
}
if(num8*reverse===n){
    document.writeln(`${n} is a magical number`);
}else{
    document.writeln(`${n} is not a magical number`);
}