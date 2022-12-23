import { RendezVous } from "../../database/connect";
import { RendezVousDTO } from "../../DTO/rendezVous.dto";
import { RendezVousRepository } from "../../repository/rendezVous.repository";
import { rendezVousId } from "../../types/rendezVous";

describe('RendezVousRepository', () => {
    beforeEach(() =>
        jest.resetAllMocks()
    )

    describe('RendezVous find by id', () => {
        it("doit retourne les details de l'RendezVous", async () => {
            const id = 1;

            const mockReponse: rendezVousId = {
                id: 1,
                planningId: 0,
                utilisateurId: 0,
                date_rendez_vous: new Date('2020-01-01'),
                duree_rendez_vous: 0
            }

            const expected: RendezVousDTO = {
                planningId: 0,
                utilisateurId: 0,
                date_rendez_vous: new Date('2020-01-01'),
                duree_rendez_vous: 0
            }

            const repo = new RendezVousRepository()
             RendezVous.findOne =  jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findById(id)

             expect(result).toEqual(expected)
             expect(RendezVous.findOne).toHaveBeenCalledTimes(1)
             expect(RendezVous.findOne).toBeCalledWith({
                where: {
                    id: id
                }
            })
        })
    })

    describe('RendezVous findAll', () => {
        it("doit retourne les details des RendezVouss", async () => {
            const mockReponse : rendezVousId[] = [
                {
                     id: 1,
                     date_rendez_vous: new Date('2020-02-01'),
                     duree_rendez_vous: 30,
                     planningId: 1,
                     utilisateurId: 1

                }, {
                    id: 2,
                    date_rendez_vous: new Date('2020-01-01'),
                    duree_rendez_vous: 30,
                    planningId: 2,
                    utilisateurId: 2
                }
            ]

            const expected: RendezVousDTO[] = [
                {
                    date_rendez_vous: new Date('2020-02-01'),
                    duree_rendez_vous: 30,
                    planningId: 1,
                    utilisateurId: 1
                }, {
                    date_rendez_vous: new Date('2020-01-01'),
                    duree_rendez_vous: 30,
                    planningId: 2,
                    utilisateurId: 2
                }
            ]

            const repo = new RendezVousRepository()
            RendezVous.findAll = jest.fn().mockResolvedValue(mockReponse)

            const result = await repo.findAll()

            expect(result).toEqual(expected)
            expect(RendezVous.findAll).toHaveBeenCalledTimes(1)
        })
    })

})