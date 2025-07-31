// find()

var a = [12,13,12,13,11,15,16,17,18,19,20,2,55,5,6,41,45,43,5,18];
function check(item){
    return item % 5 === 0
}
function myFind(arr,fun){
    for(let i = 0; i<arr.length;i++){
        if(fun(arr[i])){
        return arr[i];
    }
}
    return undefined
}
console.log(a.find(check));
console.log(myFind(a,check));

// findIndex()

var a = [12,13,12,13,11,15,16,17,18,19,20,2,55,5,6,41,45,43,5,18];
function check(items){
    return items % 5 === 0;
}
function myFindIndex(arr,fun){
    for(let i = 0; i<arr.length; i++){
        if(fun(arr[i])){
            return i;
        }
    }
    return -1;
}
console.log(a.findIndex(check));
console.log(myFindIndex(a,check));

// findLast()

var a = [12,13,12,13,11,15,16,17,18,19,20,2,55,5,6,41,45,43,5,18];
function check(items){
    return items % 2 === 0;
}
function myFindLast(arr,fun){
    for(let i = arr.length - 1; i >= 0; i--){
        if(fun(arr[i])){
            return arr[i];
        }
    }
    return undefined;
}
console.log(a.findLast(check));
console.log(myFindLast(a,check));

// findLastIndex()

var a = [12,13,12,13,11,15,16,17,18,19,20,2,55,5,6,41,45,43,5,18];
function check(items){
    return items % 4 === 0;
}
function myFindLastIndex(arr,fun){
for(let i = arr.length - 1; i >= 0; i--){
    if(fun(arr[i])){
        return i;
    }
}
return -1;
}
console.log(a.findLastIndex(check));
console.log(myFindLastIndex(a,check));

// map() 

var a = [12,13,12,13,11,15,16,17,18,19,20,2,55,5,6,41,45,43,5,18];
function square(n){
    return n * n;
}
function myMap(arr,fun){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(fun(arr[i]));
    }
    return result; 
}
console.log(a.map(square));
console.log(myMap(a,square));

// filter()

var a = [12,13,12,13,11,15,16,17,18,19,20,2,55,5,6,41,45,43,5,18];
function isEven(n){
    return n % 2 === 0;
}
function myFilter(arr,fun){
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(fun(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a.filter(isEven));
console.log(myFilter(a,isEven));
