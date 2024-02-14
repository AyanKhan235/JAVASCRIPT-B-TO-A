const balance=3000;


if(balance===10000){
console.log(`you have saved good panny in this month`);
}
else if(balance<2000){
    console.log(`your EMI may be missed`);
}
else if(balance=>3000){
    console.log(`Your Emi will not missed`);
}
else{
    console.log(`Enter the balance`);
}