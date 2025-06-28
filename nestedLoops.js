// wap small eg of nested loops

for(let i=1; i<=5; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row = row + "* "
    }
    console.log(row);
}
// wap to print all perfect number (5, 28, 496, 8128) in a range

let num2 = Number(prompt("Enter the number:"));
let start = 1;
let end = 10000000000;
while(num2<=end){
    let sum = 0;
    let i = 1;
    while(i<=num2/2){
        if(num2%i==0){
            sum = sum + i;
        }
        i++;
    }
    if(sum===num2){
        document.writeln(`${num2} is a perfect number`);
    }
    num2++;
}
// wap to print and count all palindrome number in a range 
// wap to print and count all armstrong numbers in a range (153, 370, 371, 407)
// wap to print and count all magical number(81, 1458, 1729)

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

// wap to print and count all prime number in a range 

