function user(email, password){
    this._password=password
    this._email=email

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password
        },
        set: function(value){
            this._password=value
        }
    })
    
    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }
    })

}

const chai= new user("ayan@h", 123)
console.log(chai.password);
console.log(chai.email);
