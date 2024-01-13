const name="Ayan"
const repoCount=50

// console.log(name+repoCount+"value");
// do not recommende

console.log(`hello my name is ${name} and my reo count is ${repoCount}`);

const gameName=new String('123456789')
console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString=gameName.substring(0,4);
console.log(newString);

let anotherString = gameName.slice(-7,5); // nagative start is from back start ans positive from start
// console.log(anotherString);
 anotherString = gameName.slice(5,7);
console.log(anotherString);

const newStringOne ="   AYAN    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url="https://ayan.com/ayan%20khan"
// %20 replace 
console.log(url.replace('%20','-'))
console.log(url.includes('ayan'));
console.log(url.includes('pathan'));



const myString = new String("ayan-khan-pathan")
console.log(myString.split('-'));

