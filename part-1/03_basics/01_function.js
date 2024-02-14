// fucntion
function  print(){
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
}
// print();

function addition(number1 , number2){
    return number1+number2
}
// console.log(addition(1,2));


function loginUserMessage(username){
    if(!username){
        console.log("enter the name");
        return
    }
    return `${username} just log in`
}

// console.log(loginUserMessage("ayan"));



function calculatorPrice(...num1){
    return num1;
}
// function calculatorPricesss(val1 , val2, ...num1){
//     // val1 and val2 and other in the ...num1
//     return num1;
// }
console.log(calculatorPrice(200,300,400));



const user={
    username:"AYAN",
    price:199

}

function handleObject(anyObject){
    return `username is ${anyObject.username} and price is ${anyObject.price}`
}
// console.log(handleObject(user));
console.log(handleObject({
    username:"ayankhan",
    price:2000
}));


function handleArray(anyArray){
    return anyArray[1];
}

const arr=[100,200,300,400];

// console.log(handleArray(arr));
console.log(handleArray([100,20,3000,400]));