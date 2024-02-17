// for in 

const myobject={
    js:"javascript",
    rb:"ruby",
    cpp:"c++",
    mern:"Mongo express react  node"
}

for (const key in myobject) {
    // console.log(key); //js rb cpp mern
    // console.log(`${key} :- ${myobject[key]}`);
  
}


const arr=['js', 'rb', 'cpp', 'mern']
for (const key in arr) {
//  console.log(key);  // 0 1 2 3

console.log(arr[key]);  //'js', 'rb', 'cpp', 'mern'
}



// for in will not work on map 