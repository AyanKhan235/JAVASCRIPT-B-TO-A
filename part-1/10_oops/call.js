function setUserName(username){
    this.username=username
    console.log(`called`);
}


function createUser(username, email, password){
    // setUserName(username)
    // function will called but value will be in onother context execution when inner will be out of execution value vanish
    //  to hold the value we user call with this method bcox another will save in tehre this so we pass our this 
    setUserName.call(this, username)
    this.email=email
    this.passwor=password
}


const chai= new createUser("AYAN", "babukhan@gmail.com", 123)
console.log(chai);