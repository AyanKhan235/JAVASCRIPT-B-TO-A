class user{
    constructor(username){
        this.username=username
    }
    logMe(){
     return `USERNAME IS ${this.username}`
    }
}


class Teacher extends user{
    constructor(username, email, password){
        super(username) // u know behind the scene of strory call and this will go with function of other
        this.email=email
        this.password=password
    }

    newCoourse(){
        console.log(`A new Course added by ${this.username}`);
    }
}
// without new cannot invoke constructor
const chai= new Teacher("chai", "chai@gmail.com", 1234)
console.log(chai);
chai.newCoourse();


const masalachai=new user("AYANKHAN")
masalachai.logMe()



console.log(chai === masalachai); // false
console.log(chai===Teacher); // false // its not same instance diya jata hai Teacher ka
console.log(chai instanceof Teacher);
console.log(chai instanceof user);

