// let myarr=[1,2,3,4,5];/
// let heros=['a', 'b', 'c','d'];
// console.log(myarr[0]);
// console.log(myarr);
// console.log(heros[1]);
// console.log(heros);


// Method
// myarr.push(6);
// console.log(myarr);
// myarr.push(7);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);


// unshift put value in first
// shift will remove element from start
// myarr.unshift(9);
// myarr.shift();

// include will check present or not it will give answer in boolean true or false;


// console.log(myarr.includes(9));
// console.log(myarr.indexOf(9)); // give -1 not present
// console.log(myarr.indexOf(3)); // give index of value

// console.log(myarr);
// // it will bind and convert in string
// let newArray=myarr.join();
// console.log(newArray);



// slice   splice

// slice original array se manipulate nhi krta hai but 
// and last digit add nhi hoti hai


// splice me last digit bhi add hoti hai or original array me se wo splice wala 
// portion cut ho jata hai mtln original se bhi ye manipulate krta hai 

let Array=[0,1,2,3,4,5,6,7,8];
console.log("A" ,Array);

let myn1=Array.slice(1,3);
console.log(myn1);
console.log("B" ,Array);

let myn2=Array.splice(1,3);
console.log(myn2);
console.log("C" ,Array);  // array remain 0,4,5,6,7,8





