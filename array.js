// wap to calculate the sum of even and odd elements of an array 

let arr = [4,5,6,10,20,30,40,50,23,34,77,100];
let evenSum = 0;
let oddSum = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i]%2===0){
        evenSum = evenSum + arr[i];
    }else{
        oddSum = oddSum + arr[i];
    }
}
console.log(`${evenSum} sum of even elements`);
console.log(`${oddSum} sum of odd elements`);

// wap to count and print prime number from an array 

let arr1 = [10, 5, 7, 13, 8, 1, 2, 11];
let count = 0;
for(let i = 0; i < arr1.length; i++){
    let num = arr1[i];
    let isPrime = true;

if(num<2){
isPrime = false;
}else{
    for(let j = 2; j <= Math.sqrt(num); j++){
        if(num%j===0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log(`${num} is prime`);
    count++
}
}
console.log(`${count} total prime number`);

// wap to find the smallest element from an array without sorting them 

let arr2  = [10, 5, 2, 20, 8];
let min = arr2[0];
for(let i = 0; i<=arr2.length; i++){
    if(arr2[i]<min){
        min = arr2[i];
    }
}
console.log(`${min} smallest element`);

// wap to find the greatest element from an array without sorting them 

let arr3 = [10, 5, 2, 20, 8];
let max = arr3[0];
for(let i = 0; i < arr3.length; i++){
    if(arr3[i]>max){
        max = arr3[i];
    }
}
console.log(`${max} greatest element`);

// wap to find first smallest, second smallest and the third smallest element from an array without sorting them 

let arr4 = [10,5,2,20,8];
let first = Infinity, second = Infinity, third = Infinity;
for(let i = 0; i < arr4.length; i++){
    let num2 = arr4[i];
    
    if(num2<first){
        third = second;
        second = first;
        first = num2;
    }else if(num2<second && num2!==first){
        third = second;
        second = num2
    }else if(num2<third && num2!==second && num2!==first){
        third = num2
    }
}
console.log(`${first} 1st smallest`);
console.log(`${second} 2nd smallest`);
console.log(`${third} 3rd smallest`);

// wap to find nth smallest element from an array without sorting them 

let arr5  = [10, 5, 2, 20, 8];
let n = 3;
for(let i = 0; i < n; i++){
    let min = Infinity;
    let minIndex = -1;
    for(let j = 0; j < arr5.length; j++){
        if(arr[j]<min){
            min = arr5[j];
            minIndex = j;
        }
    }
    arr5[minIndex] = Infinity;
    if(i===n-1){
        console.log(`${min} is the smallest element ${n}th`)
    }
}