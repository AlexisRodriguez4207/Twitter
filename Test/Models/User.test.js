const User = require('./../../App/Models/User')

describe("Unit Tests for User class", () => {
    test('Create an User Object', () => {
        // Aqui va el codigo que vas a usar en tu app
        const user = new User(1,"Xero4207","Alexis", "Bio")
        
        //Validaciones de los resultados
        // Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha que es el esperado

        expect(user.id).toBe(1)
        expect(user.username).toBe("Xero4207")
        expect(user.name).toBe("Alexis")
        expect(user.bio).toBe("Bio")
        
        // Verifica que el valor no sea undefined
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    });


    test("Add getters", () => {
        const user = new User(1,"Xero4207","Alexis","Bio")
        expect(user.getUsername).toBe("Xero4207")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()
    });
})