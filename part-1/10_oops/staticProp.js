class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email=email
    }
    static createId(){
        return `123`
    }
}
const tea  = new  user("babu")
// console.log(tea.createId()); // cannot acess
const chai =  new Teacher("AYAN", "babu@gmail.com")
// console.log(chai.createId());  // cannot access   

console.log(Teacher.createId());

