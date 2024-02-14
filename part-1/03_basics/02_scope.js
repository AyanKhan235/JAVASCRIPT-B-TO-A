
var c=300
let a=20
const b=300

if(true){
    let a=10;
    const b=20;
    var c=30;
}
// there c will overright value also in scope

// console.log(a);
// console.log(b);
// console.log(c);
// output 
// 20
// 300
// 30     c will overrighted



function one(){
    const username="AYAN"
    function two(){
        const website="YouTube"
        console.log(username);
    }
    // console.log(website);
    // this will not exucute bcoz its in the out of score webiste variavle give and error 
    two();
}

one()





addOne(5)
// it will not give any error before inialization

function addOne(num){
    return num+1
}

addTwo(7)
// it will give error access want to before initailization
const addTwo = function(num){
    return num+2
}