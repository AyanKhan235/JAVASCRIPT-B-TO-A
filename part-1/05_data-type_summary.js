// Primitives

// 7 Types: String ,Number , Boolean ,null , undefined, symbol, Bigint


const score=false
const name=100
let temp=null
let userEmail;


const id=Symbol("123");
const anotherId=Symbol("123");

// console.log(id===anotherId); 

// const bigNumber=35356623536736354n
// console.log(bigNumber);
// console.log(typeof(bigNumber));
 




// reference (NON - primitive)
// : Array, Objects , Functions
// its array 
const heros=["shaktiman", "nag","doga"];
let myObj={
    name:"AYAN",
    age:22,

}
console.log(typeof myObj );

console.log(typeof heros);

 const myFunction=function () {
    console.log("hello world");
}
console.log(typeof myFunction);
// console.log(typeof myFunction);


// Q 1
// is it dynamicaly type lamgauge or staticaly type 
//  it is dynamicaly type 
// bcoz there no need to specify type of variale 
