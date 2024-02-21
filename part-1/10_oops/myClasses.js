// class user{
//     constructor(username, email, password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }


//     encryptPassword(){
//         return  `${this.password}abcd1234`
//     }
//     changeUserName(){
//         return  `${this.username.toUpperCase()}`
//     }
// }


// const chai= new user("Ayan", "babukhan640b@gmail.com", 1234)

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());


//  behind the scene 
function user(username, email, password){
this.username=username
this.email=email
this.password=password
}


user.prototype.encryptPassword=function(){
    return `${this.password}abc142`
}
user.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}


const tea= new user("babu", "ayna@google.com", 2543)
console.log(tea.encryptPassword());

console.log(tea.changeUserName());