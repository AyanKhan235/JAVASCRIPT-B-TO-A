// for of


// const arr= [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }


const greeting ="hello wolrd"
for (const greet of greeting) {
    if(greet==' '){
        continue;
    }
    // console.log(`Each char is ${greet}`);
}


const map= new Map();

map.set('IN',"INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "Frans")

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}


const anyobject={
    game1:"pokemon",
    game2:"ycity"
}
// for of loop is not iterable for object
// for (const [key , value] of anyobject) {
//      console.log(key, ":-", value);
// }
