//  question is change the pi value can change or not 
//  no we cannot chnage bcouse of Math ke andar jo pi ki value hai  uski propertydescripot me writable false hota hai 
// or jisme enumerable false hota hai usme iterrate nhi kr skte

// const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);
// output pi ke andar ka raaz
//     {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


const chai={
    name:"ayan",
    price:250,
    isAvailable:true,
    orderchai:function(){
        console.log(`chai nhi bni`);
    }
}
//  we can manipulate our object writable enumerable can be change by us 


console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai, "name",{
    writable:false,
    enumerable:false // cannot acess 
    // configurable:false
})

for (let  [key, value] of Object.entries(chai)) {
//          price and 250
//          isAvailable and true
//          orderchai and function(){
//                   console.log(`chai nhi bni`);
//           } // i dont want function


        if( typeof value!=='function'){

            console.log(`${key} and ${value}`);
        }

}
chai.name="pathan"
// console.log(chai.name);




// A array i have i dont want to iterable so do no one can iterate 
const arr=[1,2,3,4,5]
console.log(Object.getOwnPropertyDescriptor(arr,1))
Object.defineProperty(arr,1, {
    enumerable:false
})
Object.defineProperty(arr,2, {
    enumerable:false
})
Object.defineProperty(arr,3, {
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(arr,1));

console.log(arr);
for (let index = 0; index < arr.length; index++) {
   
    console.log( arr[index]);
    
}