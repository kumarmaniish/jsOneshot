// singleton-> object amde by constructor
// Object.create();


//Object literals
const mySym=Symbol("key1");

const jsUser={
    name:"manish",
    age:18,
    "Full_name":"Manish Kumar",// cannot access by dot operator
    location:"jaipur",
    [mySym]:"myKey1",// without [] it is treated as string
    email:"hitsesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mon","Tue"]
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);// isko string ki tarah hi denapadega kyuki by default key bhi string hoti hai

// console.log(jsUser["Full_name"])
// console.log(jsUser[mySym]);

jsUser.email="hiteshgnm@gmail.com";

// Object.freeze(jsUser)
jsUser.email="jnabhh@gmail.com";
// console.log(jsUser);

/*jsUser.greeting=function(){
    console.log("hello JS user");
}

// console.log(jsUser.greeting);// undefined

jsUser.greeting();

jsUser.greetingTwo=function(){
    console.log(`hello JS user,${this.name}`);//string interpolation
}*/

// jsUser.greetingTwo();

//---------------------------------


//singleton
// const tiUser=new Object();
// console.log(tiUser);


//object literals
const tinUser={}

// to assign itself
tinUser.id="1234abc";
tinUser.name="Sammy";
tinUser.isLoggedIn=false;

// console.log(tinUser);

// nested objects
const regUser={
    email:"Some@gmail.com",
    fullname:{firstName:"Manish",
        lastname:"Kumar"
    }
}

// console.log(regUser.fullname.lastname);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"c"};

// const obj3={obj1,obj2};// same index of index

const obj4=Object.assign({},obj1,obj2); // (Target,source) static methods copies all enumerable own properties from one or more source objects to a target object

// const obj3={...obj1,...obj2};
// console.log(obj4);

//database of user
const users=[
    {
        id:1,
        email:"mnbhgds@gmail.com"
    },
    {
        id:1,
        email:"mnbhgds@gmail.com"
    },
    {
        id:1,
        email:"mnbhgds@gmail.com"
    }
]

users[1].email;
console.log(tinUser);

//important when we play with database
// console.log(Object.keys(tinUser));
// console.log(Object.values(tinUser));
// console.log(Object.entries(tinUser));// key value pair return

// console.log(tinUser.hasOwnProperty('isLoggedIn'));// ye property hai v ya nahi

// -----------------------------------------

const course={
    coursename:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor  -> general syntax but quite big


// important as aspect of projects
const {courseInstructor:teacher}=course;
console.log(teacher);// desturcte of courseinstructor as teacher

//object destructuring
//const navbar = ({company})=>{
//}
//navbar(company="hitesh");