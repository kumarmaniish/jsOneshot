// [ [], [], []]
// [ {}, {}, {}]

/*const arr=[1,2,3,4,5]
for(const num of arr){
    console.log(num);
}


const greetings="Hello";
for(const val of greetings){
    console.log(`Char is ${val}`);
}

// Maps -> unique values stored in a key value pairs

const map = new Map();
map.set('IN', "india");
map.set('USA', "United States of America");
map.set('Fr',"France");

// console.log(map);
for(const key of map){
    console.log(key); // prints whole map
}

// destructuring of key and value
for(const [key,value] of map){
    console.log(key, ':-', value); // prints keys or values by destructuring them
} 

const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}

// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }
// myObject is not iterable when we use for of loop


const myObject={
   js : 'JavaScript',
   cpp : 'C++',
   rb : 'ruby',
   swift : "Swift by apple"
}

// for iterating an object we can used for in loop
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}2000000`);
} 


const programming = ['js','rb','py','java','cpp']
for (const key in programming) {
         console.log(programming[key]);   

}


const map = new Map();
map.set('IN', "india");
map.set('USA', "United States of America");
map.set('Fr',"France");

for (const keys in map) {
    console.log(key);
}// we cannot iterate map 



// for each
// high order function-> no differnece between function and fat arrow

const coding = ['js','rb','py','java','cpp']
coding.forEach( function (val) {
    console.log(val);
})


const coding = ['js','rb','py','java','cpp']
coding.forEach((item)=>{
console.log(item);
})


const coding = ['js','rb','py','java','cpp']
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);


const coding = ['js','rb','py','java','cpp']
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

const myCoding = [
    {
        language: "javaScript",
        languageFlieName:"Js"
    },
    {
        language: "java",
        languageFlieName:"Java"
    },
    {
        language: "Python",
        languageFlieName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.language);
})*/