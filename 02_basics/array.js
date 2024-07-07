// array

/*array resizable */
const myArr=[1,2,3,4]
// console.log(myArr[0]);

const myArr2=new Array(1,2,3,4,5);

// javascript array copy operation create shallow copy

/* shallow copy-> changes made in original array also  , share a same referenece

deep copy -> changes are not made in original array, do not share the same refrenece
*/

// array methods

myArr.push(6);// push on back
myArr.unshift(9);//push on start
myArr.shift();

// myArr.pop(); // pop last element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr=myArr.join();
// console.log(myArr);
// console.log(typeof(newArr));

// slice, splice interview question

// console.log("A",myArr);

const myn1=myArr.slice(1,3);
// console.log(myn1);
// console.log("B ",myArr);

const myn2=myArr.splice(1,3);

// console.log(myn2);
// console.log("C",myArr);

// splice and slice --> slice me range include nahi hota hai aur array me koi change nahi hota but splice me hota hai

const myN=["Manish","Shashwat","Asmit"];
const myR=["Adi","sattu","yash"];

//myN.push(myR); -> index of index
//console.log(myN[3][1]);

// concat
const myF=myN.concat(myR);// this method return a new array and it merges in one line 
// console.log(myF);

// but mostly uses spread opertor
const myS=[...myN,...myR];
// console.log(myS);


const ano=[1,2,3,4,[5,6,7],8,[6,7,[4,5]]];

const realA=ano.flat(3);//we can give infinity also
// console.log(realA);

// console.log(Array.isArray("Manish"));// check arr or not
// console.log(Array.from("Manish"));//to make the array lie'M','a','n','i','s','h'
// console.log(Array.from({name:"Manish"}));// interesting


let score1=100;
let score2=200;
console.log(Array.of(score1,score2));