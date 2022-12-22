import { Activity } from "../../database/connect";
import { ActiviteRepository } from "../../repository/activite.repository";

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
             Activity.findOne =  jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

             expect(result).toEqual(expected)
            //  expect(Activity.findOne).toHaveBeenCalledTimes(1)
            //  expect(Activity.findOne).toBeCalledWith({
            //     where: {
            //         id: id
            //     }
            // })
        })
    })

})