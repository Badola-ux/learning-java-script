function fun1(){
    setTimeout(()=>{
        console.log("hello world1");
    },4000);
}
function fun2(){
    setTimeout(()=>{
        console.log("hello world2");
    },5000);
}
function fun3(){
    setTimeout(()=>{
        console.log("hello world3");
    },3000);
}
function fun4(){
    setTimeout(()=>{
        console.log("hello world4");
    },2000);
}
function fun5(){
    setTimeout(()=>{
        console.log("hello world5");
    },1000);
}
fun1()
fun2()
fun3()
fun4()
fun5()

// one task have to wait complete the previous task it is called non blocking Io model