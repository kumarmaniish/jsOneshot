/*const coding = ['js','rb','py','java','cpp']

const values=coding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(values); 


const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num>4)
console.log(newNums)


const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => {
    // num>4;// empty array return
    return num>4;
})


const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=[]
myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums)


const books=[
    {title: 'Book One', genre:'fiction', publish:1981, edition: 2004 },
    {title: 'Book Two', genre:'Non fiction', publish:1989, edition: 2008 },
    {title: 'Book Three', genre:'History', publish:1992, edition: 2007 },
    {title: 'Book Four', genre:'Non Fiction', publish:1999, edition: 2010 },
    {title: 'Book Five', genre:'Science', publish:2009, edition: 2014 },
    {title: 'Book Six', genre:'fiction', publish:1987, edition: 2010 },
    {title: 'Book Seven', genre:'History', publish:1986, edition: 1996 },
    {title: 'Book Eight', genre:'Science', publish:2011, edition: 2008 }    
]

let userBooks=books.filter((bk)=>bk.genre==='History');

userBooks=books.filter( (bk) => {
    return bk.publish <= 2000 && bk.genre ==='History';
});
console.log(userBooks); 



const myNumbers = [1,2,3,4,5,6,7,8,9]
// maps gives us undefined values and filter given an empty array

const newNums=myNumbers.map( (nums) => {return nums+10})

// if i put filters then value does not modified whereas map modifies the values and store the datatypes

console.log(newNums);


// chaining
const myNumers = [1,2,3,4,5,6,7,8,9]
const newNums=myNumers.map( (num) => num*10)
        .map( (num)=>num+1).filter( (num)=>num>=40);

console.log(newNums);



// reduce methods
const myNums = [1,2,3]

// const myTotal=myNums.reduce(function(acc, currval){
//     console.log(`acc : ${acc} and currval: ${currval}`);
//     return acc+currval
// }, 0)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal);

*/
const shoppingCart=[
    {
       itemName:"Js course",
       price:2999 
    },
    {
        itemName:"python course",
        price:6379 
    },
    {
        itemName:"cpp course",
        price:87399 
    },
    {
        itemName:"Java course",
        price:38699 
    }
]

const priceToPay=shoppingCart.reduce( (acc,item) => acc+item.price,0)

console.log(priceToPay);