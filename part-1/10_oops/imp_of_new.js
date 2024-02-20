function createUser(username, price){
    this.username=username
    this.price=price
}
createUser.prototype.increment=function(){
    this.price++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.price}`);
}

// const user1=createUser("chai", 25)
// when we not use new and prototype has been created by us so it cannot access its only can access function property
// user1.printMe()

// all will be access 
const user1= new createUser("chai", 25)
const user2= new createUser("tea", 200)
user1.increment()
user1.printMe()
user2.increment()
user2.printMe()

