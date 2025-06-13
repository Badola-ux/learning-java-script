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
}