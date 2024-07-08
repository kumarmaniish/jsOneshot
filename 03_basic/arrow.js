
const user={
    username:"hitesh",
    price:999,

    // this keyword refers current context
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage()

// console.log(this);// return {} object -> we are in  node environment ans this refers empty objects

// inside browser global object is window

/*function chai(){
    let username="hitesh";
    console.log(this.username);
    console.log(this);
}
chai();// undefined for this.username and curret context for this keyword*/


// Arrow function
const chai = ()=>{
    let username="hitesh";
    console.log(this.username);
}

// chai();// yaha bhi undefined aa raha hai
// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

//implicit return 
const addTwo2 = (num1,num2)=> num1+num2;

// const addTwo = (num1,num2)=>(num1+num2);// yaha pe return keyword nahi hota hai

const addTwo = (num1,num2)=>({username:"hitesh "})// yaha pe object ko return karne ke liye parenthesis use kar rahe hai;
console.log(addTwo(3,4));


// const myArray=[2,5,3,7,8];
// myArray.forEach(function(){});
// myArray.forEach(() => {});