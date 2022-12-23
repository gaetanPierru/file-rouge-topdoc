import { Planning } from "../../database/connect";
import { PlanningDTO } from "../../DTO/planning.dto";
import { PlanningRepository } from "../../repository/planning.repository";
import { planningId, planningTypes } from "../../types/planning";

describe('PlanningRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('Planning find by id', () => {
        it("doit retourne les details du Planning", async () => {
            const id = 1;

            const mockReponse: planningId = {
                id: 1,
                nom_planning: "a",
                date_debut_planning: new Date('2020-01-01'),
                duree_validite_calendrier: 0,
                activiteId: 0
            }

            const expected: PlanningDTO = {
                nom_planning: "a",
                date_debut_planning: new Date('2020-01-01'),
                duree_validite_calendrier: 0,
                activiteId: 0
            }

            const repo = new PlanningRepository()
             Planning.findOne =  jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

             expect(result).toEqual(expected)
             expect(Planning.findOne).toHaveBeenCalledTimes(1)
             expect(Planning.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('Planning findAll', () => {
        it("doit retourne les details des Plannings", async () => {
            const mockReponse : planningId[] = [
                {
                     id: 1,
                     date_debut_planning: new Date('2020-02-01'),
                     duree_validite_calendrier: 6,
                     activiteId: 1,
                     nom_planning: 'a'

                }, {
                    id: 2,
                    date_debut_planning: new Date('2020-01-01'),
                    duree_validite_calendrier: 12,
                    activiteId: 1,
                    nom_planning: 'b'
                }
            ]

            const expected: PlanningDTO[] = [
                {
                    date_debut_planning: new Date('2020-02-01'),
                    duree_validite_calendrier: 6,
                    activiteId: 1,
                    nom_planning: 'a'
                }, {
                    date_debut_planning: new Date('2020-01-01'),
                    duree_validite_calendrier: 12,
                    activiteId: 1,
                    nom_planning: 'b'
                }
            ]

            const repo = new PlanningRepository()
            Planning.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(Planning.findAll).toHaveBeenCalledTimes(1)
        })
    })

    describe('Planning post', () => {
        it("doit retourne les details du Planning", async () => {

            const mockReponse: planningTypes = {
                nom_planning: "a",
                date_debut_planning: new Date('2020-01-01'),
                duree_validite_calendrier: 6,
                activiteId: 0
            }

            const expected: PlanningDTO = {
                nom_planning: "a",
                date_debut_planning: new Date('2020-01-01'),
                duree_validite_calendrier: 6,
                activiteId: 0
            }

            Planning.create = jest.fn().mockResolvedValue(mockReponse)

            const repo = new PlanningRepository()
            const result = await repo.create(mockReponse)

            expect(result).toEqual(expected)
            expect(Planning.create).toHaveBeenCalledTimes(1)
        })
    })

})