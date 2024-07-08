function sayName(){
    console.log("Manish");
}

// sayName();

/*function addTwo(number1,number2,number3){
    // parameter when we define the function.
    console.log(number1+number2+number3);
}*/

function addTwo1(number1,number2){
    // parameter when we define the function.

    // let result=number1+number2;
    // return result;

    return number1+number2;
}

// arguments when we call the function
// const result=addTwo(3,4,"8");
// const result=addTwo1(4,5);
// console.log(result);


function loginUserMessage(username="Sona"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

const result1=loginUserMessage("Manish");
// console.log(result1)

// console.log(loginUserMessage());

// ----------------------------------------------
// if unlimited argument comes then we use rest or spread opertaor
function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200,300,400,500,600))


// function with object
const user={
    username:"askhs",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// if price is changed to prices then it gives undefined.
// handleObject(user);

// handleObject({
    // username:"Sam",
    // price:123
// });

//function with array
const mynewArr=[200,300,400,600];

function returnSecondValue(getArray){
    return getArray[2];
}

console.log(returnSecondValue(mynewArr));

console.log(returnSecondValue([3902,3422,4538]));