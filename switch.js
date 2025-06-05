// wap to check weather a number is divisible by both 2 and 3

let num = Number(prompt("Enter the number:"));
switch(true){
    case true:
        if(num%2==0 && num%3==0){
            document.writeln(`${num} is divisible by both 2 and 3`);
        }else if(num%2==0){
            document.writeln(`${num} is divisible by 2 not divisible by 3`);
        }else if(num%3==0){
            document.writeln(`${num} is divisible by 3 not divisible by 2`);          
        }else{
            document.writeln(`${num} not divisible by both 2 and 3`);
        }
        break;
}
// wap to check weather it is leap year or not

let year = Number(prompt("Enter the year:"));
switch(true){
    case true:
        if(year%400===0){
            document.writeln(`${year} is a leap year:`);
        }else if(year%4===0 && year % 100 !==0){
            document.writeln(`${year} is a leap year`);
        }else{
            document.writeln(`${year} is not a leap year`);
        }
}
