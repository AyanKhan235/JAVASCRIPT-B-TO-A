let mydate=new Date();

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());



// let myCreatedDate= new Date(2024,0,26);
// let myCreatedDate2= new Date(2024,0,26,6,30);
let newdate=new Date("2024-02-14") // yy-mm-dd
let newdate2=new Date("01-26-2024") // mm--dd-yy


// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate2.toLocaleString());

// console.log(newdate.toDateString());
// console.log(newdate2.toDateString());


let myTime=  Date.now();
// console.log(myTime);
// console.log(newdate.getTime()); //  convert in time to milisecond

// convert milisecond to secons
// console.log(Math.floor(Date.now()/1000));

let date=  new Date()
// console.log(date.getDay());
// console.log(date.getMonth() +1);
// console.log(date.getTime());


console.log(`Date is ${date.toDateString()} and time is ${date.toTimeString()}`);



let myrealDate=date.toLocaleString('default',{
    weekday:"long"
})
console.log(myrealDate);




