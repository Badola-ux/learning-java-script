function sum(a,b){
    if(b===0){
        return a;
    }else{
        return sum(a+1,b-1)
    }
    console.log(sum(a,b));
}