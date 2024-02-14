// forEach

const coding =['ruby', 'python', 'c++' , 'java', 'javascript'];

coding.forEach(function (item) {
    // console.log(item);
})

coding.forEach( (item)=> {
    // console.log(item);
})


function printMe(item){
    // console.log(item);
}

coding.forEach(printMe);




coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})




const mycoding =[
    {
        languagename:'javascript',
        languageFilename:"js"
    },
    {
        languagename:'java',
        languageFilename:"java"
    },
    {
        languagename:'python',
        languageFilename:"py"
    },
    {
        languagename:'node',
        languageFilename:"node"
    },
]


mycoding.forEach((item)=>{
console.log(item.languageFilename);
console.log(item);
})