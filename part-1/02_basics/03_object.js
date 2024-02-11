// object
const mysym=Symbol("key1");
const JsUser={
    name:"AYAN",
    [mysym]:"mykey1",
    age:18,
    "full name":"ayankhanpathan",
    Email:"ayankhan@google.com",
    isLoggedIn:false,
    lastloginDays:["monday", "saturday"]
}
// console.log(JsUser);
// we can acces by this but this is not right to use if your key in the string what will you use so user to acces value array put key instead of infdex like JsUser["keyz"]
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// // console.log(JsUser.full name); // wrong
// // console.log(JsUser."full name"); // wrong
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);


// Object.freeze(JsUser);
JsUser.name="babu";
// console.log(JsUser.name);


JsUser.greeting=function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}

// console.log(JsUser.greeting);  //[Function (anonymous)]
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); 


