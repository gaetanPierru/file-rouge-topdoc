import { IRepository, IRepositoryPlanning } from "./core/repository.interface";
import { PlanningDTO, PlanningFullDTO } from "../DTO/planning.dto";
import { Jour, Planning } from "../database/connect";
import { PlanningMapper } from "../mapper/planning.mapper";
import { planningId } from "../types/planning";

export class PlanningDayRepository implements IRepositoryPlanning<PlanningFullDTO> {
    findById(id: number): Promise<PlanningFullDTO | null> {
        return Planning.findByPk(id, {
            include: [
                {
                    model: Jour,
                    required: true,
                },
            ],
            
        }).then((planning: any) => PlanningMapper.mapToFullDto(planning))
    }
    create(t: Omit<PlanningFullDTO, "id">): Promise<PlanningFullDTO | null> {
        throw new Error("Method not implemented.");
    }
    update(t: Partial<PlanningFullDTO>, id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<number | boolean> {
        throw new Error("Method not implemented.");
    }


}