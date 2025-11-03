// mapping - collection of items but in pair of key and value keys must be unique but values may be duplicate  
// if we use duplicate key in a map then only lost key used 

// set of map insert an item in map and if key already exist then 
var emp = new Map([
    ["id", 1001],
    ["name", 1001],
    ["dsg",1001],
    ["city", 1001],
    ["id",1001],
])
// set () update keys values 

emp.set("subject", "MERN");
emp.set("salary", 225.00);
console.log(emp);

//In JavaScript, mapping refers to transforming each element of an array and returning a new array with the modified values