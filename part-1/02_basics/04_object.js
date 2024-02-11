// const tinder= new Object();// it's can be singleton object and intead ot this non Singleton
const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Ayan"
tinderUser.isLoggedin="false"

// console.log(tinderUser);



const regularUser={
    email:"babukhan640b@gmail.com",
    fullname:{
        userfullname:{
            firstName:"ayan",
            lastName:"khan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);


const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

// const obj3={obj1, obj2}
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   output is 

// yha saari value obj1 me jaa rhi hai isliye {} dete hai taaki wo as a target {} is ko le 

// const obj3=Object.assign(obj1,obj2);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } // output is 
// const  obj3=Object.assign({},obj1,obj2);
 
// simple way to merge this  object 
const obj3={...obj1,...obj2};
// console.log(obj3);





const users=[
    {id:"a",
     name:"babu1"
    },
    {id:"a",
     name:"babu2"
    },
    {id:"a",
     name:"babu3"
    },
    {id:"a",
     name:"babu4"
    },
]

// console.log(users[1].name);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedin'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

 const course={
    coursename:"js course",
    duration:15,
    courseinstructor:"Ayan"
 }

 // desctructure
//  const {courseinstructor}=course;
 // also can be chnage name like {courseinstructor:inseructor}
 const {courseinstructor:inseructor}=course;
//  console.log(courseinstructor);
 console.log(inseructor);




//  json 
{
    "name":"ayan",
    "coursename":"js in hindi",
    "price":"free"
}