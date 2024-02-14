// Immediately Invoked Function  Expressions (IIFE)
// why use 
// global scope ke polution se dikkat hoti hai kai baar isko htane ke liey iife ka use krte hai 


// this is called named iife 
(function chai(){
    console.log(`DB CONNECTED`);
})();
// need semicolan here its dont know where to stop function


// (()=>{
// console.log(`DB CONNECTED TWO`);
// })() // error becouse previous iife function dont have semicolan in the last after this it will fix

// thus is called unnamed iife
( (name)=>{
console.log(`DB CONNECTED TWO ${name}`);
})('ayan') 



//multi iffe likhne ke liye semicolan compulsary hai