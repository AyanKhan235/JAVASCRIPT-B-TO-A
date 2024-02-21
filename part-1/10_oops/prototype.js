// function --------------------
//                             |------>
// Array ---------------------------> object------>null
//                     ------------>
//                    |     
// string-------------





let myName="ayan     "
// console.log(myName.length);

//  i want true length not space length

//  trim we can use 
//  we will will create like what our self implemented  so creatinh true.length by us
// myName.trueLength(); banana hai

let myhero=["thor", "spiderman"]
let myHeroPower = {
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}
// what we have done here
// we access the top most thing and add prototype ayan so array and object also have this property
Object.prototype.ayan=function(){
    console.log("Ayan is present in all object");
}

//i want also power will remain for Array becous not giving object so
Array.prototype.heyayan=function(){
    console.log(`Ayan says hello`);
}
// myHeroPower.ayan()
// myhero.ayan()
// myhero.heyayan() // array have this power to access this 
// myHeroPower.heyayan() // it cannot acces heyayan() bcoz i didnt give it to it 




// Inheritance
const user ={
    name:"chai",
    email:"chai@gmail.com"

}

const Teacher={
    sub: "Maths"
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignMent: 'Js Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user




//  Modern Inheeritance
Object.setPrototypeOf(TeachingSupport, Teacher)


//  The quetions is create a method in string u can access true value of string 
let anothorname="AYANKHAN       "

String.prototype.trueLength=function(){
    console.log(this);
    console.log(`The true length is ${this.trim().length}`);
}

anothorname.trueLength();

"ayankhanpathan".trueLength()
"technoIndiaNJR".trueLength()