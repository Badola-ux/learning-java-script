// wap to print the sum of even and odd numbers in specific range

/*without return value and without parameter*/

function checkEvenOdd() {
    let num = Number(prompt("Enter the number:"));
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenSum = evenSum + i;
        } else {
            oddSum = oddSum + i;
        }
    }
    document.writeln(`Sum of even numbers: ${evenSum}`);
    document.writeln(`Sum of odd numbers: ${oddSum}`);
}

// wap to print the factorial of any specific number

/*with return value and without parameter*/

function calculateFactorial(){
    let num2 = Number(prompt("Enter the second number:"));
    let f = 1;
    for(let i = num2; i>=1; i--){
        f=f*i;
    }
    return `Factorial of ${num2} = ${f}`;
}
document.writeln(calculateFactorial());

// wap to to print sum of number in a range

/*without return value and with parameter*/

function addRange(start,end){
    let sum = 0;
    for(let i = start; i <= end; i++){
        sum = sum + i;
    }
        document.writeln(`the sum from ${start} to ${end} is ${sum}`);
}
let start = Number(prompt("Enter the start number:"));
let end = Number(prompt("Enter the end number:"));
addRange(start,end);

// wap to check weather it is perfect number or not

/*with return value and with parameter*/

function perfectNumber(num3){
    let sum = 0;
    for(let i = 1; i <= num3/2; i++){
        if(num3%i==0){
            sum = sum + i;
        }
    }
    return sum === num3;
}
let num3 = Number(prompt("Enter the number:"));
if(perfectNumber(num3)){
    document.writeln(`${num3} is a perfect number`);
}else{
    document.writeln(`${num3} is not a perfect number`);
}

// wap to check weather a number is a perfect square or not

/*without return value and without parameter*/

function checkPerfectSquare(){
    let num4 = Number(prompt("Enter the number:"));
    if(Math.sqrt(num4)%1===0){
        document.writeln(`${num4} is a perfect square`);
    }else{
        document.writeln(`${num4} is not a perfect square`);
    }
}
checkPerfectSquare();

// wap to check weather a prime or not 

/*with return value without parameter*/

function checkPrime(){
    let num5 = Number(prompt("Enter the number:"));
    let isPrime = true;
    if (num5 < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num5); i++) {
            if (num5 % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime ? `${num5} is prime` : `${num5} is not prime`;
}
document.writeln(checkPrime());

// wap to print all perfect number (5, 28, 496, 8128) in a range

/*without return value with parameter*/

function printPerfectNumbers(range) {
    for (let num = 1; num <= range; num++) {
        let sum = 0;
        for (let i = 1; i <= num / 2; i++) {
            if (num % i === 0) {
                sum = sum + i;
            }
        }
        if (sum === num) {
            document.writeln(`${num} is a perfect number<br>`);
        }
    }
}
let num7 = Number(prompt("Enter the number:"));
printPerfectNumbers(num7);


// WAP to calculate sum of even and odd digits of a specific number

/*with return value with parameter*/

function sumEvenOddDigits(num8) {
    let evenSum = 0;
    let oddSum = 0;
    while (num8 > 0) {
        let digit = num8 % 10;
        if (digit % 2 === 0) {
            evenSum = evenSum + digit;
        } else {
            oddSum = oddSum + digit;
        }
        num8 = Math.floor(num8 / 10);
    }
    return {
        even: evenSum,
        odd: oddSum
    };
}
let num9 = Number(prompt("Enter the number:"));
let result = sumEvenOddDigits(num9);
document.writeln(`Sum of even digits: ${result.even}`);
document.writeln(`Sum of odd digits: ${result.odd}`);

// WAP to count even and odd digits in a number (without return value and without parameter)

function countEvenOddDigits() {
    let num10 = Number(prompt("Enter the number:"));
    let evenCount = 0;
    let oddCount = 0;
    while (num10 > 0) {
        let digit = num10 % 10;
        if (digit % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
        num10 = Math.floor(num10 / 10);
    }
    document.writeln(`Count of even digits: ${evenCount}<br>`);
    document.writeln(`Count of odd digits: ${oddCount}`);
}
countEvenOddDigits();


// WAP to reverse a number(with return value without parameter)

function reverseNumber() {
    let num11 = Number(prompt("Enter the number:"));
    let rev = 0;
    while (num11 !== 0) {
        let r = num11 % 10;
        rev = rev * 10 + r;
        num11 = Math.floor(num11 / 10);
    }
    return rev;
}
document.writeln(`Reversed number is: ${reverseNumber()}`);

/* WAP to check whether a number is NEON number or not
(1,9) (without return value but with parameter)*/

function isNeonNumber(num12) {
    let square = num12 * num12;
    let sum2 = 0;
    let count = square;
    while (count !== 0) {
        let digit = count % 10;
        sum2 = sum2 + digit;
        count = Math.floor(count / 10);
    }
    if (sum2 === num12) {
        document.writeln(`${num12} is a Neon number`);
    } else {
        document.writeln(`${num12} is not a Neon number`);
    }
}
let num12 = Number(prompt("Enter the number:"));
isNeonNumber(num12);

/* WAP to check whether a number is Armstrong number or not
(1,153,370,371,407)(with return value with parameter) */

function isArmstrong(num13) {
    let temp = num13;
    let count2 = 0;
    let sum = 0;
    while (temp !== 0) {
        temp = Math.floor(temp / 10);
        count2++;
    }
    temp = num13;
    while (temp !== 0) {
        let digit = temp % 10;
        sum = sum + Math.pow(digit, count2);
        temp = Math.floor(temp / 10);
    }
    return sum === num13;
}
let num13 = Number(prompt("Enter the number:"));
if (isArmstrong(num13)) {
    document.writeln(`${num13} is an Armstrong number`);
} else {
    document.writeln(`${num13} is not an Armstrong number`);
}


/* WAP to check whether a number is Palindrome Number or not 
(121,1234321)(without return value without parameter)*/

function checkPalindrome() {
    let num14 = Number(prompt("Enter the number:"));
    let original = num14; // store original number
    let reverse2 = 0;
    while (num14 !== 0) {
        let r = num14 % 10;
        reverse2 = reverse2 * 10 + r;
        num14 = Math.floor(num14 / 10);
    }
    if (original === reverse2) {
        document.writeln(`${original} is a palindrome number`);
    } else {
        document.writeln(`${original} is not a palindrome number`);
    }
}
checkPalindrome();

/* WAP to check whether a number is Magical Number or not
(81,1458,1729) */
/*Example 1: 1729
1+7+2+9=19
1+7+2+9=19
1+9=10
1+9=10
1+0=1
1+0=1
So, 1729 is a Magic Number (convert with return value with parameter)*/

function isMagicNumber(n) {
    function digitSum(num15) {
        let sum = 0;
        while (num15 > 0) {
            sum = sum + num15 % 10;
            num15 = Math.floor(num15 / 10);
        }
        return sum;
    }
    let result = n;
    while (result > 9) {
        result = digitSum(result);
    }
    return result === 1;
}
let n = Number(prompt("Enter the number:"));
if (isMagicNumber(n)) {
    document.writeln(`${n} is a Magic number`);
} else {
    document.writeln(`${n} is not a Magic number`);
}

// wap to check weather the number is armstrong number or not

/* without return value and without parameter*/

function checkMagicNumber() {
    let n = Number(prompt("Enter the number:"));
    let sum = 0;
    for (let num = n; num != 0; ) {
        let digit = num % 10;
        sum = sum + digit;
        num = parseInt(num / 10);
    }
    let reverse = 0;
    for (let temp = sum; temp != 0; ) {
        let digit = temp % 10;
        reverse = reverse * 10 + digit;
        temp = parseInt(temp / 10);
    }
    if (sum * reverse === n) {
        document.writeln(`${n} is a magical number`);
    } else {
        document.writeln(`${n} is not a magical number`);
    }
}
checkMagicNumber();


// wap to check weather the number is NEON number or not 

/* with return value value with parameter*/

function neonNumber(num5) {
    let square = num5 * num5;
    let sum2 = 0;
    for (let i = 0; i < 1; i++) {
        for (let temp = square; temp != 0; ) {
            let digit = temp % 10;
            sum2 = sum2 + digit;
            temp = Math.floor(temp / 10);
        }
    }
    return sum2 === num5;
}
let number = Number(prompt("Enter the number:"));
if (neonNumber(number)) {
    document.writeln(`${number} is a Neon number`);
} else {
    document.writeln(`${number} is not a Neon number`);
}
// wap to check weather the number is magical number or not 

/*with return value with parameter*/

function isMagicNumber(n) {
    let sum5 = 0;
    for (let temp = n; temp != 0; ) {
        let r = temp % 10;
        sum5 = sum5 + r;
        temp = parseInt(temp / 10);
    }
    let reverse = 0;
    for (let temp = sum5; temp != 0; ) {
        let r = temp % 10;
        reverse = reverse * 10 + r;
        temp = parseInt(temp / 10);
    }
    return (sum5 * reverse === n);
}
let num = Number(prompt("Enter the number:"));
if (isMagicNumber(num)) {
    document.writeln(`${num} is a magical number`);
} else {
    document.writeln(`${num} is not a magical number`);
}