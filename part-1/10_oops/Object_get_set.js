const user={
    _email:"Ayan@123",
    _password:123,

    get email(){
        return this._email
    },

    set password(value){
        this._password=value
    }
}

const chai = Object.create(user)
console.log(chai.email);