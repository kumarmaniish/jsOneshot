/* //if
const isUserLoggedIn=true;
if(isUserLoggedIn){

}

if(2==="2")
console.log("executed");
else
console.log("Not executed");



const temperature=41
if(temperature<50){
    console.log("less than 50");
}
else
console.log("temperature is greater than 50")
// <, >, <=, >=, ==, !=, ===, !==



const score=200
if(score>100){
    let power="fly";
    console.log(`power : ${power}`);
}
console.log(`power: ${power}`);


const balance=1000
if(balance>500) console.log("test"),console.log("test2");

//single line code means implicit code is correct but it is immature code no one can recommend



const balance=1000
if(balance<500)
    console.log("less than 500")
else if(balance<900)
    console.log("less than 750");
else
    console.log("less than 1200")
 

// real life problem

const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false;
const loggedInFromEmail=true;


if(UserLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}
*/

// switch statement ===========>>>>>


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break; // important question except default, rest the code will be executed when uncomment the break statement
    case 4:
        console.log("April");
        break;
    default:
        console.log("Does not exits");
        break;
}