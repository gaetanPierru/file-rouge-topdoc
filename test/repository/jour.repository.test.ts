import { Jour } from "../../database/connect";
import { JourDTO } from "../../DTO/jour.dto";
import { JourRepository } from "../../repository/jour.repository";
import { jourId } from "../../types/jour";

describe('JourRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Jour find by id', () => {
        it("doit retourne les details du Jour", async () => {
            const id = 1;

            const mockReponse: jourId = {
                id: 1,
                jour: 0,
                heure_debut_journee: new Date('2020-01-01'),
                heure_fin_journee: new Date('2020-01-01'),
                duree_crenaux: 0
            }

            const expected: JourDTO = {
                jour: 0,
                heure_debut_journee: new Date('2020-01-01'),
                heure_fin_journee: new Date('2020-01-01'),
                duree_crenaux: 0
            }

            const repo = new JourRepository()
             Jour.findOne =  jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

             expect(result).toEqual(expected)
             expect(Jour.findOne).toHaveBeenCalledTimes(1)
             expect(Jour.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Jour findAll', () => {
        it("doit retourne les details des Jours", async () => {
            const mockReponse : jourId[] = [
                {
                     id: 1,
                     heure_debut_journee: new Date('2020-02-01'),
                     heure_fin_journee: new Date('2020-02-02'),
                     jour: 1,
                     duree_crenaux: 30

                }, {
                    id: 2,
                    heure_debut_journee: new Date('2020-01-01'),
                    heure_fin_journee: new Date('2020-01-02'),
                    jour: 2,
                    duree_crenaux: 30
                }
            ]

            const expected: JourDTO[] = [
                {
                    heure_debut_journee: new Date('2020-02-01'),
                    heure_fin_journee: new Date('2020-02-02'),
                    jour: 1,
                    duree_crenaux: 30
                }, {
                    heure_debut_journee: new Date('2020-01-01'),
                    heure_fin_journee: new Date('2020-01-02'),
                    jour: 2,
                    duree_crenaux: 30
                }
            ]

            const repo = new JourRepository()
            Jour.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Jour.findAll).toHaveBeenCalledTimes(1)
        })
    })

})