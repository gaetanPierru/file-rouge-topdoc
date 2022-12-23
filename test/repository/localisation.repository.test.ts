import { Localisation } from "../../database/connect";
import { localisationDTO } from "../../DTO/localisation.dto";
import { LocalisationRepository } from "../../repository/localisation.repository";
import { localisationId, localisationTypes } from "../../types/localisation";

describe('LocalisationRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Localisation find by id', () => {
        it("doit retourne les details de la Localisation", async () => {
            const id = 1;

            const mockReponse: localisationId = {
                id: 1,
                numero_de_rue: 0,
                address: "a",
                code_postal: 0,
                ville: "a"
            }

            const expected: localisationDTO = {
                numero_de_rue: 0,
                address: "a",
                code_postal: 0,
                ville: "a"
            }

            const repo = new LocalisationRepository()
             Localisation.findOne =  jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

             expect(result).toEqual(expected)
             expect(Localisation.findOne).toHaveBeenCalledTimes(1)
             expect(Localisation.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Localisation findAll', () => {
        it("doit retourne les details des Localisations", async () => {
            const mockReponse : localisationId[] = [
                {
                     id: 1,
                     numero_de_rue: 1,
                     address: "rue",
                     code_postal: 0o1234,
                     ville: 'inconnue'
                }, {
                    id: 2,
                    numero_de_rue: 2,
                    address: 'rue',
                    code_postal: 0o4321,
                    ville: 'unknown'
                }
            ]

            const expected: localisationDTO[] = [
                {
                    numero_de_rue:1,
                    address: 'rue',
                    code_postal: 0o1234,
                    ville: 'inconnue'
                }, {
                    numero_de_rue: 2,
                    address: 'rue', 
                    code_postal: 0o4321,
                    ville: 'unknown'
                }
            ]

            const repo = new LocalisationRepository()
            Localisation.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Localisation.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Localisation post', () => {
        it("doit retourne les details du Localisation", async () => {

            const mockReponse: localisationTypes = {
                numero_de_rue: 0,
                address: "rue",
                code_postal: 12345,
                ville: "unknown"
            }

            const expected: localisationDTO = {
                numero_de_rue: 0,
                address: "rue",
                code_postal: 12345,
                ville: "unknown"
            }

            Localisation.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new LocalisationRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Localisation.create).toHaveBeenCalledTimes(1)
        })
    })

})