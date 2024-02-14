const user={
    username:"AyanKhan",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage();
user.username="pathan"
// user.welcomeMessage();


function chai(){
    let username="Ayankhan"
    console.log(this);
    // this is print lot of value but 
    console.log(this.username);
    // this is printing undefined   this is not work in function only in object
}
// chai();



const chaifunc = function(){
    username="ayankhan"
    console.log(this.username);
    // printinf username

}


const chaipeo =()=>{
    let username="hitesh"
    console.log(this);
    // this will only refer {} this 
}
// chaipeo();

// its explicit return
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// {} lgaya hai to return keyword use krna padhega
// const addTwo=(num1,num2)=>  num1+num2
// const addTwo=(num1,num2) =>  ( num1+num2 )
// both are same 
// this is same as previous  but its implicit return

//return object
// const addTwo=(num1,num2) => {username:"ayankhan"}// wrong way to return 
const addTwo=(num1,num2) =>  ( {username:"ayan"})


console.log(addTwo(3,4))