const score=400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(`${balance.toString()} this is the number and comvert in strng tyoe of ${typeof balance}` );

//toFixed gives value in end end to point 1,2,
// like  29.00,, 34.0 ,, 10.000;

// console.log(balance.toFixed(2));

// const otherNumber=123.764;
// console.log(otherNumber.toPrecision (1));
// console.log(otherNumber.toPrecision (2));
// console.log(otherNumber.toPrecision (3));
// console.log(otherNumber.toPrecision (4));


const hundreds=1000000
// console.log(hundreds.toLocaleString()); // us standad
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// MATHS



// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.6));// 5
// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.floor(4.9));// 4
// console.log(`the sqrt of 10 is ${Math.sqrt(10)}`);
// console.log(`min value is  out of 4,5,3,7,5 ---> ${Math.min(4,5,6,7,8,3)}`);

// Math.random()==> 0 to <1


// console.log(Math.random());  /// o to 1
// console.log((Math.random())*10+1); //1. point  to 10
// console.log(Math.floor((Math.random())*10)+1);  /// 1 to 10
  
//  +1 bcoz is we get 0 in ramdom then it will become 1
const max=200
const min=10
// 10 -20 need value 
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(1*(max-min+1))+min);





