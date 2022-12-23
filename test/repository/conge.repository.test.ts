import { Conge } from "../../database/connect";
import { CongeDTO } from "../../DTO/conge.dto";
import { CongeRepository } from "../../repository/conge.repository";
import { congeId } from "../../types/conge";

describe('CongeRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Conge find by id', () => {
        it("doit retourne les details du Conge", async () => {
            const id = 1;

            const mockReponse: congeId = {
                id: 1,
                date_debut: new Date('2020-01-01'),
                date_fin: new Date('2020-01-01'),
                ActiviteId: 0
            }

            const expected: CongeDTO = {
                date_debut: new Date('2020-01-01'),
                date_fin: new Date('2020-01-01'),
                ActiviteId: 0
            }

            const repo = new CongeRepository()
             Conge.findOne =  jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

             expect(result).toEqual(expected)
             expect(Conge.findOne).toHaveBeenCalledTimes(1)
             expect(Conge.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Conge findAll', () => {
        it("doit retourne les details des Conges", async () => {
            const mockReponse : congeId[] = [
                {
                     id: 1,
                     date_debut: new Date('2020-02-01'),
                     date_fin: new Date('2020-02-02'),
                     ActiviteId: 1

                }, {
                    id: 2,
                    date_debut: new Date('2020-01-01'),
                    date_fin: new Date('2020-01-02'),
                    ActiviteId: 1
                }
            ]

            const expected: CongeDTO[] = [
                {
                    date_debut: new Date('2020-02-01'),
                    date_fin: new Date('2020-02-02'),
                    ActiviteId: 1
                }, {
                    date_debut: new Date('2020-01-01'),
                    date_fin: new Date('2020-01-02'),
                    ActiviteId: 1
                }
            ]

            const repo = new CongeRepository()
            Conge.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Conge.findAll).toHaveBeenCalledTimes(1)
        })
    })

})