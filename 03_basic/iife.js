//immediately invoked function expression (IIFE)

function chai(){
    // console.log(`DB connected`);
}

// chai();
// global scope ke pollution hoti h kai baar se us global scope ke polltuion ko hatane ke liye iife ka use kiya
(function chai(){
    // named iife -> chai
    console.log(`DB connected`);
})(); // semi colon is compulsory for terminate the iife.

((name)=>{
    console.log(`DB connected two ${name}`)
})("adi")


// ()() -> first one is definition and 2nd one is execution
