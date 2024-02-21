class user{
    constructor(email, password){
        this.password=password
        this.email=email
    }

    // getter or setter ek sath aayenger and set or constructor dono ek sath na chale isliey  set me value ka nam change kr denge and get me setterwala hi user krenge


    //  property ka naam same rhega getter or setter me 
    get password(){
        return `khan${this._password}ayan`
    }
    set password(value){
        this._password=value
    }
}

const chai = new user("ayan", 123)
console.log(chai.password);