/*let a=10;
const b=20;
var c=30;

console.log(a);
console.log(b);
console.log(c);


// var can be access from anywhere
console.log(b);// refernce error
console.log(c);// undefined
console.log(a);// refernece error
var c=300;
if(true){
    var c=30;
}

// console.log(c);// assume to be 300 but 30 will be ans 

let b=200;
if(true){
    b=20;// it can resassigned
}

// console.log(b);//200

const a=700;
if(true){
    // a=20;// const value cannot be reassigned
}

// console.log(a);

// let and const both are block scoped

// both let and const are hoisted to the top of their block but unlike var
*/

// ----------------------------------------
// Nested function
function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

    two();// if we comment then it will not execute because no one will call
}

// one();

if(true){
    const username="hitesh";
    if(username==="hitesh"){
        const website=" youtube";
        // console.log(username+website);
    }

    // console.log(website);
}
// console.log(username);

// question

console.log(addone(5));// run anywhere
function addone(num){
    return num+1;
}
// console.log(addone(5));
// add2(5);// refernce error >> is concept ko hoisting bolte hai hum add2 me hold kiye h 
const add2=function(num){
    return num+2
}
console.log(add2(5));


