const User = require('./../Models/User')

class UserService{
    static create(id,username,name){
        return new User(id,username,name,"Sin Bio")
    }

    static getInfo(user){
        return [user.id,user.username,user.name,user.bio]
    }
}

// Exportamos la clase
module.exports= UserService