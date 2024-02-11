const  marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["thor","ironman","spiderman"];

// marvel_heros.push(dc_heros);
// [ 'thor', 'ironman', 'spiderman', [ 'thor', 'ironman', 'spiderman' ] ]  output
// console.log(marvel_heros);

const newheros=marvel_heros.concat(dc_heros);
// [ 'thor', 'ironman', 'spiderman', 'thor', 'ironman', 'spiderman' ] output 
// console.log(newheros);

const all_new_heros=[...marvel_heros,...dc_heros];
// console.log(all_new_heros);


const another_array=[1,2,3,[4,5,6],7,[8,[9,10]]];
// [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 8, [ 9, 10 ] ] ]   output of this 
// console.log(another_array);
const real_another_array=another_array.flat(Infinity);
//  [1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]  output is after flat function
// console.log(real_another_array);



// console.log(Array.isArray("AYAN"));
// output is  false
// console.log(Array.from("AYAN"));
//output is  [ 'A', 'Y', 'A', 'N' ]

// console.log(Array.from({name:"ayan"})); // intersting empty array;




let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));