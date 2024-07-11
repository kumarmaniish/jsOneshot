// for
/*for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) console.log("5 isw best numnber")
    console.log(element);    
}

for (let i = 1; i <=10; i++) {
    console.log(`outer loop value:${i}`);
    for (let j = 0; j <=10; j++) {
        
        // console.log(`outer loop value:${i} and inner loop is ${j}`);
        console.log(i+' * '+j+' = '+ i*j);
    }
    
}

// while
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index=index+2;
}*/

let myArray = ['flash', "batman", "superman"];

let arr = 0;
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`);
    arr=arr+1;
}

// do while
let score=11;
do{
    console.log(`score is ${score}`);
    score++
}while(score<=10);