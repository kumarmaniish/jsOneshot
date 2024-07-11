// const userEmail="hitesh@gmail.com" // it contains then assume to be true, if string is empty then assume false
const userEmail=""
if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

/*
// falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0",'false'," ", [], {}, function(){}
*/

// array [] truthy
if(userEmail.length === 0){
    console.log("Array is empty");
}

// object {} truthy
const emptyObj={};
if(Object.keys(emptyObj).length === 0)
    console.log("Empty object");

// false == 0 => true
// false=='' => true
// 0 == '' => true


// Nullish coalescing operator (??):null undefined

let val1;
// val1 = 5 ?? 10 // first value -> 5
// val1=null ?? 10 // return 10;
// val1 = undefined ?? 10 // 10
val1 = undefined ?? null ?? 20 ?? 10 // 20
console.log(val1);

// ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")