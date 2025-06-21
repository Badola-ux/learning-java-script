// wap small eg of nested loops
// wap to print all perfect number (5, 28, 496, 8128) in a range
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