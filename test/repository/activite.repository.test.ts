import { Activity } from "../../database/connect";
import { activiteDTO } from "../../DTO/activite.dto";
import { ActiviteRepository } from "../../repository/activite.repository";
import { activityTypes } from "../../types/activity";

describe('ActiviteRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Activite find by id', () => {
        it("doit retourne les details de l'activite", async () => {
            const id = 1;

            const mockReponse = {
                id: 1,
                fonction: 'medecin',
                description: 'depuis 30 ans',
                type: 'jsp',
                estActif: true,
                localisationId: 1
            }

            const expected = {
                fonction: 'medecin',
                description: 'depuis 30 ans',
                type: 'jsp',
                estActif: true
            }

            const repo = new ActiviteRepository()
            Activity.findOne = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

            expect(result).toEqual(expected)
            expect(Activity.findOne).toHaveBeenCalledTimes(1)
            expect(Activity.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Activite findAll', () => {
        it("doit retourne les details des activites", async () => {
            const mockReponse = [
                {
                    id: 1,
                    fonction: 'medecin',
                    description: 'depuis 30 ans',
                    type: 'jsp',
                    estActif: true,
                    localisationId: 1
                }, {
                    id: 2,
                    fonction: 'medecin',
                    description: 'depuis 10 ans',
                    type: 'allo',
                    estActif: true,
                    localisationId: 2
                }
            ]

            const expected = [
                {
                    fonction: 'medecin',
                    description: 'depuis 30 ans',
                    type: 'jsp',
                    estActif: true
                }, {
                    fonction: 'medecin',
                    description: 'depuis 10 ans',
                    type: 'allo',
                    estActif: true,
                }
            ]

            const repo = new ActiviteRepository()
            Activity.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Activity.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Activite post', () => {
        it("doit retourne les details de l'activite", async () => {

            const mockReponse: activityTypes = {
                fonction: 'medecin',
                description: 'depuis 30 ans',
                type: 'jsp',
                estActif: true,
                localisationId: 1
            }

            const expected: activiteDTO = {
                fonction: 'medecin',
                description: 'depuis 30 ans',
                type: 'jsp',
                estActif: true
            }

            Activity.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new ActiviteRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Activity.create).toHaveBeenCalledTimes(1)
        })
    })

})