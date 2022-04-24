const UserService = require('./../../App/Services/UserService')

describe("Test for UserServices", () => {
    test('1. Create a new User using the UserService', () => {
        const user = UserService.create(1,"Xero4207","Alexis")
        expect(user.username).toBe("Xero4207")
        expect(user.name).toBe("Alexis")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
     });
})