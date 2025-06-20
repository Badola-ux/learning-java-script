// wap to check weather a number is divisible by both 2 and 3

let num = Number(prompt("Enter the number:"));
if(num %2 === 0){
    if(num %3 === 0){
        document.writeln(`${num} is divisible by both 2 and 3`);
    }else{
        document.writeln(`${num} is divisible by 2 but not 3`);
    }
}
else{
    if(num %3 === 0){
        document.writeln(`${num} is divisible by 3 but not 2`);
    }
    else{
        document.writeln(`${num} not divisible by both 2 and 3`);
    } 
}

// wap to check weather it is leap year or not 

let year = Number(prompt("Enter the year:"));
if(year % 100 == 0){
    if(year % 400 == 0){
        document.writeln(`${year} is a leap year`);
    }else{
        document.writeln(`${year} is not a leap year`);
    }
}
else{
    if(year%4 == 0){
        document.writeln(`${year} is a leap year`);
    }else{
        document.writeln(`${year} is not a leap year`);
    }
}

//Check if a number is positive. If yes, check if it is even.

//Check if user is logged in. If yes, check if they are admin.

//If marks >= 50, check if marks >= 90 to assign “A+”.

//If weather is “rainy”, check if user has umbrella.

//If age >= 18, check if user has ID card for voting.

//If number is divisible by 5, check if it's also divisible by 10.

//If temperature > 30, check if it’s above 40 (very hot).

//If user has balance > 0, check if they can purchase item (price check).

//If email includes "@", check if it ends with ".com".

//If user is active, check if subscription is valid.