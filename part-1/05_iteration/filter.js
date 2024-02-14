const coding =['ruby', 'python', 'c++' , 'java', 'javascript'];



// always it will return undefined 

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);


const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> num> 4); // no need to return but in other case i new line look like code need to retunr 
// [ 5, 6, 7, 8, 9, 10 ] output
// const newNums=myNums.filter((num)=> {
// num> 4 
// }); // output is []



const newNums=myNums.filter((num)=> {
   return num> 4 
});


// console.log(newNums); //  [ 5, 6, 7, 8, 9, 10 ] output


const newnums=[]

myNums.forEach((num)=>{
    if(num>4){
        newnums.push(num);
    }
})
// console.log(newnums);


const books =[
    {title:'book one', genre:'fiction', publish:1981, edition:2004},
    {title:'book two', genre:'non fiction', publish:1987, edition:2004},
    {title:'book three', genre:'history', publish:2001, edition:20011},
    {title:'book four', genre:'non fiction', publish:1981, edition:2004},
    {title:'book five', genre:'fiction', publish:2003, edition:2003},
    {title:'book six', genre:'hitoty', publish:2022, edition:2004},
    {title:'book seven', genre:'science', publish:1981, edition:2035},
    {title:'book eight', genre:'technical', publish:1981, edition:2004},
    {title:'book nine', genre:'history', publish:2000, edition:2004},
    {title:'book ten', genre:'fiction', publish:2012, edition:2004}


]

 const userbooks=books.filter((bk)=> bk.genre==='history');
  userBooks=books.filter((bk)=>{ return bk.publish >2000}) 
 console.log(userBooks);