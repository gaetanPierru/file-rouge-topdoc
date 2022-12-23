import User from "../../database/connect";
import { userDTO } from "../../DTO/user.dto";
import { UserRepository } from "../../repository/user.repository";
import { userId, userTypes } from "../../types/user";

describe('UserRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('User find by id', () => {
        it("doit retourne les details de l'utilisateur", async () => {
            const id = 1;

            const mockReponse = { id: 1, mot_de_passe: "string", email: "email", telephone: "780372674", genre: "M", prenom: "p", nom: "n", date_de_naissance: "2020-01-01" }

            const expected = { email: "email", telephone: "780372674", genre: "M", prenom: "p", nom: "n", date_de_naissance: "2020-01-01" }

            const repo = new UserRepository()
            User.findOne = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

            expect(result).toEqual(expected)
            expect(User.findOne).toHaveBeenCalledTimes(1)
            expect(User.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('User findAll', () => {
        it("doit retourne les details des utilisateurs", async () => {
            const mockReponse : userId[] = [
                {
                     id: 1, 
                     mot_de_passe: "string", 
                     email: "emailtest@email.com", 
                     telephone: "780372674", 
                     genre: "M", 
                     prenom: "p", 
                     nom: "n", 
                     date_de_naissance: new Date("2020-01-01") ,
                     localisationId: 1
                }, {
                    id: 2, 
                    mot_de_passe: "string", 
                    email: "email@test.com", 
                    telephone: "780372674", 
                    genre: "M", 
                    prenom: "p", 
                    nom: "n", 
                    date_de_naissance: new Date("2020-01-01") ,
                    localisationId: 2
                }
            ]

            const expected: userDTO[] = [
                {
                    email: "emailtest@email.com", 
                    telephone: "780372674", 
                    genre: "M", 
                    prenom: "p", 
                    nom: "n", 
                    date_de_naissance: new Date("2020-01-01")
                }, {
                    email: "email@test.com", 
                    telephone: "780372674", 
                    genre: "M", 
                    prenom: "p", 
                    nom: "n", 
                    date_de_naissance: new Date("2020-01-01")
                }
            ]

            const repo = new UserRepository()
            User.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(User.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('User post', () => {
        it("doit retourne les details de l'utilisateur", async () => {

            const mockReponse: any = {
                email: "a@a.com",
                telephone: "0123456789",
                mot_de_passe: "test",
                localisationId: 0,
                prenom: "gaet",
                nom: "an",
                genre: "M",
                date_de_naissance: new Date('2000-01-20')
            }

            const expected: userDTO = {
                email: "a@a.com",
                telephone: "0123456789",
                prenom: "gaet",
                nom: "an",
                genre: "M",
                date_de_naissance: new Date('2000-01-20')
            }

            User.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new UserRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(User.create).toHaveBeenCalledTimes(1)
        })
    })

})