import { IRepository } from "./core/repository.interface";
import { PlanningDTO } from "../DTO/planning.dto";
import { Planning } from "../database/connect";
import { PlanningMapper } from "../mapper/planning.mapper";
import { planningId } from "../types/planning";

export class PlanningRepository implements IRepository<PlanningDTO> {
    findById(id: number): Promise<PlanningDTO | null> {
        return Planning.findByPk(id).then((Localisation: planningId | null) => PlanningMapper.mapToDto(Localisation))
    }
    findAll(): Promise<PlanningDTO[]> {
        return Planning.findAll().then((plannings: planningId[]) => plannings.map((planning) => PlanningMapper.mapToDto(planning)))
    }
    create(t: PlanningDTO): Promise<PlanningDTO> {
        return Planning.create(t).then((user: planningId) => PlanningMapper.mapToDto(user))
    }
    delete(id: number): Promise<number |boolean> {
        return Planning.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: PlanningDTO, id: number): Promise<number |boolean> {
        return Planning.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}