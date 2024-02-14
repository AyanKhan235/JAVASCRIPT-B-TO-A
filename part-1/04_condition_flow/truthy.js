const useremail=[];
if(useremail){
    console.log("got the emial");

}
else{
    console.log("Dont have email");
}


// falsy value 

// false , 0 , -0, BigInt 0n,"", null, undefined , NaN

// truthy value
// "0", 'false', " ", [], {},  function(){} 




// if(useremail.length===0){
//     console.log("Array is Empty");
// }


const emptyObj={}
if(Object.keys(emptyObj).length===0){
console.log("Empty object");
}




// false==0 // true
// false=''// true;
// 0==''// true


// Nulish coalescing Operator (??) : null undefined

let  var1;
var1=5 ?? 10;        // 5
var1=null ?? 10      // 10
var1=undefined ?? 15 // 15
var1= null ?? 7 ?? 6 // which comes first value it will take

console.log(var1);