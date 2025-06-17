/*
syntax
function functionName(parameters)
------------
------------
number of statements
------------
------------
return value
}
functionName(arguments)
*/

//sample case

function test(){
    console.log("In test function");
}
console.log("In main outer scope");
test()
test()
test()
test()
test()
console.log("Back to main outer scope");

// function call within function 

function fun1(){
    console.log("In fun1 function");
    fun2()
    console.log("Back to fun1 function");
}
function fun2(){
    console.log("In fun2 function");
    fun3()
    console.log("Back to fun2 function");
}
function fun3(){
    console.log("In fun3 function");
}
console.log("In main global scope");
fun1()
console.log("Back to main global scope");

// function without return value without parameter

function add(){
    let a = 10;
    let b = 20;
    let sum = a + b;
    console.log(`sum = ${sum}`);
}
function test(){
    add()
}
test()

// function with return value without parameter

function add(){
    let a = 6;
    let b = 7;
    let sum = a + b;
    return sum;
}
function test(){
    let s = add();
    console.log(`sum = ${s}`); // multiple time will be used for single time or variable use 'add' in place of 's'
}
test()

// function without return value with parameter

function add(x,y){
    let sum = x + y;
    console.log(`sum = ${sum}`)
}
function test(){
    let a = 7;
    let b = 10;
    add(a,b);
}
test()

// function with return with parameter 

function add(x,y){
    return sum
}
function test(){
    let a = 10;
    let b = 20;
    console.log(`sum=${add(a,b)}`)
}
test()