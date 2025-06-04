// wap to print the sum of even and odd numbers in specific range

let num = Number(prompt("Enter the number:"));
for(let i = 1; i <= num ; i++){
    if(num % 2 === 0){
        document.writeln(`${i} is a even number`);
    }else{
        document.writeln(`${i} is a odd number`);
    }
}

// wap to print factorial of any specific number

let num6 = Number(prompt("Enter the number:"));
let f = 1;
for(let i = num6; i >= 1; i--){
    f = f*1;
}
document.writeln(`factorial of ${num6}=${f}`)

// wap to print sum of number in a range

// wap to check weather it is perfect number or not 

let num4 = Number(prompt("Enter the number:"));
let sum = 0;
for(let i = 1; i<= num/2; i++){
    if(num % i == 0){
        sum = sum + i;
    }
}
if(sum == num){
    document.writeln(`${num4} is a perfect number`);
}
else{
    document.writeln(`${num4} not a perfect number`);
}

// wap to check weather a number is a perfect square or not

let num5 = Number(prompt("Enter the number:"));
for(let i = 1; i <= num5; i++){
    if(Math.sqrt(num5)%1 === 0){
        document.writeln(`${num5} is a perfect square`);
    } else{
        document.writeln(`${num5} is not a perfect square`);
    }
}

// wap to check weather a prime or not 

let num3 = Number(prompt("Enter the number:"));
var hi = false;
for(let i=2; i<=num3; i++){
    if(num%i == 0){
        hi = true;
        break
    }
}
if(hi === false && num >= 2){
    document.writeln(`${num} is prime`);
}else{
    document.writeln(`${num} is not prime`);
}