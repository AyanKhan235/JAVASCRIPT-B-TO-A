const user = {
    username:"Ayan",
    loginCount:8,
    signin:true,
    userDetail: function(){
        // console.log("DATA get from dat base");
        // console.log(usernanme); // undefined bcoxz its not know which username are you taking
        console.log(this.username);
        console.log(this); // its have full detail inser user object

    }
}
// console.log(user.username);
// console.log(user.userDetail());
// console.log(this);



// why we use new keyword
const User= function (username, loginCount, isloggin){
    this.username=username
    this.loginCount=loginCount
    this.isloggin=isloggin
    // return this
    // by default its have return inplicitly when we use new keyword 


    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
}

const userOne=User("AYAN", 10, true)
console.log(userOne); // it will retuan which we have send
const userTwo=User("pathan", 2, false)
console.log(userOne);// same value as userTwo but we have not chnage userTwo overright it 
console.log(userTwo); // thats why we use new keyword

// when u use new keyword first of all empty object created  which is called instance
//  constructor function call by new keyword and retunr value
// now we use new so all are new and diff
const user1= new User("AYANKHAN", 5, true)
const user2= new User("KHANSAHAB", 10,  false)
// 1 and 2 both are different bcouse of new keyword give new instance
// not overWrite
console.log(user1);
console.log(user2);
console.log(user2.constructor); // its nothing but refernce of self object
console.log(user2.greeting());

// console.log(user1 instanceof user2 ); 


