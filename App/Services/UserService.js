const User = require('./../Models/User')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }
}

// Exportamos la clase
module.exports= UserService