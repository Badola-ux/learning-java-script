// string 

let str = "yash"
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr);

// similarly for lower case which we can write "str.tolowercase();"

// trim 

let string = "dutch leader";
console.log(string.trim());

// Array

let heroes = ["Superman", "Spiderman", "Batman", "Antman", "Ironman"];
for (let i = 0; i<heroes.length; i++){
    console.log(heroes.i);
}

// for of in Array 

let cities = ["DEHRADUN", "HARIDWAR", "RISHIKESH", "KOTDWARA", "RAMNAGAR", "HALDWANI", "TANAKPUR"];
for(let city of cities){
    console.log(city);
}

// for example if we want to write uppercase or lowercase we can write like "console.log(city.uppercase());"

// q> find the sum of the given array [85, 97, 44, 37, 76, 60] and also find the average 

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of marks){
    sum = sum + val; // we can also write this line "sum = +=val"  += means assignment operator  
}
let avg = sum / marks.length; 
console.log(`avg marks of the class = ${avg} `); // template literals 

// q> for a given array with prices of 5 items [250, 645, 300, 900, 50] all item have an offer of 10% off on them. change the array to store final price after applying offer.

let items = [250, 645, 300, 900, 50];
let idx = 0;
for(let val of items){
    let offer = val/10;
    items = items - offer;
    console.log(`value after offer = ${items[i]}`);
    idx++; // we can write idx or i (i is the short form)
}
// for more simpler method 

let item = [250, 645, 300, 900, 50];

for(let i = 0 ; i = items.length; i++){
    let offer = item[i]/10;
    item[i] = item - offer;
}
console.log(item);

// array method 

//push() - add to end, pop() - delete from and return, tostring() - convert array to string 
// concat() - joins multiple arrays and return result, unshift() - add to start, shift() - delete from start and return 

// concat
let MarvelHeroes = [Thor, Ironman, Antman, Blackpanther, Spiderman ];
let dcHeros = ["Batman, Superman"];
let Heroes = MarvelHeroes.concat(dcHeros);
console.log(Heroes);

// other method in array are slice() - returns a piece of array,it will not change original array SpliCe() - it will change the original array(add, replace, remove)

// function 

function myFunction(){
    console.log("welcome to India");
    console.log("we are learning javascript:")
}
myFunction(); // two times call function
myFunction();

// how we can return the value in function
// function - 2 numbers , sum 

function Sum (x,y){
    s = x + y;
    return s;
}
let val = sum(3,4);
console.log(val);

// array function eg: sum function 

function sum(a,b){
    return a + b ; 
}
const arrowSum = (a,b) => {
console.log(a+b);
};

// q> vowels

function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a"||char === "e"||char === "i"||char === "o"||char ==="u"){
            count++
        }
    }
    console.log(count);
}

// for eg if we want to put arrow in function 

const countVow = str => {
    function countVowels(str){
        let count = 0;
        for(const char of str){
            if(char === "a"||char === "e"||char === "i"||char === "o"||char ==="u"){
                count++
            }
        }
        console.log(count);
    }
}

// for each loop in arrays (method) 
// here it is a function to execute for each element in the array
// callback is a function passed as an argument to another function (arr.forEach(call back function))
