const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc, currval){
    // console.log(`acc is ${acc} and currval is ${currval}`);
    return acc+currval
},0)
// console.log(`hamza khan is super boy`);
// console.log(myTotal);



// by Arraow function
const mytotal=myNums.reduce((acc,curr)=> acc+curr, 0);
// console.log(mytotal);




const shoppingcart=[
    {
        itemName:" js Course",
        price:2999
    },
    {
        itemName:" py Course",
        price:999
    },
    {
        itemName:" java Course",
        price:4999
    },
    {
        itemName:" react Course",
        price:6999
    },
]



const priceTopay=shoppingcart.reduce((acc,item)=> acc + item.price, 0);
console.log(priceTopay);