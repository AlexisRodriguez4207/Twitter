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
    });

    test("4. Given a list of users give me the list of usernames", () =>{
        const user1 = UserService.create(1,"Xero4207","Alexis")
        const user2 = UserService.create(2,"Xero2","Alexis")
        const user3 = UserService.create(3,"Xero3","Alexis")
        const usernames = UserService.getAllUsernames([user1,user2,user3])

        // Validacion de codigo
        expect(usernames).toContain("Xero4207")
        expect(usernames).toContain("Xero2")
        expect(usernames).toContain("Xero3")
    });   
})