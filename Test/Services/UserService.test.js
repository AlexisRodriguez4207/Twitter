const User = require('../../App/Models/User');
const UserService = require('./../../App/Services/UserService')

describe("Test for UserServices", () => {
    test('1. Create a new User using the UserService', () => {
        const user = UserService.create(1,"Xero4207","Alexis")
        
        // Codigo Esperado
        expect(user.username).toBe("Xero4207")
        expect(user.name).toBe("Alexis")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });

    test("2. Get all User data in a list", () =>{
        const user = UserService.create(1,"Xero4207","Alexis")
        const userInfoList = UserService.getInfo(user)

        // Validacion
        expect(userInfoList[0]).toBe(1)
        expect(userInfoList[1]).toBe("Xero4207")
        expect(userInfoList[2]).toBe("Alexis")
        expect(userInfoList[3]).toBe("Sin Bio")
    });

    test("3. Update Username:", () => {
        const user = UserService.create(1, "Xero4207", "Alexis")
        UserService.UpdateUserName(user,"Xero")
        expect(user.username).toBe("Xero")
    })
    
})