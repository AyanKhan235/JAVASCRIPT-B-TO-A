import fetch from 'node-fetch';
// const promiseOne= new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task is completed");
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log("promised consumed");
// })


// new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log("Asyn task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     // console.log("Async resolve 2");
// })

// const promiseThree= new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve({username:"Ayan", email:"ayan@chai.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })





// const promiseFour= new Promise(function(resolve, reject){
//     setTimeout(()=>{
//          let error= false;
//         //  let error= true;
//          if(!error){
//             resolve({username:"AyanKhan" , password:"123"})
//          }
//          else{
//             reject("Error Something Went Wronh");
//          }
//     },1000)
// })

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then(function(username){
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("Promise is either resolved  or rejected "))




// const promiseFive = new Promise(function(resolve, reject){
//     let error=true
//     if(!error){
//         resolve({username:"javascript", password:"132"})
//     }
//     else{
//         reject("Error js something Wrong")
//     }
// })

// async  function consumePromiseFive(){
    
//     // const response= await promiseFive
//     // console.log(response);
//     // without catch and try if promise reject it give error to handle this error we use 
//     try{
//     const response= await promiseFive
//     console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()



async function getAllUser(){
   
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data= await response.json();
        console.log(data)
    } catch(error){
        console.log("Error is here:", error);
    }
}
getAllUser();



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    console.log(data.followers)
})
.catch((error)=> console.log(error))