// primitive--> call by value (whatever we chanegs made then changes made on copy of the data
// only not the memory refernce)

// 7 type : Number, string, boolean , null , undefined, symbol(kisi bhi value ko unique bannae 
//ke liye use hota hai)
// BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;// undefined
let userId=undefined;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);  for each symbol it defines a unique value

const bigNumber = 3456765437823456789876n;
// javascript is a dynamically type language where the interpreter assigns variables a type at runtime
// based on the variable's value at the time.


//  non primtive or refernce type

// Arrays, objects, Functions

// arrays
const heros = ["shaktiman","naagaraj","Doga"];


// objects
let myObj = {
    name:"Manish",
    age: 22,
}

// functions
const myFunctions=function(){
    console.log("hello World");
}

// console.log(myFunctions)

// to identify the data type
// console.log(typeof bigNumber) //bigint
// console.log(typeof outSideTemp) //null
// console.log(typeof myFunctions) //function


/* Summary of datatypes

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */




//  ++++++++++++++++++++++++++++++

/*

    stack (primitive)-> copy milta hai
    heap (non primitive) --> refernece original value

*/

let myName = "Manish";

let anotherName=myName;
anotherName="advitiya"
// console.log(myName);
// console.log(anotherName);


let userOne={
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo=userOne;

userTwo.email="manish@google.com"

console.log(userOne.email);
console.log(userTwo.email);
