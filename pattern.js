/*
*****
*****
*****
*****
*/

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        process.stdout.write("*");
    }
    console.log(); 
}

/*
12345
23456
34567
45678
56789
*/

for(let i = 1; i <= 5; i++){
    for(let j = 1; j<=5; j++){
        process.stdout.write(`${i+j-1}`);
    }
    console.log();
}

/*
AAAAA
BBBBB
CCCCC
DDDDD
EEEEE
*/

for(let i = 1; i <= 5; i++){
    for(j = 1; j <= 5; j++){
        process.stdout.write(`${String.fromCharCode(i+64)}`);
    }
    console.log();
}

/*
*
**
***
****
*****
*/

for(i=1; i<=5; i++){
    for(j=1; j<=i; j++){
        process.stdout.write("*");
    }
    console.log();
}

/*
*****
****
***
**
*
*/

for(let i=5; i>=1; i--){
    for(let j = 1; j<=i; j++){
        process.stdout.write("*");
    }
    console.log();
}

/*
     *
    **
   ***
  ****
 *****

 */   

for(let i = 1; i <= 5; i++){
    for(let j = 1; j<=5-i; j++){
        process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    console.log();
}

/*
     *
     **
     ***
     ****
     *****

    */

for(let i = 1; i <= 5; i++){
    for(let j = 1; j<=5; j++){
        process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++){
        process.stdout.write("*");
    }
    console.log();
}

/*

     *
    *  *
   *  *  *
  *  *  *  *
 *  *  *  *  *
*/

for(let i = 1; i <= 5; i++){
    for(let j = 1; j<=5-i; j++){
        process.stdout.write(" ");
    }
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ");
    }
    console.log();
}


