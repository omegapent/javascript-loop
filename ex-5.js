// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here
let arr = [];
for (const str of companyName){
    console.log(str);
    arr.push(str);
};
//console.log(arr);
for (const [i, v] of arr.entries()) {
    console.log(`Number ${i+1} character is ${v}`)
};